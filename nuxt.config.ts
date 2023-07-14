// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxthq/ui'],
  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
  runtimeConfig: {
    public: {
      coreApiUrl: ''
    }
  }
})
