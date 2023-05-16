/*
AST 在编译中的位置

在编译原理中，编译器转换代码通常要经过三个步骤：词法分析（Lexical Analysis）、语法分析（Syntax Analysis）、代码生成（Code Generation），下图生动展示了这一过程：

input->tokens->ast->code

词法分析
词法分析阶段是编译过程的第一个阶段，这个阶段的任务是从左到右一个字符一个字符地读入源程序，然后根据构词规则识别单词，生成 token 符号流，比如 isPanda('🐼')，会被拆分成 isPanda，(，'🐼'，) 四部分，每部分都有不同的含义，可以将词法分析过程想象为不同类型标记的列表或数组。

语法分析
语法分析是编译过程的一个逻辑阶段，语法分析的任务是在词法分析的基础上将单词序列组合成各类语法短语，比如“程序”，“语句”，“表达式”等，前面的例子中，isPanda('🐼') 就会被分析为一条表达语句 ExpressionStatement，isPanda() 就会被分析成一个函数表达式 CallExpression，🐼 就会被分析成一个变量 Literal 等，众多语法之间的依赖、嵌套关系，就构成了一个树状结构，即 AST 语法树。

代码生成
代码生成是最后一步，将 AST 语法树转换成可执行代码即可，在转换之前，我们可以直接操作语法树，进行增删改查等操作，例如，我们可以确定变量的声明位置、更改变量的值、删除某些节点等，我们将语句 isPanda('🐼') 修改为一个布尔类型的 Literal：true，语法树就有如下变化：
 */


/*
Babel的使用
 */
/*
解析@babel/parser
部分可选参数：
1. allowImportExportEverywhere-默认 import 和 export 声明语句只能出现在程序的最顶层，设置为 true 则在任何地方都可以声明
2. allowReturnOutsideFunction-默认如果在顶层中使用 return 语句会引起错误，设置为 true 就不会报错
3. sourceType-默认为 script，当代码中含有 import 、export 等关键字时会报错，需要指定为 module
4. errorRecovery-默认如果 babel 发现一些不正常的代码就会抛出错误，设置为 true 则会在保存解析错误的同时继续解析代码，错误的记录将被保存在最终生成的 AST 的 errors 属性中，当然如果遇到严重的错误，依然会终止解析
 */

/*
代码生成@babel/generator
部分可选参数：
1.auxiliaryCommentBefore-在输出文件内容的头部添加注释块文字
2.auxiliaryCommentAfter-在输出文件内容的末尾添加注释块文字
3.comments-输出内容是否包含注释
4.compact-输出内容是否不添加空格，避免格式化
5.concise-输出内容是否减少空格使其更紧凑一些
6.minified-是否压缩输出代码
7.retainLines-尝试在输出代码中使用与源代码中相同的行号
 */
const fs = require("fs");
const parser = require("@babel/parser");
const generate = require("@babel/generator").default
const code = "const a = 1;";
const ast = parser.parse(code, {sourceType: "module"})
console.log(ast)
ast.program.body[0].declarations[0].id.name = "b"
ast.program.body[0].declarations[0].init.value = 2
const result = generate(ast, {minified: true})
console.log(result.code)

/*
遍历节点修改 @babel/traverse
声明了一个 visitor 对象，然后定义对应类型的处理方法，traverse 接收两个参数，第一个是 AST 对象，第二个是 visitor，当 traverse 遍历所有节点，遇到节点类型为 NumericLiteral 和 StringLiteral 时，就会调用 visitor 中对应的处理方法，visitor 中的方法会接收一个当前节点的 path 对象，该对象的类型是 NodePath，该对象有非常多的属性,常用如下：
toString()-当前路径的源码
node-当前路径的节点
parent-当前路径的父级节点
parentPath-当前路径的父级路径
type-当前路径的类型
 */
const traverse = require("@babel/traverse").default
const code_traverse = `
const a = 1500;
const b = 60;
const c = "hi";
const d = 787;
const e = "1244";
`
const ast_traverse = parser.parse(code_traverse)
const visitor = {
    NumericLiteral(path) {
        console.log(path.toString())
        console.log(path.node)
        // console.log(path.parent)
        // console.log(path.parentPath)
        console.log(path.type)

        path.node.value = (path.node.value + 100) * 2

    }, StringLiteral(path) {
        path.node.value = "I Love python"
    }
}

