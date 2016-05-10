var webpack = require('webpack');
module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.{png|jpg}$/,loader: "url?limit=40000"}
        ]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by mutouren')
    ]
};