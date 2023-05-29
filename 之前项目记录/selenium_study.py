# 环境准备
import time

# 声明浏览器对象

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

# --------------------------------------------------初始化配置
options = webdriver.ChromeOptions()
# 禁止图片
prefs = {"profile.managed_default_content_setting.images": 2}
options.add_experimental_option("prefs", prefs)
# 无头模式 在后台运行
options.add_argument("-headless")
# 设置user-agent
user_agent = 'MQQBrowser/26 Mozilla/5.0 (Linux; U; Android 2.3.7; zh-cn; MB200 Build/GRJ22;CyanogenMod-7) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'
options.add_argument('user-agent=%s' % user_agent)
# 隐藏“Chrome正在受到自动软件的控制”
options.add_experimental_option('useAutomationExtension', False)
options.add_experimental_option('excludeSwitches', ['enable-automation'])
# 拓展使用
extension_path = r'E:\BaiduNetdiskDownload\Chrome插件'
options.add_extension(extension_path)
# 设置代理
options.add_argument("--proxy-server=http://58.20.184.187:9091")

browser = webdriver.Chrome(chrome_options=options)

browser.maximize_window()
browser.set_window_size(480, 800)
browser.execute_script('window.open("http://httpbin.org/ip");')

# --------------------------------------------------基本使用 (打开某个页面，获取某个元素，获取整个页面源代码，输入文案，点击等等)
browser.get("https://www.baidu.com")

# send_keys方法用来输入文字或者文件路径
browser.find_element(By.NAME, 'wd').send_keys("selenium")

browser.find_element(By.ID, 'su').click()

print(browser.page_source.encode('utf-8'))

print(browser.get_cookies())

print(browser.get_screenshot_as_file('123.jpg'))

print(browser.current_url)

time.sleep(5)

browser.quit()

# --------------------------------------------------查找单个结点
# find_element(): 用于定位单个的页面元素
# find_elements(): 用于定位一组页面元素，获取到的是一组列表
browser = webdriver.Chrome()
browser.get("http://www.baidu.com")
# 通过name属性选择文本框元素，并设置内容
s = browser.find_element(By.NAME, 'wd')
s.send_keys('衣服')
s.send_keys(Keys.ENTER)

# --------------------------------------------------查找多个结点
browser = webdriver.Chrome()
browser.get('https://www.icswb.com/channel-list-channel-161.html')
lis = browser.find_elements(By.CSS_SELECTOR, '#NewsListContainer li')
print(lis)

# --------------------------------------------------节点交互 输入文字时用 send_keys 方法，清空文字时用 clear 方法，点击按钮时用 click 方法

browser = webdriver.Chrome()
browser.get('https://www.baidu.com')
input = browser.find_element(By.ID, 'kw')
input.send_keys('iPhone')
time.sleep(1)
input.clear()
input.send_keys('iPad')
button = browser.find_element(By.ID, 'su')
button.click()

# --------------------------------------------------切换IFrame： 对于iframe 网页 一定要切换进去才能够定位

browser.get('https://www.douban.com/')
login_iframe = browser.find_element(By.XPATH, '//div[@class="login"]/iframe')
browser.switch_to.frame(login_iframe)
browser.find_element(By.CLASS_NAME, 'account-tab-account').click()
browser.find_element(By.ID, 'username').send_keys('123123123')

# --------------------------------------------------动作链
from selenium.webdriver import ActionChains

browser = webdriver.Chrome()
url = 'http://www.runoob.com/try/try.php?filename=jqueryui-api-droppable'
browser.get(url)
browser.switch_to.frame(
    'iframeResult')  # if isinstance(frame_reference, str) self._driver.find_element(By.ID, frame_reference)
source = browser.find_element(By.CSS_SELECTOR, '#draggable')
target = browser.find_element(By.CSS_SELECTOR, '#droppable')
actions = ActionChains(browser)
actions.drag_and_drop(source, target)
actions.perform()

# --------------------------------------------------页面滚动
browser.execute_script("window.scrollTo(0, document.body.scrollHeight)")
# 相对于当前位置的滚动
browser.execute_script("window.scrollBy(0,700)")
browser.execute_script("window.scrollBy(0,-200)")
# 移动到窗口绝对位置坐标
browser.execute_script("window.scrollTo(0,1600)")

# --------------------------------------------------获取节点信息
url = 'https://pic.netbian.com/4kmeinv/index.html'
browser.get(url)
src = browser.find_elements(By.XPATH, '//ul[@class="clearfix"]/li/a/img')

for i in src:
    url = i.get_attribute('src')
    print(url)

# --------------------------------------------------超时等待  ?隐性等待和显示等待
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

browser = webdriver.Chrome()
browser.get('https://www.baidu.com/')
wait = WebDriverWait(browser, 10)
input = wait.until(EC.presence_of_element_located(By.ID, 'kw'))
button = wait.until(EC.element_to_be_clickable(By.ID, 'su'))
print(input, button)

# --------------------------------------------------选项卡管理
browser.get('https://www.baidu.com')
browser.execute_script("window.open()")
print(browser.window_handles)
browser.switch_to.window(browser.window_handles[1])
browser.get("https://www.baidu.com")
time.sleep(1)
browser.switch_to.window(browser.window_handles[0])
browser.get("https://pic.netbian.com")

# --------------------------------------------------异常管理
from selenium.common.exceptions import TimeoutException, NoSuchElementException

try:
    browser.get("https://www.baidu.com")
except TimeoutException:
    print('Time out')
try:
    browser.find_element(By.ID, 'hello')
except NoSuchElementException:
    print('No element')
finally:
    browser.close()

# --------------------------------------------------绕过检测
options = webdriver.ChromeOptions
options.add_argument('--disable-blink-features=AutomationControlled')
browser = webdriver.Chrome(chrome_options=options)
browser.get('https://bot.sannysoft.com')


# 隐性等待和显示等待