const visitor2 = {
    "NumericLiteral|StringLiteral"(path) {
        path.node.value = "I Love"
    }
}
traverse(ast_traverse, visitor)
const result_traverse = generate(ast_traverse)
console.log(result_traverse.code)

/*
判断类型 @babel/types
 */


/*
常见混淆还原
 */
//1. Unicode还原

const unicode_code = `console['\u006c\u006f\u0067']('\u0048\u0065\u006c\u006c\u006f\u0020\u0077\u006f\u0072\u006c\u0064\u0021')`
const unicode_ast = parser.parse(unicode_code)
const unicode_visitor = {
    StringLiteral(path) {
        // 以下方法均可
        // path.node.extra.raw = '"' + path.node.value + '"'
        // delete path.node.extra
        // delete path.node.extra.raw
        path.node.extra.row = path.node.rawValue

    }
}

traverse(unicode_ast, unicode_visitor)
const unicode_result = generate(unicode_ast)
console.log(unicode_result.code)

//2. 表达式还原
/*
想要执行语句，我们需要了解 path.evaluate() 方法，该方法会对 path 对象进行执行操作，自动计算出结果，返回一个对象，其中的 confident 属性表示置信度，value 表示计算结果，使用 types.valueToNode() 方法创建节点，使用 path.replaceInline() 方法将节点替换成计算结果生成的新节点，替换方法有一下几种：

    replaceWith：用一个节点替换另一个节点；

    replaceWithMultiple：用多个节点替换另一个节点；

    replaceWithSourceString：将传入的源码字符串解析成对应 Node 后再替换，性能较差，不建议使用；

    replaceInline：用一个或多个节点替换另一个节点，相当于同时有了前两个函数的功能。
 */
const types = require("@babel/types")
const evaluate_code = `
const a = !![]+!![]+!![];
const b = Math.floor(12.34 * 2.12)
const c = 10 >> 3 << 1
const d = String(21.3 + 14 * 1.32)
const e = parseInt("1.893" + "45.9088")
const f = parseFloat("23.2334" + "21.89112")
const g = 20 < 18 ? '未成年' : '成年'
`
const evaluate_ast = parser.parse(evaluate_code)

const evaluate_visitor = {
    "BinaryExpression|CallExpression|ConditionalExpression"(path) {
        const {confident, value} = path.evaluate()
        if (confident){
            path.replaceInline(types.valueToNode(value))
        }
    }
}

traverse(evaluate_ast, evaluate_visitor)
const evaluate_result = generate(evaluate_ast)
console.log(evaluate_result.code)

//删除未使用变量
/*
删除多余变量，首先要了解 NodePath 中的 scope，scope 的作用主要是查找标识符的作用域、获取并修改标识符的所有引用等，删除未使用变量主要用到了 scope.getBinding() 方法，传入的值是当前节点能够引用到的标识符名称，返回的关键属性有以下几个：
    identifier：标识符的 Node 对象；
    path：标识符的 NodePath 对象；
    constant：标识符是否为常量；
    referenced：标识符是否被引用；
    references：标识符被引用的次数；
    constantViolations：如果标识符被修改，则会存放所有修改该标识符节点的 Path 对象；
    referencePaths：如果标识符被引用，则会存放所有引用该标识符节点的 Path 对象。
 */

const scope_code = `
const a = 1;
const b = a * 2;
const c = 2;
const d = b + 1;
const e = 3;
console.log(d)
`
const scope_ast = parser.parse(code)

const scope_visitor = {
    VariableDeclarator(path){
        const binding = path.scope.getBinding(path.node.id.name);

        // 如标识符被修改过，则不能进行删除动作。
        if (!binding || binding.constantViolations.length > 0) {
            return;
        }

        // 未被引用
        if (!binding.referenced) {
            path.remove();
        }

        // 被引用次数为0
        // if (binding.references === 0) {
        //     path.remove();
        // }

        // 长度为0，变量没有被引用过
        // if (binding.referencePaths.length === 0) {
        //     path.remove();
        // }
    }
}

traverse(scope_ast, scope_visitor)
const scope_result = generate(scope_ast)
console.log(scope_result.code)

