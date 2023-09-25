import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver, VantResolver } from 'unplugin-vue-components/resolvers'
import {
  createStyleImportPlugin,
  ElementPlusResolve,
} from "vite-plugin-style-import";
import UnoCSS from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from "unocss";

export default defineConfig((env) => {
  type ImportMetaEnv = any
  const viteEnv = loadEnv(env.mode, process.cwd()) as unknown as ImportMetaEnv

  return {
    server: {
      // 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"
      host: "0.0.0.0",
      port: 8000,
      open: false,
      cors: true,
      // 跨域代理配置
      proxy: {
        "/api": {
          target: viteEnv.VITE_APP_API_BASE_URL,
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
      UnoCSS({
        presets: [presetUno(), presetAttributify(), presetIcons()],
        rules: [ // 在这个可以增加预设规则, 也可以使用正则表达式
          [

            'p-c', // 使用时只需要写 p-c 即可应用该组样式
            {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%)`
            }
          ],
          [/^m-(\d+)$/, ([, d]: any) => ({ margin: `${d / 4}rem` })],
        ]
      }),
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
  }
})
