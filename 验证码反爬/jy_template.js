const parse = require('@babel/parser')
const fs = require('fs')
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;

process.argv.length > 2 ? File1 = process.argv[2] : File1 = './jiyan_w.js'
process.argv.length > 3 ? File2 = process.argv[2] : File2 = './jiyan_decode.js'

jscode = fs.readFileSync(File1, {encoding: 'utf-8'})
let ast = parse.parse(jscode);

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

traverse(ast, transform_literal)

let {code} = generator(ast);
console.log(code);
fs.writeFile(File2, code, () => {

});