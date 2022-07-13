// Solution founded at https://stackoverflow.com/a/72702062
import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueGtag, {
        config: {
            id: 'G-71Z6KK9PX7',
        },
    }, nuxtApp.$router)
})