const path = require('path')



module.exports={
    target:'node',
    entry:"./src/index.js",
    output:{
        filename :"bundle.js",
        path :path(__dirname,'build')
    },
    // Tell webpack to run babel on every file it run through
    module:{
        rules:[
            {
                test:/\.js?$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                option:{
                    presets:[
                        'react',
                        'stage-0',
                        ['env', { targets: {browser:['last 2 versions'] } }]
                    ]
                }
            }
        ]
    }
}