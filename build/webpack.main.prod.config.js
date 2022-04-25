const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.main.config')

module.exports = baseConfig.map((config) =>
  merge(config, {
    mode: 'production',
  }),
)
