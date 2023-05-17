# com.shizhuang.duapp
import frida
import sys

rdev = frida.get_remote_device()
session = rdev.attach("com.shizhuang.duapp")

scr = """
Java.perform(function () {
    var RequestUtils = Java.use("com.shizhuang.duapp.common.utils.RequestUtils");

    function showMap(title,map){
        var result = "";
        var keyset = map.keySet();
        var it = keyset.iterator();
        while(it.hasNext()){
            var keystr = it.next().toString();
            var valuestr = map.get(keystr).toString();
            result += keystr;
            result += "=";
            result += valuestr;
            result += "; ";
        }
        console.log(title, result);
    }
    

    RequestUtils.b.overload('java.util.Map', 'long').implementation = function(map,j){
        // {word=阿玛尼405烂番茄}  1654004981573
        // Object  1654004981573
        showMap("map =>>", map);
        console.log("j =>>",j);
        
        var res = this.b(map,j);
        console.log("newSign=", res);
        return res;
    }

});
"""
script = session.create_script(scr)


def on_message(message, data):
    print(message, data)


script.on("message", on_message)
script.load()
sys.stdin.read()
