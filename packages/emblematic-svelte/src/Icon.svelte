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
  {#each iconNode as [tag, attrs, children]}
    {#if Array.isArray(children)}
      <svelte:element this={tag} {...attrs}>
        {#each children as [childTag, childAttrs]}
          <svelte:element this={childTag} {...childAttrs}/>
        {/each}
      </svelte:element>
    {:else if tag === 'title'}
      <svelte:element this={tag}>{attrs.values}</svelte:element>
    {:else}
      <svelte:element this={tag} {...attrs}/>
    {/if}
  {/each}
  <slot />
</svg>