import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { reactRouter } from '@react-router/dev/vite'

export default defineConfig(({ command }) => ({
  css: {
    postcss: {
      plugins: [autoprefixer]
    }
  },
  ssr: {
    noExternal: command === 'build' ? true : undefined
  },
  plugins: [reactRouter(), tsconfigPaths(), tailwindcss()]
}))
