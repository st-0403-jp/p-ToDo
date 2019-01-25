const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  context: __dirname + '/src',
  entry: {
    js: './index.ts'
    // html: './temp/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [
        {
            test: /\.vue$/,
            use: [
                {
                    loader: 'vue-loader'
                }
            ]
        },
        {
            test: /\.ts$/,
            use: [
                {
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    }
                }
            ]
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: 'html-loader',
                    options: {
                        name: 'index.html'
                    }
                }
            ]
        }
      ]
  },
  resolve: {
    extensions: [
        '.ts',
        '.js'
    ],
    alias: {
        vue$: 'vue/dist/vue.esm.js'
    },
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './index.html'
      }),
      new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true,
    port: 8000
  },
};
