const path = require('path');

module.exports = () => {

    return {
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.join(__dirname, 'public'),
            publicPath: '/',
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif|ico|json)$/,
                    exclude: /node_modules/,
                    use: ['file-loader?name=[name].[ext]']
                }
                ]
        },
        devtool: "#source-map",
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            compress: true,
            port: 9000,
            historyApiFallback: true
        }
    };
};