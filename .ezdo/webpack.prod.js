 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 
 console.log(common)

 module.exports = merge(common, {
   mode:'production',
   plugins: [
   ]
 });