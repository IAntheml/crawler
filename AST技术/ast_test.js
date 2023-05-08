const parse = require('@babel/parser')
const traverse = require('@babel/traverse').default

// JS 转 ast语法树
jscode = 'var a = "\u0068\u0065\u006c\u006c\u006f\u002c\u0041\u0053\u0054"';
let ast = parse.parse(jscode);
// console.log(JSON.stringify(ast,null,'\t'))

//编写插件
const visitor = {
    // StringLiteral(path){
    //     // console.log(path.node)
    //     // console.log(path.toString());
    //     // console.log(path.parentPath.node);
    //     // console.log(path.container)
    //     // console.log(path.type)
    //     // console.log(path.get(''))
    // }
    VariableDeclarator(path){
        console.log(path.node);
    }

}
traverse(ast,visitor)
