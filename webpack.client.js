const path = require("path")
const baseConfig = require("./webpack.base")
const merge = require("webpack-merge")

const config={
    entry:"./src/client/client.js",
    output:{
        filename:"bundle.js",
        path :path.resolve(__dirname,"public")
    },
//     module:{
//         rules:[
//             {
//                 test:/\.js?$/,
//                 loader:'babel-loader',
//                 exclude:/node_modules/,
//                 options:{
//                     presets:[
//                         'react',
//                         'stage-0',
//                         ['env', { targets: {browser:['last 2 versions'] } }]
//                     ]
//                 }
//             }
//         ]
// }
}

module.exports = merge(baseConfig,config)