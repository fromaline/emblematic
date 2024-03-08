// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxt/content', 'nuxt-shiki'],
  ui: {
    icons: ['simple-icons', 'lucide'],
  },
  content: {
    highlight: {
      theme: 'github-dark-dimmed',
    },
  },
  shiki: {
    bundledThemes: ['github-dark-dimmed'],
    bundledLangs: ['svelte', 'vue'],
    highlightOptions: {
      theme: 'github-dark-dimmed',
    },
  },
})
