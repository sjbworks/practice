import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tsconfigPaths from 'vite-tsconfig-paths'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'
  return {
    root: './src',
    build: {
      outDir: '../public',
      minify: isProduction,
    },
    plugins: [
      svelte({
        hot: !isProduction,
      }),
      tsconfigPaths(),
    ],
    publicDir: '../public',
  }
})
