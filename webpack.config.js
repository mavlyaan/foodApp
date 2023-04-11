const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    output:{
        clean: true
    },
    devServer:{
        static: './dist',
        open: true
    },
    plugins:[
        new HTMLWebpackPlugin({
            title: 'FoodApp',
            template: 'src/index.html'
        }),
    ],
    module:{
        rules:[
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    devServer:{
        static: './dist',
        open: true
    }
}