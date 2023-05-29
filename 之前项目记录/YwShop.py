# http://www.yiwugo.com/ 使用自动化获取义务购商品网站搜索饰品的前十页数据，包含商品名称、商品价格、商品info，商家地址
import random
import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec
from selenium.common.exceptions import TimeoutException, NoSuchElementException


class YwShop:
    def __int__(self):
        self.url = "https://www.yiwugo.com/?cn"
        options = webdriver.ChromeOptions()
        user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"
        options.add_argument('user-agent={}'.format(user_agent))
        # options.add_argument('--headless')
        options.add_argument('--disable-blink-features=AutomationControlled')
        # 隐藏“Chrome正在受到自动软件的控制”
        options.add_experimental_option('useAutomationExtension', False)
        options.add_experimental_option('excludeSwitches', ['enable-automation'])
        self.browser = webdriver.Chrome(options=options)

    def base(self):
        # self.browser.implicitly_wait(10)
        self.browser.get(self.url)
        search_input = self.browser.find_element(By.ID, 'inputkey')
        search_input.send_keys("饰品")
        self.browser.find_element(By.XPATH, "//div[@class='search-index']//span[@class='search-button']").click()

    def get_data(self):
        wait = WebDriverWait(self.browser, 10)
        # 踩坑一： ec.presence_of_element_located的参数需要跟一个元组
        wait.until(ec.presence_of_element_located((By.XPATH,
                                                   '//div[@class="pro_list_product_img2"]')))
        self.drop_down()
        product_list = self.browser.find_elements(By.XPATH,
                                                  '//div[@class="pro_list_product_img2"] | //div[@class="pro_list_product_img2 brandflag"]')
        print(len(product_list))
        for product in product_list:
            try:
                title = product.find_element(By.XPATH, './p//a[@class="productloc"]').get_attribute('title')
            except NoSuchElementException or TimeoutException as e:
                print(e.msg)
                title = ''
            try:
                price = product.find_element(By.XPATH, './/em[@class="fontred fontbold font16px"]').text
            except NoSuchElementException or TimeoutException as e:
                print(e.msg)
                price = ''
            try:
                info = product.find_element(By.XPATH, './/span[@class="pri-right"]/span').text
            except NoSuchElementException or TimeoutException as e:
                print(e.msg)
                info = ''
            try:
                address = product.find_element(By.XPATH, './/li[@class="shshopname"]').text
            except NoSuchElementException or TimeoutException as e:
                print(e.msg)
                address = ''
            print(title, price, info, address)
        self.next_page()

    def next_page(self):
        try:
            next_page_click = self.browser.find_element(By.XPATH, '//a[@class="page_next_yes"]')
            next_page_click.click()
            self.get_data()
        except NoSuchElementException or TimeoutException as e:
            print(e.msg)
            print("爬虫结束")
        finally:
            self.browser.close()

    def drop_down(self):
        for x in range(1, 10):
            j = x / 10
            js = "document.documentElement.scrollTop =  document.documentElement.scrollHeight * {}".format(j)
            self.browser.execute_script(js)
            time.sleep(random.randint(400, 800) / 1000)


if __name__ == '__main__':
    yw_shop = YwShop()
    yw_shop.__int__()
    yw_shop.base()
    yw_shop.get_data()
