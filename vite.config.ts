import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
  base: '/demo',
  server: {
    host: true, // 监听所有地址
    port: 3000, // 指定端口号
    open: true, // 自动打开浏览器
    proxy: {
      '/examples': {
        target: 'https://echarts.apache.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/examples/, 'examples')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'module',
        silenceDeprecations: ['legacy-js-api']
      }
    }
  },
  plugins: [
    vue(),  
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
        })
      ],
      dts: 'src/auto-imports/auto-imports.d.ts'
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass"
        }),
        IconsResolver({
          prefix: 'icon',
          enabledCollections: ['ep']
        })
      ],
      dts: 'src/auto-imports/components.d.ts'
    }),
    Icons({
      autoInstall: true,
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(process.cwd(), 'src/assets')],
      // 指定symbolId格式，支持多级目录
      symbolId: 'icon-[dir]-[name]',
      // 自定义插入位置
      inject: 'body-last',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'custom-component',
      fileName: (format) => `custom-component.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'vue-router', 'pinia', 'element-plus'],
      output: {
        globals: {
          vue: 'Vue',
          'vue-router': 'VueRouter',
          pinia: 'Pinia',
          'element-plus': 'ElementPlus'
        }
      }
    }
  }
}) 