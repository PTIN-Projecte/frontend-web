import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    proxy: {
      '/api/images/': {
        target: "http://192.168.10.10:30081",
        changeOrigin: true
      },
      '/api/otlp/': {
        target: "http://192.168.10.10:30081",
        changeOrigin: true
      },
      '/api': {
        target: 'http://192.168.10.10:30080',
        changeOrigin: true,
      }
    }
  }
})
