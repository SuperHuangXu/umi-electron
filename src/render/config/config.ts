import { defineConfig } from 'umi'

export default defineConfig({
  history: { type: 'hash' },
  nodeModulesTransform: {
    type: 'none',
  },
  outputPath: '../../dist/render',
  publicPath: './',
  routes: [
    {
      path: '/',
      component: '@/pages/index',
    },
  ],
})
