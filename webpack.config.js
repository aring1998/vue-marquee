const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: {
    index: path.join(__dirname, '/src/components/index.js') // 入口文件（用于暴露组件的index.js）
  },
  output: {
    path: path.join(__dirname, '/dist'), // 打包后的文件存放在dist文件夹
    publicPath: '/dist/', // 设置公共路径
    filename: 'index.js', // 打包后输出文件的文件设置为index.js
    libraryTarget: 'commonjs2' // 这个选项会尝试把库暴露给前使用的模块定义系统，这使其和CommonJS、AMD兼容或者暴露为全局变量
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin() // 这个插件是webpack打包.vue文件必须使用的 它的作用是将你定义的其他规则复制并运用到.vue文件里相应的块  如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
  ]
};
