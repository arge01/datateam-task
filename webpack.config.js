module.exports = {
    context: __dirname + "/src",
    entry: './index.js',

    output: {
        filename: "index.js",
        path: __dirname + '/dist'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["react-hot-loader", "babel-loader"],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
}