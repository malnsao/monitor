const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'monitor.js'
    },
    mode: 'development',
    context: process.cwd(),
    devServer: {
        onBeforeSetupMiddleware: (devServer) => {
            devServer.app.get('/success', function (req, res) {
                res.json({ id: 1 })
            })
            devServer.app.post('/error', function (req, res) {
                res.sendStatusCode(500)
            })

        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'head'
        })
    ]
}