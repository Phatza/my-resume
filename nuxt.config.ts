import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  ssr: false,
  modules: [
    'nuxt-windicss',
    'nuxt-icons'
  ],
  css: [
    '@/assets/css/main.scss'
  ]
})
