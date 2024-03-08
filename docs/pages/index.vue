<script lang="ts" setup>
useSeoMeta({
  title: 'Emblematic Blockchain Icons',
  description: 'Emblematic Blockchain Icons',
})

const { icons, popularIcons } = useIconsStore()

const features = ref([
  {
    title: 'Light & Scalable',
    icon: 'i-lucide-scaling',
    text: 'Emblematic Icons are lightweight, highly optimized scalable vector graphics (SVG). We clean them by hand and then optimize them with SVGOMG.',
  },
  {
    title: 'Customizable',
    icon: 'i-lucide-swatch-book',
    text: 'Customize the size of Emblematic Icons and pass any valid SVG Attributes to them.',
  },
  {
    title: 'Packaged',
    icon: 'i-lucide-blocks',
    text: 'Emblematic Icons are available as packages for Vue and Svelte. Support for other frameworks is coming soon.',
  }
])
</script>

<template>
  <UContainer class="flex-[1] pt-8 w-full" as="main" :ui="{
    constrained: 'max-w-5xl',
  }">
    <section class="mt-10 flex md:flex-row flex-col gap-20 md:gap-10 md:items-start justify-between items-stretch">
      <div>
        <h1 class="text-4xl sm:text-5xl font-bold md:text-left text-center">Blockchain Icons</h1>
        <h3 class="mt-2 text-lg sm:text-xl font-semibold md:text-left text-center">Made by <ULink to="https://chainspect.app/"
            target="_blank" rel="noopener" class="text-primary">the
            Chainspect team
          </ULink>
        </h3>

        <div class="flex items-center md:justify-start justify-center gap-3 mt-6 md:mt-10">
          <UButton size="lg" color="primary" variant="solid" to="/icons">View all icons</UButton>
          <UButton size="lg" color="gray" variant="solid" to="/guide">Get started</UButton>
          <UButton size="lg" color="gray" variant="solid" to="https://github.com/fromaline/emblematic" target="_blank"
            icon="i-lucide-external-link" :trailing="true">GitHub</UButton>
        </div>
      </div>

      <div class="flex flex-col gap-6">
        <div class="grid grid-cols-4 grid-rows-4 gap-6">
          <ULink v-for="icon in popularIcons" :key="icon.chain" :to="`/icons/${icon.slug}`"
            class="bg-gray-800 flex items-center justify-center p-3 rounded-lg aspect-[1]">
            <ChainIcon :name="icon.name" size="48" />
          </ULink>
        </div>

        <UButton to="/icons" color="gray" variant="solid" class="flex items-center justify-start gap-3" size="xl">
          <UIcon name="i-lucide-search" class="text-xl" />
          <span>Search....</span>
        </UButton>
      </div>
    </section>

    <section class="mt-20">
      <h2 class="text-2xl text-center font-bold">We Have Blockchain Icons For Your Favourite Networks:</h2>

      <ul class="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <li v-for="icon in icons" :key="icon.chain">
          <ULink :to="`/icons/${icon.slug}`" class="whitespace-nowrap truncate font-medium link">
            {{ icon.chain }} Icon
          </ULink>
        </li>
      </ul>
    </section>
  </UContainer>

  <UContainer class="pb-8">
    <section class="mt-20">
      <h2 class="text-2xl text-center font-bold">Emblematic Key Features:</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <UCard v-for="{icon, title, text} in features" :key="title" :ui="{background: 'bg-white dark:bg-gray-800', divide: 'divide-y divide-gray-200 dark:divide-gray-800', body: {
            padding: 'px-3 py-3 md:p-5',
          },
          header: {
            padding: 'px-3 py-3 md:px-5',
          },
        }">
          <template #header>
            <div class="flex items-center justify-start gap-2">
              <div class="bg-gray-900 flex items-center justify-center p-2 rounded-lg aspect-[1]">
                <UIcon :name="icon" class="text-2xl" />
              </div>

              <p>{{ title }}</p>
            </div>
          </template>

          <p>
            {{ text }}
          </p>
        </UCard>
      </div>
    </section>
  </UContainer>
</template>