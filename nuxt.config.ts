// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  css: [
    '~/assets/css/normalize.css',
    '~/assets/css/main.scss'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {}
  },
  typescript: {
    strict: true
  }
})
