function get_enviroment(proxy_array) {
    for (var i = 0; i < proxy_array.length; i++) {
        handler = '{\n' + '    get: function(target, property, receiver) {\n' + '        console.log("方法:", "get  ", "对象:", ' + '"' + proxy_array[i] + '" ,' + '"  属性:", property, ' + '"  属性类型:", ' + 'typeof property, ' + // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' + '        return target[property];\n' + '    },\n' + '    set: function(target, property, value, receiver) {\n' + '        console.log("方法:", "set  ", "对象:", ' + '"' + proxy_array[i] + '" ,' + '"  属性:", property, ' + '"  属性类型:", ' + 'typeof property, ' + // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' + '        return Reflect.set(...arguments);\n' + '    }\n' + '}'
        eval('try{\n' + proxy_array[i] + ';\n' + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}catch (e) {\n' + proxy_array[i] + '={};\n' + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}')
    }
}

proxy_array = ['window', 'document', 'navigator', 'location']


get_enviroment(proxy_array)


function NewPro(obj, name) {
    // 把代理对象写活
    return new Proxy(obj, {
        get: function (target, p, receiver) {
            temp = Reflect.get(target, p, receiver);
            // console.log('get:',target,p,target[p])
            // if (typeof p === "string") {
            //     console.log(`对象${name}---> get了属性--> ${p} 值是-->`, target[p]);
            // }
            console.log(`对象${name}---> get了属性--> ${p} 值是-->`, target[p]);
            return temp
        }, set: function (target, p, value, receiver) {
            temp = Reflect.set(target, p, value, receiver);
            if (p instanceof String) {
                console.log('set:', target, p, target[p])
            }
        }
    })
}

// window = NewPro(window, "window")
document = NewPro(document, "document")
navigator = NewPro(navigator, "navigator")
location = NewPro(location, "location")
