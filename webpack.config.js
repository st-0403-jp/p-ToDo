const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const MODE = 'development';
// const MODE = 'production';
const IS_PROD = (MODE === 'production') ? true : false;

module.exports = {
  mode: MODE,
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
            // loader: 'vue-loader',
            // options: {
            //     loaders: {
            //         scss: 'vue-style-loader!css-loader!sass-loader'
            //     }
            // }
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
            test: /\.(scss|css)$/,
            use: [
                'vue-style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: (IS_PROD) ? false : true
                    }
                },
                {
                    loader: 'sass-resources-loader',
                    options: {
                        resources: [
                            path.resolve(__dirname, 'src/styleConfig.scss')
                        ]
                    }
                }
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
