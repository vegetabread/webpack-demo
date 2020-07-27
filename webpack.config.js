const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry:'./src/index.js',
    module: {
        rules:[{
            test: /\.jpg$/,
            use: {
                loader:'file-loader',
                options:{
                    name:'[name].[ext]'
                }
            }
        },
        {
            test: /\.scss$/,
            use: ['style-loader',
            {
                loader:'css-loader',
                options: {
                    importLoaders: 2,
                    modules: true
                }
            },
            'sass-loader']
        }]
    },
    devServer:{
        contentBase: './dist',
        port: 8090,
        open: true
    },
    plugins: [ 
        new HtmlWebpackPlugin(
            {
                template:'src/index.html'
            }
        ),
        new CleanWebpackPlugin()
]
    ,
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    }
}