<script lang="ts" setup>
useSeoMeta({
  title: 'All Emblematic Icons',
  description: 'We Have Blockchain Icons For Your Favourite Networks!',
})

const q = defineModel({ default: '' })

const { icons } = useIconsStore()

const filteredIcons = computed(() => q.value === '' ? icons : icons.filter(icon => icon.chain.toLowerCase().includes(q.value.toLowerCase())))
</script>

<template>
  <UContainer class="flex-[1] py-8 w-full" as="main" :ui="{
    constrained: 'max-w-3xl',
  }">
    <h1 class="text-3xl font-bold mb-8">All Emblematic Icons</h1>

    <div class="mb-8">
      <UInput v-model="q" icon="i-lucide-search" size="xl" color="white" :trailing="false" placeholder="Search..."
        autocomplete="off" :ui="{ icon: { trailing: { pointer: '' } } }">
        <template #trailing>
          <UButton v-show="q !== ''" color="gray" variant="link" icon="i-lucide-x" :padded="false" @click="q = ''" />
        </template>
      </UInput>
    </div>

    <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6">
      <UTooltip v-for="{chain, name, slug} in filteredIcons" :key="chain" :text="chain" class="bg-gray-800 rounded-lg">
        <ULink :to="`/icons/${slug}`" class="w-full h-full flex items-center justify-center aspect-[1]">
          <ChainIcon :name="name" />
        </ULink>
      </UTooltip>
    </div>
  </UContainer>
</template>
