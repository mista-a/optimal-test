import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/optimal-test/',
  publicPath: process.env.NODE_ENV === 'production' ? '/optimal-test/' : '/',
  plugins: [vue()],
})
