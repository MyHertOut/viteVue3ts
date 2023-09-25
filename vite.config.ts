import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver, VantResolver } from 'unplugin-vue-components/resolvers'
import {
  createStyleImportPlugin,
  ElementPlusResolve,
} from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"
    host: "0.0.0.0",
    port: 8000,
    open: false,
    cors: true,
    // 跨域代理配置
    proxy: {
      "/api": {
        target: "https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e", // easymock
        // target: "https://www.fastmock.site/mock/f81e8333c1a9276214bcdbc170d9e0a0", // fastmock
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, "")
      }
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/var.scss";`, // @use "@/styles/element/index.scss" as *;
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'], // 自动导vue和vue-router相关函数
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      resolvers: [ElementPlusResolver({
        // 自动引入修改主题色添加这一行，使用预处理样式，不添加将会导致使用ElMessage，ElNotification等组件时默认的主题色会覆盖自定义的主题色
        // importStyle: "sass",
      })],
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          // 自动引入修改主题色添加这一行，使用预处理样式
          // importStyle: "sass",
        }),
        VantResolver(),
      ],
    }),
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [
        {
          libraryName: "element-plus",
          esModule: true,
          resolveStyle: (name: string) => {
            return `element-plus/theme-chalk/${name}.css`;
          },
        },
      ],
    }),
  ]
})
