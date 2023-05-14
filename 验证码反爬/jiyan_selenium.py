# 休息几分钟

'''

自个触发的验证码
    1、打开网页
    2、填写信息
    3、点击滑块
        图片获取
        缺口识别
        拖拽滑块
    4、点击提交


抓数据 速度很快
    弹出验证码
    怎么解决：
        1、根据响应的数据进行分析 一般会包含验证码信息 或者有独特的标签记号
        2、使用代码过滑块  就是一个签名认证
     结论：写代码的时候需要加异常捕获

'''
import time
from selenium import webdriver
import base64
import ddddocr
from selenium.webdriver.common.by import By

# 打工浏览器
options = webdriver.ChromeOptions()
# navigator.webdriver
options.add_argument('--disable-blink-features=AutomationControlled')
browsers = webdriver.Chrome(chrome_options=options)
browsers.maximize_window()
browsers.get('https://www.geetest.com/demo/slide-float.html')
# 自动化过滑块 最好是最大化  可能会比例缩放

# 2、填写信息
browsers.find_element(by=By.ID, value='username').send_keys('13535353535')

browsers.find_element(By.ID, value='password').send_keys('12312313')
time.sleep(2)

#  3、点击滑块
btn = browsers.find_element(By.XPATH, value='//div[@class="geetest_btn"]/div[@class="geetest_radar_btn"]')
# btn = browsers.find_element_by_xpath('//div[@class="geetest_btn"]/div[@class="geetest_radar_btn"]')
btn.click()

time.sleep(2)
# 点击弹出验证码  滑块内容 还没出来 我们就获取了    滑块标签是第三方注入的
# 3.1 图片获取
bg_src = browsers.execute_script(
    "return document.getElementsByClassName('geetest_canvas_bg geetest_absolute')[0].toDataURL('image/png')")

full_src = browsers.execute_script(
    "return document.getElementsByClassName('geetest_canvas_fullbg geetest_fade geetest_absolute')[0].toDataURL('image/png')")

bg_base = bg_src.split(',')[1]
bg_base = base64.b64decode(bg_base)
with open('bg.jpg', 'wb') as f:
    f.write(bg_base)

full_base = full_src.split(',')[1]
full_base = base64.b64decode(full_base)
with open('full.jpg', 'wb') as f:
    f.write(full_base)


# 3.2 进行缺口识别
def read_img():
    slide = ddddocr.DdddOcr(det=False, ocr=False)
    with open('bg.jpg', 'rb') as f:
        target_bytes = f.read()
    with open('full.jpg', 'rb') as f:
        background_bytes = f.read()
    res = slide.slide_comparison(target_bytes, background_bytes)
    return res.get('target')[0]


x = read_img()

# 3.3 滑块拖动
# 选中拖动的按钮
# slide = browsers.find_element_by_css_selector('div.geetest_slider_button')
slide = browsers.find_element(By.CSS_SELECTOR, value='div.geetest_slider_button')

action_cn = webdriver.ActionChains(browsers)  # 事件

# 点击
action_cn.click_and_hold(slide)
action_cn.pause(0.2)
# 拖动
action_cn.move_by_offset(x - 10, 0)  # 标准位置  要减去10 所有的极验如此
action_cn.pause(0.8)
action_cn.move_by_offset(10, 0)  # 往前走 10  模拟手抖一抖
action_cn.pause(1.4)
action_cn.move_by_offset(-10, 0)  # 回退10

# 松开鼠标
action_cn.release()
action_cn.perform()

# 点击提交
browsers.find_element(By.ID, value='btn').click()
# browsers.find_element_by_id('btn').click()

time.sleep(10)
'''
鼠标动作
    click_and_hold  点击鼠标左键 不放开
    move_by_offset  鼠标移动指定距离
    release  松开鼠标

行为控制
    perform 执行事件
    pause 事件的时间间隔
'''
