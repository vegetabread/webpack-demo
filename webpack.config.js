const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

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
        }, { 
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: 'babel-loader' ,
            options:{
                presets:[['@babel/preset-env',{
                    useBuiltIns: 'usage'
                }]]
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
        },
        {
            test: /\.css$/,
            use: ['style-loader',
                'css-loader']
        }]
    },
    devServer:{
        contentBase: './dist',
        port: 8090,
        open: true,
        hot: true,
        hotOnly: true
    },
    plugins: [ 
        new HtmlWebpackPlugin(
            {
                template:'src/index.html'
            }
        ),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
]
    ,
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    }
}