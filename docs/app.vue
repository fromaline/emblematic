<script setup lang="ts">
import '~/assets/css/main.css'

useHead({
  title: 'Emblematic Blockchain Icons',
  link: [
    { rel: 'preload', href: '/fonts/Montserrat-VF.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
  meta: [
    { name: 'msapplication-TileColor', content: '#da532c' },
    { name: 'theme-color', content: '#ffffff' },
    { property: 'og:image', content: '/og.png' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://emblematic.dev/' },
    { property: 'og:title', content: 'Emblematic Blockchain Icons' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: 'https://emblematic.dev/' },
    { name: 'twitter:title', content: 'Emblematic Blockchain Icons' },
    { name: 'twitter:description', content: 'Emblematic is a collection of ready-to-use blockchain icons.' }
  ],
  htmlAttrs: {
    class: 'min-h-screen',
  },
  bodyAttrs: {
    class: 'min-h-screen bg-gray-900',
  },
})

const links = ref([
  {
    link: '/icons',
    text: 'Icons',
    icon: 'i-lucide-bitcoin'
  },
  {
    link: '/guide',
    text: 'Guide',
    icon: 'i-lucide-book-open'
  },
  {
    link: '/packages',
    text: 'Packages',
    icon: 'i-lucide-package'
  },
  {
    link: '/license',
    text: 'License',
    icon: 'i-lucide-copyright'
  }
])

const isOpen = ref(false)
</script>

<template>
  <header class="bg-background/75 backdrop-blur border-b -mb-px sticky top-0 z-50 border-gray-800">
    <UContainer class="h-16 flex items-center justify-between gap-3" as="nav">
      <ULink to="/" class="text-2xl font-bold text-primary">
        Emblematic
      </ULink>

      <ul class="hidden sm:flex items-center justify-start gap-8">
        <li v-for="{link, text} in links" :key="link">
          <ULink :to="link" class="text-sm/6 font-semibold" active-class="text-primary"
            inactive-class="hover:text-primary">
            {{text}}
          </ULink>
        </li>
      </ul>

      <div class="flex items-center justify-start gap-3">
        <UButton to="https://github.com/fromaline/emblematic" rel="noopener" target="_blank" icon="i-simple-icons-github"
          color="gray" variant="ghost" />

        <UButton :icon="isOpen ? 'i-lucide-x' : 'i-lucide-menu'" color="gray" variant="ghost" class="sm:hidden flex"
          @click="isOpen = !isOpen" />
      </div>
    </UContainer>
  </header>

  <NuxtPage />

  <footer class="border-t border-t-gray-200 dark:border-t-gray-800">
    <UContainer class="h-16 flex items-center justify-between">
      <div class="flex flex-col gap-1">
        <p class="text-sm">
          Released under the MIT License
        </p>

        <p class="text-sm">Made by <ULink to="https://chainspect.app/" target="_blank" rel="noopener"
            class="text-primary">the
            Chainspect team
          </ULink>
        </p>
      </div>

      <UButton to="https://github.com/fromaline/emblematic" rel="noopener" target="_blank" icon="i-simple-icons-github"
        color="gray" variant="ghost" />
    </UContainer>
  </footer>

  <USlideover v-model="isOpen" :transition="false" :overlay="false" class="flex sm:hidden">
    <UContainer class="w-full h-16 flex items-center justify-between gap-3 border-gray-800 border-b">
      <ULink to="/" class="text-2xl font-bold text-primary">
        Emblematic
      </ULink>

      <div class="flex items-center justify-start gap-3">
        <UButton to="https://github.com/fromaline/emblematic" rel="noopener" target="_blank" icon="i-simple-icons-github"
          color="gray" variant="ghost" />

        <UButton icon="i-lucide-x" color="gray" variant="ghost" class="sm:hidden flex" @click="isOpen = false" />
      </div>
    </UContainer>

    <div class="px-4 sm:px-6 pt-3 pb-6 flex-[1]">
      <ul class="flex flex-col items-start justify-start gap-5">
        <li v-for="{link, text, icon} in links" :key="link">
          <ULink :to="link" class="text-lg font-semibold flex items-center justify-start gap-2" active-class="text-primary"
            inactive-class="hover:text-primary" @click="isOpen = false">
            <div class="rounded-md p-1.5 inline-flex ring-inset ring-1 bg-gray-800/50 ring-gray-700 group-hover:bg-primary group-hover:ring-primary group-hover:text-background">
              <UIcon :name="icon" />
            </div>
            
            <span>{{text}}</span>
          </ULink>
        </li>
      </ul>
    </div>
  </USlideover>
</template>
