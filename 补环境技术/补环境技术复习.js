/*
补环境脚本的实质是代理

let obj = {
    name: '小猪课堂', age: 23
}
let p = new Proxy(obj, handler);
 */
window = global;
document = {};
navigator = {};
location = {};
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
        },
        set: function (target, p, value, receiver) {
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

/*
Handler对象详解
 */

/*
handler.get
该方法用于拦截对象的读取属性操作，比如我们要读取某个对象的属性，就可以使用该方法进行拦截
// 拦截读取属性操作
let p5 = new Proxy(target, {
  get: function (target, property, receiver) {
  }
});
target：被代理的目标对象
property：想要获取的属性名
receiver：Proxy 或者继承 Proxy 的对象

注意：代理的对象属性必须是可配置的，get 函数可以返回任意值。
 */

// 拦截读取属性操作
let p5 = new Proxy({}, {
  get: function (target, property, receiver) {
    console.log("属性名：", property); // 属性名：name
    console.log(receiver); // Proxy {}
    return '小猪课堂'
  }
});
console.log(p5.name); // 小猪课堂

/*
handler.set：当我们给对象设置属性值时，将会触发该拦截。

let p12 = new Proxy(target, {
  set: function (target, property, value, receiver) {
  }
});

target：被代理的目标对象
property：将要被设置的属性名
value：新的属性值
receiver：最初被调用的对象，通常就是 proxy 对象本身

以下操作会触发拦截：
指定属性值：proxy[foo] = bar 和 proxy.foo = bar
指定继承者的属性值：Object.create(proxy)[foo] = bar
Reflect.set()

注意：set() 方法应当返回一个布尔值
 */

let p12 = new Proxy({}, {
  set: function (target, property, value, receiver) {
    target[property] = value;
    console.log('property set: ' + property + ' = ' + value); // property set: a = 10
    return true;
  }
});
p12.a = 10;


/*
handler.apply
该方法主要用于函数调用的拦截，比如我们代理的对象是一个函数，那么我们代理这个函数之后，可以在它调用之前做一些我们想做的事。
let p1 = new Proxy(target, {
  apply: function (target, thisArg, argumentsList) {
  }
});

target：被代理对象，也就是目标函数
thisArg：调用时的上下文对象，也就是 this 指向，它绑定在 handler 对象上面
argumentsList：函数调用的参数数组

注意：这里代理的函数对象必须是可调用的，也就是 target 可调用，否则会报错。
 */

function sum(a, b) {
    return a + b;
}

let p1 = new Proxy(sum, {
    apply: function (target, thisArg, argumentsList) {
        return argumentsList[0] + argumentsList[1] * 100;
    }
});
// 正常调用
console.log(sum(1, 2)); // 3
// 代理之后调用
console.log(p1(1, 2)); // 201

/*
handler.construct
该方法主要是用于拦截 new 操作符的，我们通常使用 new 操作符都是在函数的情况下，但是我们不能说 new 操作符只能作用于函数，确切的说 new 操作符必须作用于自身带有[[Construct]]内部方法的对象上，而这种对象通常就是函数，总之一句话，使用 new targe 是必须有效的。

// 构造函数拦截
let p2 = new Proxy(target, {
  construct: function (target, argumentsList, newTarget) {
  }
});

target：被代理对象，需要能够使用 new 操作符初始化它的实例，通常就是一个函数
argumentsList：使用 new 操作符时传入的参数列表
newTarget：被调用的构造函数，也就是 p2
 */

let p2 = new Proxy(function () {
}, {
    construct: function (target, argumentsList, newTarget) {
        return {value: '我是' + argumentsList[0]};
    }
});
console.log(new p2("小猪课堂")); // {value: '我是小猪课堂'}

/*
handler.defineProperty

// 拦截 Object.defineProperty
let p3 = new Proxy(target, {
  defineProperty: function (target, property, descriptor) {
  }
});

target：被代理对象
property：属性名，也就是当我们使用 Object.defineProperty 操作的对象的某个属性
descriptor：待定义或修改的属性的描述符

被代理的对象必须要能被扩展
handler 中的 defineProperty 方法必须返回一个 Boolean 值
不能添加或者修改一个属性为不可配置的，如果它不作为一个目标对象的不可配置的属性存在的话
 */

let p3 = new Proxy({}, {
    defineProperty: function (target, property, descriptor) {
        descriptor.enumerable = false; // 修改属性描述符
        console.log(property, descriptor);
        return true;
    }
});
let desc = {configurable: true, enumerable: true, value: 10};
Object.defineProperty(p3, 'a', desc);
// a {value: 10, enumerable: false, configurable: true}


/*
handler.deleteProperty
该方法用于拦截对对象属性的 delete 操作，我们经常使用 delete 删除对象中的某个属性，我们可以使用 deleteProperty 方法对该做进行拦截。
let p4 = new Proxy(target, {
  deleteProperty: function (target, property) {
  }
});
target：被代理的目标对象
property：将要被删除的属性

注意：代理的目标对象的属性必须是可配置的，即可以删除，否则会报错。
 */

let p4 = new Proxy({}, {
    deleteProperty: function (target, property) {
        console.log("将要删除属性：", property)
    }
});
delete p4.a; // 将要删除属性：a

/*
handler.getOwnPropertyDescriptor

let p6 = new Proxy(target, {
  getOwnPropertyDescriptor: function (target, prop) {
  }
});

target：被代理的目标对象
prop：返回属性名称的描述

注意：
getOwnPropertyDescriptor 必须返回一个 object 或 undefined。
使用 getOwnPropertyDescriptor 时，目标对象的该属性必须存在
 */

let p6 = new Proxy({name: '小猪课堂'}, {
    getOwnPropertyDescriptor: function (target, prop) {
        console.log('属性名称：' + prop); // 属性名称：name
        return {configurable: true, enumerable: true, value: '张三'};
    }
});
console.log(Object.getOwnPropertyDescriptor(p6, 'name').value); // 张三

/*
handler.getPrototypeOf
当我们读取代理对象的原型时，会触发 handler 中的 etPrototypeOf 方法。
let p7 = new Proxy(obj, {
  getPrototypeOf(target) {
  }
});
target：被代理的目标对象

以下操作会触发代理对象的该拦截方法：

Object.getPrototypeOf()
Reflect.getPrototypeOf()
__proto__
Object.prototype.isPrototypeOf()
instanceof
注意：

getPrototypeOf 方法必须返回一个对象或者 null。
 */
let p7 = new Proxy({}, {
    getPrototypeOf(target) {
        return {msg: "拦截获取对象原型操作"}
    }
});
console.log(p7.__proto__); // {msg: '拦截获取对象原型操作'}

/*
handler.has：该拦截方法主要是针对 in 操作符的，in 操作符通常用来检测某个属性是否存在某个对象内。
let p8 = new Proxy(target, {
  has: function (target, prop) {
  }
});
target：被代理的目标对象
prop：需要检查是否存在的属性

属性查询：foo in proxy
继承属性查询：foo in Object.create(proxy)
with 检查: with(proxy) { (foo); }
Reflect.has()

注意：has 函数返回的必须是一个 Boolean 值。
 */

let p8 = new Proxy({}, {
    has: function (target, prop) {
        console.log('检测的属性: ' + prop); // 检测的属性: a
        return true;
    }
});
console.log('a' in p8); // true


/*
handler.isExtensible：Object.isExtensible()方法主要是用来判断一个对象是否可以扩展，handler 中的 isExtensible 方法可以拦截该操作。

// 拦截 Object.isExtensible()
let p9 = new Proxy(target, {
  isExtensible: function (target) {
  }
});
target：被代理的目标对象

isExtensible 方法必须返回一个 Boolean 值或可转换成 Boolean 的值。
 */

let p9 = new Proxy({}, {
    isExtensible: function (target) {
        console.log('操作被拦截了');
        return true;
    }
});
console.log(Object.isExtensible(p9));


/*
handler.ownKeys：静态方法 Reflect.ownKeys() 返回一个由目标对象自身的属性键组成的数组。handler 对象的 ownKeys 方法可以拦截该操作，除此之外，还有一些其它操作也会触发 ownKeys 操作。

let p10 = new Proxy(target, {
  ownKeys: function (target) {
  }
});
以下操作会触发拦截：

Object.getOwnPropertyNames()
Object.getOwnPropertySymbols()
Object.keys()
Reflect.ownKeys()
 */

let p10 = new Proxy({}, {
    ownKeys: function (target) {
        console.log('被拦截了');
        return ['a', 'b', 'c'];
    }
});
console.log(Object.getOwnPropertyNames(p10)); // ['a', 'b', 'c']

/*
handler.preventExtensions
Object.preventExtensions()方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。handler.preventExtensions 可以拦截该项操作。

let p11 = new Proxy(target, {
  preventExtensions: function (target) {
  }
});

以下操作会触发拦截：

Object.preventExtensions()
Reflect.preventExtensions()
 */

let p11 = new Proxy({}, {
    preventExtensions: function (target) {
        console.log('被拦截了');
        Object.preventExtensions(target);
        return true
    }
});


Object.preventExtensions(p11);



/*
handler.setPrototypeOf：Object.setPrototypeOf() 方法设置一个指定的对象的原型，当调用该方法修改对象的原型时就会触发该拦截。

let p13 = new Proxy(target, {
  setPrototypeOf: function (target, prototype) {
  }
});

target：被代理的目标对象
prototype：对象新原型或者为 null
 */

let p13 = new Proxy({}, {
  setPrototypeOf: function (target, prototype) {
    console.log("触发拦截"); // 触发拦截
    return true;
  }
});
Object.setPrototypeOf(p13, {name: '小猪课堂'})