
const path = require('path')
const merge = require("webpack-merge")
const baseConfig = require("./webpack.base")
const webPackNodeExternals = require("webpack-node-externals")


const config={
    target:'node',
    entry:"./src/index.js",
    output:{
        filename :"bundle.js",
        path :path.resolve(__dirname,'build')
    },
    // Tell webpack to run babel on every file it run through

    externals:[webPackNodeExternals()]

}
module.exports = merge(baseConfig,config)