const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractCssIntoFile = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "./static/js/main.js",
        asyncChunks: true,
    },
    devServer: {
        port: 3000,
        hot: true,
        open: true,
        client: {
            logging: "error",
            progress: true,
            overlay: {
                errors: true,
            },
        },
        static: {
            directory: path.join(__dirname, "public"),
            publicPath: "/",
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: ["@babel/transform-runtime"],
                    },
                },
            },
            {
                test: /.s?css$/,
                exclude: /node_modules/,
                use: [ExtractCssIntoFile.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/,
                exclude: /node_modules/,
                type: "asset/resource",
                generator: {
                    filename: "./static/assets/[hash][ext]",
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./public/index.html" }),
        new ExtractCssIntoFile({ filename: "static/css/[name].css", chunkFilename: "[id].css" }),
    ],
};
