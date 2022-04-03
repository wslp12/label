const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const packJson = require('./package.json');

const { ModuleFederationPlugin } = webpack.container;

const { target, mode } = process.env;

const entry =
  target === 'electron-main'
    ? path.resolve(__dirname, 'src/main/index.ts')
    : path.resolve(__dirname, 'src/renderer/index.ts');

const plugins = [
  new webpack.DefinePlugin({
    'process.env.loaMode': JSON.stringify({
      mode,
    }),
  }),
  new ModuleFederationPlugin({
    name: 'tshost',
    filename: 'remoteEntry.js',
    remotes: {
      // 'tsremote1-mf': 'tsremote1@http://localhost:9000/remoteEntry.js',
      cc: 'tscc@http://localhost:9000/remoteEntry.js',
    },
    exposes: {},
    // shared: packJson.dependencies,
  }),
];

if (target === 'electron-renderer' || target === 'web') {
  plugins.push(
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      inject: 'body',
      filename: 'index.html',
      publicPath: '.',
    }),
  );
}

module.exports = {
  entry,
  mode,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, `dist-${target}`),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  target,
  devtool: 'inline-source-map',
  devServer: {
    port: 9091,
    hot: true,
    liveReload: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'public'),
        ],
        test: /\.(ts|tsx)/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        // include: [path.resolve(__dirname, 'src')],
        // test: /\.css$/,
        test: /\.(sa|sc|c)ss$/,
        // exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        exclude: /node_modules/,
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins,
};
