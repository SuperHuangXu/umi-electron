const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = [
  merge(baseConfig, {
    target: 'electron-main',
    entry: {
      main: './src/main/main.ts',
    },
    externalsPresets: { node: true },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.ts?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            configFile: path.resolve(__dirname, '../tsconfig.json'),
          },
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      }),
    ],
    mode: 'development',
  }),
  merge(baseConfig, {
    target: 'electron-preload',
    entry: {
      mainPreload: './src/main/preload/mainPreload.ts',
    },
    externalsPresets: { node: true },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.ts?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            configFile: path.resolve(__dirname, '../tsconfig.json'),
          },
        },
      ],
    },
    mode: 'development',
  }),
]
