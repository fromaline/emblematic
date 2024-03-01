<script lang="ts">
  import defaultAttributes from './defaultAttributes'
  import type { IconNode } from './types';

  export let name: string
  export let size: number | string = 24
  export let iconNode: IconNode
</script>

<svg
  {...defaultAttributes}
  {...$$restProps}
  width={size}
  height={size}
  class={`emblematic-icon emblematic emblematic-${name} ${$$props.class ?? ''}`}
>
  {#each iconNode as [tag, attrs]}
    <svelte:element this={tag} {...attrs}/>
  {/each}
  <slot />
</svg>