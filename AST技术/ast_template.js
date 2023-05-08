const parse = require('@babel/parser')
const fs = require('fs')
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;

process.argv.length > 2 ? File1 = process.argv[2] : File1 = './ast_encode.js'
process.argv.length > 3 ? File2 = process.argv[2] : File2 = './ast_decode.js'

jscode = fs.readFileSync(File1, {encoding: 'utf-8'})
let ast = parse.parse(jscode);

const _jy = {

}

traverse(ast,_jy)

let {code} = generator(ast);
console.log(code);
fs.writeFile(File2, code, () => {

});