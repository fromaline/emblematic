/* eslint-disable import/no-extraneous-dependencies */
import base64SVG from '@emblematic/build-icons/utils/base64SVG.mjs';
import { getJSBanner } from './license.mjs';

export default ({ iconName, children, componentName, getSvg }) => {
  const svgContents = getSvg();
  const svgBase64 = base64SVG(svgContents);

  return `\
<script lang="ts">
${getJSBanner()}
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

type $$Props = IconProps;

const iconNode: IconNode = ${JSON.stringify(children)};

/**
 * @component @name ${componentName}
 * @description Emblematic SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,${svgBase64})
 *
 * @param {Object} props - Emblematic icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 */
</script>

<Icon name="${iconName}" {...$$props} iconNode={iconNode}>
  <slot/>
</Icon>
`;
};
