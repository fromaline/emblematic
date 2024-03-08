<script setup lang="ts">
  const route = useRoute()

  const { iconsBySlug } = useIconsStore()

  const { id } = route.params

  const icon = computed(() => typeof id === 'string' ? iconsBySlug[id] : iconsBySlug['bitcoin'])

  const items = ref([{
    label: 'Svelte',
    package: 'svelte'
  }, {
    label: 'Vue 3',
    package: 'vue3'
  }])
</script>

<template>
  <UContainer class="flex-[1] py-8 w-full" as="main" :ui="{
    constrained: 'max-w-3xl',
  }">
    <UBreadcrumb :links="[{ label: 'Icons', to: '/icons' }, { label: icon.name }]" />

    <h1 class="mt-2 text-3xl font-bold mb-8">{{ `${icon.chain} Icon` }}</h1>

    <div class="mx-auto bg-gray-800 rounded-lg flex items-center justify-center w-fit p-3">
      <ChainIcon :name="icon.name" size="64" />
    </div>

    <UTabs class="mt-10" :items="items">
      <template #item="{ item }">
        <div v-if="item.package === 'svelte'" class="w-full max-w-full prose mt-5">
          <Shiki lang="svelte" :code="`<script>
  import { ${icon.name} } from 'emblematic-svelte'
</script>

<${icon.name} />`" />
        </div>
        <div v-else-if="item.package === 'vue3'" class="w-full max-w-full prose mt-5">
          <Shiki lang="vue" :code="`<script setup>
  import { ${icon.name} } from 'emblematic-vue3'
</script>

<template>
  <${icon.name} />
</template>`" />
        </div>
      </template>
    </UTabs>
  </UContainer>
</template>

<style>
.shiki.github-dark-dimmed span.line {
  display: initial;
  min-height: unset;
}
</style>