import frida
import time

rdev = frida.get_remote_device()
session = rdev.attach("com.ss.android.ugc.aweme")

scr = """
rpc.exports = {   
    ttencrypt:function(bArr,len){
         var res;

         Java.perform(function () {
            var EncryptorUtil = Java.use("com.bytedance.frameworks.encryptor.EncryptorUtil");  

            // 将bArr转换成Java的字节数组。
            var dataByteArray = Java.array('byte',bArr);

            // 调用native方法，并获取返回值。
            res = EncryptorUtil.ttEncrypt(dataByteArray,len);
         });

         return res;
    },
    execandleviathan: function (i2,str){
        var result;
        
        
        Java.perform(function () {
        
        
            // 先处理拼接好的数据（字节数组） m44418a方法
            var bArr = [];
            for(var i=0;i<str.length;i+=2){
                var item = (parseInt(str[i],16) << 4) + parseInt(str[i+1],16);
                bArr.push(item);
            }
            // 转换为java的字节数组
            var dataByteArray = Java.array('byte',bArr);


            // 调用leviathan方法
            var Gorgon = Java.use("com.ss.sys.ces.a");
            result = Gorgon.leviathan(-1, i2 , dataByteArray);   //leviathan为方法名
        });
        
        return result;
    }
}
"""
script = session.create_script(scr)
script.load()

khronos = int(time.time())
un_sign_string = '6c2a0c5df32f1c2dcf537cb1b7c3c28a0000000000000000000000000000000054807aabff5a113a220938e77db4058d00000000000000000000000000000000'
sign_byte_list = script.exports.execandleviathan(khronos, un_sign_string)
print(sign_byte_list)

import gzip

body = '{"magic_tag":"ss_app_log","header":{"display_name":"抖音短视频","update_version_code":11509900,"manifest_version_code":110501,"app_version_minor":"","aid":1128,"channel":"gdt_growth14_big_yybwz","appkey":"57bfa27c67e58e7d920028d3","package":"com.ss.android.ugc.aweme","app_version":"11.5.0","version_code":110500,"sdk_version":"2.14.0-alpha.4","sdk_target_version":29,"git_hash":"c1aa4085","os":"Android","os_version":"10","os_api":29,"device_model":"M2007J17C","device_brand":"Redmi","device_manufacturer":"Xiaomi","cpu_abi":"armeabi-v7a","release_build":"b44f245_20200615_436d6cbc-aecc-11ea-bfa1-02420a000026","density_dpi":408,"display_density":"mdpi","resolution":"2189x1080","language":"zh","mc":"BC:6A:D1:17:61:9A","timezone":8,"access":"wifi","not_request_sender":0,"carrier":"中国电信","mcc_mnc":"46011","rom":"MIUI-V12.0.11.0.QJSCNXM","rom_version":"miui_V12_V12.0.11.0.QJSCNXM","cdid":"d3da9854-cd8a-492c-97d9-6d5be7bbcb19","sig_hash":"aea615ab910015038f73c47e45d21466","openudid":"a07b7ae188385851","clientudid":"3abfcd9b-7663-4c00-be93-859e40fa0a0a","sim_serial_number":[],"region":"CN","tz_name":"Asia\/Shanghai","tz_offset":28800,"sim_region":"cn","oaid":{"req_id":"9a46a678-ac93-486e-a580-8706dcc364d5","hw_id_version_code":"null","take_ms":"30","is_track_limited":"null","query_times":"1","id":"326d5d6963e25304","time":"1655912338098"},"oaid_may_support":true,"req_id":"8bf0706d-4858-496c-b793-7a5a2ede74e0","custom":{"filter_warn":0,"web_ua":"Mozilla\/5.0 (Linux; Android 10; M2007J17C Build\/QKQ1.200628.002; wv) AppleWebKit\/537.36 (KHTML, like Gecko) Version\/4.0 Chrome\/87.0.4280.101 Mobile Safari\/537.36"},"pre_installed_channel":"ame_xiaomi2020_1311_yz1","apk_first_install_time":1655911912919,"is_system_app":0,"sdk_flavor":"china"},"_gen_time":1655912361673}'
gzip_body = gzip.compress(body.encode('utf-8'))
java_gzip_body = bytearray(gzip_body)
java_gzip_body[3:10] = [0, 0, 0, 0, 0, 0, 0]

# 4.执行so请求体加密（ttencrypt）
ttencrypt_bytes_list = script.exports.ttencrypt(list(java_gzip_body), len(java_gzip_body))
print(ttencrypt_bytes_list)
