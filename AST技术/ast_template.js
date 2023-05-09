const parse = require('@babel/parser')
const fs = require('fs')
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;

process.argv.length > 2 ? File1 = process.argv[2] : File1 = './ast_encode.js'
process.argv.length > 3 ? File2 = process.argv[2] : File2 = './ast_decode.js'

jscode = fs.readFileSync(File1, {encoding: 'utf-8'})
let ast = parse.parse(jscode);
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

/**
 * 方法错误
 * @type {{CallExpression(*): void}}
 */
const math_tra = {
    CallExpression(path){
        let{callee,arguments} = path.node;
        let object_param = callee.object.value;
        let method_param = callee.property.value;
        let param = arguments[0].value;
        let eval_value = object_param[method_param](param)
         path.replaceWithMultiple(types.valueToNode(eval_value))
    }
}

traverse(ast,_jy)
traverse(ast,math_tra)

let {code} = generator(ast);
console.log(code);
fs.writeFile(File2, code, () => {

});