//删除冗余逻辑代码
/*
有时候为了增加逆向难度，会有很多嵌套的 if-else 语句，大量判断为假的冗余逻辑代码，同样可以利用 AST 将其删除掉，只留下判断为真的。AST 处理思路以及代码：

1. 筛选出 BooleanLiteral 和 NumericLiteral 节点，取其对应的值，即 path.node.test.value；
2. 判断 value 值为真，则将节点替换成 consequent 节点下的内容，即 path.node.consequent.body；
3. 判断 value 值为假，则替换成 alternate 节点下的内容，即 path.node.alternate.body；
4. 有的 if 语句可能没有写 else，也就没有 alternate，所以这种情况下判断 value 值为假，则直接移除该节点，即 path.remove()
 */

const if_code = `
const example = function () {
    let a;
    if (false) {
        a = 1;
    } else {
        if (1) {
            a = 2;
        }
        else {
            a = 3;
        }
    }
    return a;
};
`
const if_ast = parser.parse(if_code)

const if_visitor = {
    enter(path) {
        if (types.isBooleanLiteral(path.node.test) || types.isNumericLiteral(path.node.test)) {
            if (path.node.test.value) {
                path.replaceInline(path.node.consequent.body);
            } else {
                if (path.node.alternate) {
                    path.replaceInline(path.node.alternate.body);
                } else {
                    path.remove()
                }
            }
        }
    }
}

traverse(if_ast, if_visitor)
const if_result = generate(if_ast)
console.log(if_result.code)


//switch-case 反控制流平坦化 例如：
switch_code = `
const _0x34e16a = '3,4,0,5,1,2'['split'](',');
let _0x2eff02 = 0x0;
while (!![]) {
    switch (_0x34e16a[_0x2eff02++]) {
        case'0':
            let _0x38cb15 = _0x4588f1 + _0x470e97;
            continue;
        case'1':
            let _0x1e0e5e = _0x37b9f3[_0x50cee0(0x2e0, 0x2e8, 0x2e1, 0x2e4)];
            continue;
        case'2':
            let _0x35d732 = [_0x388d4b(-0x134, -0x134, -0x139, -0x138)](_0x38cb15 >> _0x4588f1);
            continue;
        case'3':
            let _0x4588f1 = 0x1;
            continue;
        case'4':
            let _0x470e97 = 0x2;
            continue;
        case'5':
            let _0x37b9f3 = 0x5 || _0x38cb15;
            continue;
    }
    break;
}
`

switch_ast = parser.parse(switch_code)

switch_visitor = {
    WhileStatement(path) {
        // switch 节点
        let switchNode = path.node.body.body[0];
        // switch 语句内的控制流数组名，本例中是 _0x34e16a
        let arrayName = switchNode.discriminant.object.name;
        // 获得所有 while 前面的兄弟节点，本例中获取到的是声明两个变量的节点，即 const _0x34e16a 和 let _0x2eff02
        let prevSiblings = path.getAllPrevSiblings();
        // 定义缓存控制流数组
        let array = []
        // forEach 方法遍历所有节点
        prevSiblings.forEach(pervNode => {
            let {id, init} = pervNode.node.declarations[0];
            // 如果节点 id.name 与 switch 语句内的控制流数组名相同
            if (arrayName === id.name) {
                // 获取节点整个表达式的参数、分割方法、分隔符
                let object = init.callee.object.value;
                let property = init.callee.property.value;
                let argument = init.arguments[0].value;
                // 模拟执行 '3,4,0,5,1,2'['split'](',') 语句
                array = object[property](argument)
                // 也可以直接取参数进行分割，方法不通用，比如分隔符换成 | 就不行了
                // array = init.callee.object.value.split(',');
            }
            // 前面的兄弟节点就可以删除了
            pervNode.remove();
        });

        // 储存正确顺序的控制流语句
        let replace = [];
        // 遍历控制流数组，按正确顺序取 case 内容
        array.forEach(index => {
                let consequent = switchNode.cases[index].consequent;
                // 如果最后一个节点是 continue 语句，则删除 ContinueStatement 节点
                if (types.isContinueStatement(consequent[consequent.length - 1])) {
                    consequent.pop();
                }
                // concat 方法拼接多个数组，即正确顺序的 case 内容
                replace = replace.concat(consequent);
            }
        );
        // 替换整个 while 节点，两种方法都可以
        path.replaceWithMultiple(replace);
        // path.replaceInline(replace);
    }
}

