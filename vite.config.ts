import { defineConfig } from 'vite'
import { resolve, relative, extname } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tailwindcss from "tailwindcss";
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { glob } from 'glob'
import { fileURLToPath } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    dts({ 
      tsconfigPath: resolve(__dirname, "tsconfig.app.json"),
    }),
    viteStaticCopy({
      targets: [
        {
          src: './tailwind.config.js',
          dest: './'
        }
      ]
    })
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'tailwindcss'],
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob.sync('src/**/*.{ts,tsx}', {
          ignore: ["src/**/*.d.ts"],
        }).map(file => [
          // 1. The name of the entry point
          // lib/nested/foo.js becomes nested/foo
          relative(
            'src',
            file.slice(0, file.length - extname(file).length)
          ),
          // 2. The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        // preserveModules: true
      }
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
})

