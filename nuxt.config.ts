import fs from 'fs'
import path from 'path'

const isProd = process.env.NODE_ENV === 'production'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'StarsCollective',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        // pc 等比例缩放
        { name: 'viewport', content: 'user-scalable=yes' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/swiper@8/swiper-bundle.css' },
        // DNS预解析
        { rel: 'prefetch', href: 'https://www.starscollective.com/assets/videos/pc/SC-10s-B&W-final-2.webm' },
        { rel: 'prefetch', href: 'https://www.starscollective.com/assets/videos/pc/SC-About-Color-final-1.webm' },
        { rel: 'prefetch', href: 'https://www.starscollective.com/assets/videos/pc/SC-Map-4.webm' },
        { rel: 'prefetch', href: 'https://www.starscollective.com/assets/videos/pc/SC-Others-3.webm' },
        { rel: 'prefetch', href: 'https://www.starscollective.com/assets/videos/pc/cross-medium.webm' },
        { rel: 'prefetch', href: 'https://www.starscollective.com/assets/videos/pc/keywords.webm' },
        { rel: 'prefetch', href: 'https://www.starscollective.com/assets/videos/pc/NFT.webm' },
        { rel: 'prefetch', href: 'https://www.starscollective.com/assets/videos/pc/About-Video.webm' },
        { rel: 'prefetch', href: 'https://www.starscollective.com/assets/videos/pc/sc_index.webm' },
        { rel: 'prefetch', href: 'https://www.starscollective.com/assets/videos/pc/sc_IP.webm' },
        { rel: 'prefetch', href: 'https://www.starscollective.com/assets/videos/pc/SCFutureMerch.webm' }
      ],
      style: [],
      script: [
        // { src: 'https://www.googletagmanager.com/gtag/js?id=G-RV98WFCQZP', type: 'text/javascript', async: true },
        // { src: 'https://unpkg.com/swiper@8/swiper-bundle.js', type: 'text/javascript' }
      ],
      noscript: []
    },
    pageTransition: { name: 'fade-leave', mode: 'out-in' }
    // layoutTransition: false
  },

  typescript: { strict: false, shim: false },
  modules: ['nuxt-icon', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@element-plus/nuxt', '@unocss/nuxt', 'nuxt-swiper'],
  elementPlus: {},
  css: ['@unocss/reset/tailwind-compat.css', '@/assets/styles/element/index.scss', '@/assets/styles/css/index.css', '@/assets/styles/scss/index.scss'],
  // postcss: {},
  sourcemap: false,

  build: {},

  // 此处配置的目录中的任何组件都可以在整个页面、布局（和其他组件）中使用，而无需显式导入它们。
  imports: { dirs: ['stores', 'api'] },

  vite: {
    build: {
      chunkSizeWarningLimit: 2000,
      commonjsOptions: { transformMixedEsModules: true }
    },

    esbuild: {
      drop: isProd ? ['console', 'debugger'] : []
    }
  },

  devServer: {
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'server.key'), 'utf-8'),
    //   cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'), 'utf-8')
    // }
  },

  runtimeConfig: {
    public: {
      api: {
        baseUrl: process.env.NUXT_PUBLIC_API_BASE_URL
      }
    }
  },

  // 解决 eruda 服务端控制台报错问题
  nitro: {
    devProxy: {
      host: '127.0.0.1'
    }
  }
})