//方法2
/*
const switch_visitor2 = {
    WhileStatement(path) {
        // switch 节点
        let switchNode = path.node.body.body[0];
        // switch 语句内的控制流数组名，本例中是 _0x34e16a
        let arrayName = switchNode.discriminant.object.name;
        // 获取控制流数组绑定的节点
        let bindingArray = path.scope.getBinding(arrayName);
        // 获取节点整个表达式的参数、分割方法、分隔符
        let init = bindingArray.path.node.init;
        let object = init.callee.object.value;
        let property = init.callee.property.value;
        let argument = init.arguments[0].value;
        // 模拟执行 '3,4,0,5,1,2'['split'](',') 语句
        let array = object[property](argument)
        // 也可以直接取参数进行分割，方法不通用，比如分隔符换成 | 就不行了
        // let array = init.callee.object.value.split(',');

        // switch 语句内的控制流自增变量名，本例中是 _0x2eff02
        let autoIncrementName = switchNode.discriminant.property.argument.name;
        // 获取控制流自增变量名绑定的节点
        let bindingAutoIncrement = path.scope.getBinding(autoIncrementName);
        // 可选择的操作：删除控制流数组绑定的节点、自增变量名绑定的节点
        bindingArray.path.remove();
        bindingAutoIncrement.path.remove();

        // 储存正确顺序的控制流语句
        let replace = [];
        // 遍历控制流数组，按正确顺序取 case 内容
        array.forEach(index => {
                let consequent = switchNode.cases[index].consequent;
                // 如果最后一个节点是 continue 语句，则删除 ContinueStatement 节点
                if (types.isContinueStatement(consequent[consequent.length - 1])) {
                    consequent.pop();
                }
                // concat 方法拼接多个数组，即正确顺序的 case 内容
                replace = replace.concat(consequent);
            }
        );
        // 替换整个 while 节点，两种方法都可以
        path.replaceWithMultiple(replace);
        // path.replaceInline(replace);
    }
}
 */
traverse(switch_ast,switch_visitor)
const result = generate(switch_ast)
console.log(result.code)


/**
 * 针对作用域和引用，直接依据引用来计算出执行结果。
 * @type {{"BinaryExpression|Identifier"(*): void}}
 * @private
 */
const _jy = {
    "BinaryExpression|Identifier"(path){
        const {confident,value} = path.evaluate();
        confident && path.replaceInline(types.valueToNode(value))
    }
}

/**
 * 编码类型的还原
 * @type {{NumericLiteral({node: *}): void, StringLiteral({node: *}): void}}
 */
const transform_literal = {
  NumericLiteral({node}) {
    if (node.extra && /^0[obx]/i.test(node.extra.raw)) {
      node.extra = undefined;
    }
  },
  StringLiteral({node})
  {
    if (node.extra && /\\[ux]/gi.test(node.extra.raw)) {
      node.extra = undefined;
    }
  },
}

/**
 * 删除所有注释
 */
const delete_annotation = generator(ast,opts = {"comments":false},jscode);
/**
 *
 * Unicode转中文或者其他非ASCII码字符。
 */
const output = generator(ast,opts = {jsescOption:{"minimal":true}},jscode);
/**
 * 自执行方法的还原
 * @type {{UnaryExpression(*): void}}
 */
const visit = {
    UnaryExpression(path)
    {
        let {argument} = path.node;
        if (!types.isFunctionExpression(argument))
        {
            return;
        }
        let {body,id,params} = argument;
        if (id != null  || params.length != 0 )
        {
            return;
        }
        path.replaceWithMultiple(body.body)
    }
}


/*
通用插件
 */
const constantFold = {
    "BinaryExpression|UnaryExpression|ConditionalExpression"(path) {
        // 防止溢出
        if(path.isUnaryExpression({operator:"-"}) ||
    	   path.isUnaryExpression({operator:"void"}))
    	{
    		return;
    	}
        const {confident, value} = path.evaluate();
        if (!confident)
            return;
        if (typeof value == 'number' && (!Number.isFinite(value))) {
            return;
        }
        path.replaceWith(types.valueToNode(value));
    },
}

/*
fs库
 */
//读取文件
file_fs = fs.readFileSync('test.js',{encoding:'utf-8'})
//写文件
fs.writeFile('decode.js', code, (err)=>{});