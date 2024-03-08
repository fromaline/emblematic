<script lang="ts" setup>
useSeoMeta({
  title: 'Emblematic Blockchain Icons',
  description: 'Emblematic Blockchain Icons',
})

const packages = ref([
  {
    icon: 'i-simple-icons-svelte',
    name: 'emblematic-svelte',
    description: 'An Emblematic Icon library package for Vue 3 apps.',
    npmLink: 'https://www.npmjs.com/package/emblematic-svelte',
    sourceLink: 'https://github.com/fromaline/emblematic/tree/master/packages/emblematic-svelte'
  },
  {
    icon: 'i-simple-icons-vuedotjs',
    name: 'emblematic-vue3',
    description: 'An Emblematic Icon library package for Svelte apps.',
    npmLink: 'https://www.npmjs.com/package/emblematic-vue3',
    sourceLink: 'https://github.com/fromaline/emblematic/tree/master/packages/emblematic-vue3'
  }
])
</script>

<template>
  <UContainer class="flex-[1] py-8 w-full" as="main" :ui="{
    constrained: 'max-w-4xl',
  }">
    <h1 class="text-2xl sm:text-3xl font-bold text-center">Emblematic Icons Packages</h1>

    <section class="mt-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UCard v-for="{icon, name, description, npmLink, sourceLink} in packages">
          <template #header>
            <div class="flex items-center justify-start gap-1.5">
              <div class="bg-gray-900 inline-flex items-center justify-center p-2 rounded-lg aspect-[1]">
                <UIcon :name="icon" class="text-3xl" />
              </div>

              <h2 class="font-bold text-xl">{{name}}</h2>
            </div>
          </template>


          <p class="font-medium">{{ description }}</p>

          <template #footer>
            <div class="flex items-center justify-start gap-2.5">
              <UButton variant="outline" :to="npmLink" target="_blank" rel="noopener">NPM</UButton>
              
              <UButton color="white" :to="sourceLink" target="_blank" rel="noopener">Source</UButton>
            </div>
          </template>
        </UCard>
      </div>
    </section>
  </UContainer>
</template>