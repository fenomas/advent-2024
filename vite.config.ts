import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  base: './',
  root: 'src/',
  publicDir: 'public',

  plugins: [
    solidPlugin(), //
  ],

  build: {
    target: 'esnext',
    sourcemap: true,
    minify: true,
    emptyOutDir: true, // since it's outside root

    outDir: '../docs', // relative to root!
  },

  server: {
    port: 8080,
    host: '0.0.0.0',
  },

  clearScreen: false,
  logLevel: 'info',
})
