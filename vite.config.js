import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuejsx from "@vue/babel-plugin-jsx"

import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(),vuejsx({})],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: "import { h } from 'vue';"
  }
})
