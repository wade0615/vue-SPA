const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: "./app.js", //引入的檔案

    output: {
        path: path.resolve(__dirname, './dist'), //輸出的路徑
        filename: "build.js" //輸出的檔名
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
        },
        plugins: [
            new VueLoaderPlugin()
        ]
}