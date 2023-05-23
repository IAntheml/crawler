import gzip
import hashlib

body = '{"magic_tag":"ss_app_log","header":{"display_name":"抖音","update_version_code":14309900,"manifest_version_code":140301,"app_version_minor":"","aid":1128,"channel":"lephone_xh_dy_sd_0111","appkey":"57bfa27c67e58e7d920028d3","package":"com.ss.android.ugc.aweme","app_version":"14.3.0","version_code":140300,"sdk_version":"2.14.0-rc.3-backoff","sdk_target_version":29,"git_hash":"490e7989","os":"Android","os_version":"10","os_api":29,"device_model":"M2007J17C","device_brand":"Redmi","device_manufacturer":"Xiaomi","cpu_abi":"armeabi-v7a","release_build":"5f4d92a_20210106_b96de116-4fdb-11eb-882c-02420a00006b","density_dpi":408,"display_density":"mdpi","resolution":"2189x1080","language":"zh","mc":"BC:6A:D1:17:61:9A","timezone":8,"access":"wifi","not_request_sender":0,"carrier":"中国电信","mcc_mnc":"46011","rom":"MIUI-V12.0.11.0.QJSCNXM","rom_version":"miui_V12_V12.0.11.0.QJSCNXM","cdid":"3b64d5bc-f6da-43ea-abdf-6ab985383cfe","sig_hash":"aea615ab910015038f73c47e45d21466","device_id":"1324270467154856","openudid":"a07b7ae188385851","install_id":"4191798766077869","clientudid":"3d20f669-e76f-4940-b26b-257a5a6befee","sim_serial_number":[],"region":"CN","tz_name":"Asia\/Shanghai","tz_offset":28800,"sim_region":"cn","oaid":{"req_id":"37906b5d-7ddc-4cc0-a7f2-7945e78339eb","hw_id_version_code":"null","take_ms":"11","is_track_limited":"false","query_times":"4","id":"326d5d6963e25304","time":"1655987707512"},"oaid_may_support":true,"req_id":"cbc9fb9f-396f-4ea0-bb3b-ddc88dca114d","custom":{"filter_warn":0,"web_ua":"Mozilla\/5.0 (Linux; Android 10; M2007J17C Build\/QKQ1.200628.002; wv) AppleWebKit\/537.36 (KHTML, like Gecko) Version\/4.0 Chrome\/87.0.4280.101 Mobile Safari\/537.36"},"pre_installed_channel":"ame_xiaomi2020_1311_yz1","apk_first_install_time":1655916140035,"is_system_app":0,"sdk_flavor":"china"},"_gen_time":1655987707807}'

gzip_body = gzip.compress(body.encode('utf-8'))
java_gzip_body = bytearray(gzip_body)
java_gzip_body[3:10] = [0, 0, 0, 0, 0, 0, 0]

ha = hashlib.md5()
ha.update(bytes(java_gzip_body))
x_ss_stud = ha.hexdigest().upper()

print(x_ss_stud)

# FA9EEF27D4DC4FF97CE01AAB5F728BA2
# FA9EEF27D4DC4FF97CE01AAB5F728BA2
