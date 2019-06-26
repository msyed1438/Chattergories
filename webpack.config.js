var path = require('path');
module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    entry: {
        main: './client/index.jsx'
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    }
};