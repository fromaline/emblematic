<script setup lang="ts">
import { computed } from 'vue';
import * as icons from "emblematic-vue3";

export interface Props {
  name: string
  size?: string
}

const props = defineProps<Props>()

// @ts-expect-error type mismatch
const icon = computed(() => icons[props.name]);
</script>

<template>
  <component :is="icon" :size="size" />
</template>