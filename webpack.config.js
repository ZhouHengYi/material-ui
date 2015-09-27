var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: [
        "webpack-dev-server/client?http://127.0.0.1:3000",
        "webpack/hot/only-dev-server",
        "./src/app.js"
    ],
    output: {
        path: __dirname + "/assets/",
        filename: "bundle.js",
        publicPath: "/assets/"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ["react-hot", "babel-loader"],
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        },
        // Optionally extract less files
        // or any other compile-to-css language
        {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        }]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //处理组件
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("[name].css")
    ]
};
