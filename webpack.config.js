const path = require("path");
module.exports = {
    entry: "./src/app.js",
    // entry: "./src/playground/redux-expensify.js",
    // entry: "./src/playground/destructuring.js",
    // entry: "./src/playground/hoc.js",

    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                loader: "babel-loader", //run files through babel
                test: /\.js$/, //files that end with .js
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    devtool: "cheap-module-eval-source-map", //source map
    devServer: {
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true,
    },
};
