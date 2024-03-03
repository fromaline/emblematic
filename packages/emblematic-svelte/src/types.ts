import type { SvelteComponent } from 'svelte';
import type { SVGAttributes, SvelteHTMLElements } from 'svelte/elements';

export type Attrs = SVGAttributes<SVGSVGElement>;

export type IconNode = ([elementName: keyof SvelteHTMLElements, attrs: Attrs] | [elementName: keyof SvelteHTMLElements, attrs: Attrs, [elementName: keyof SvelteHTMLElements, attrs: Attrs][]])[];

export interface IconProps extends Attrs {
  size?: number | string;
  class?: string;
}

export type IconEvents = {
  [evt: string]: CustomEvent<any>;
};

export type IconSlots = {
  default: {};
};

export type Icon = SvelteComponent<IconProps, IconEvents, IconSlots>;