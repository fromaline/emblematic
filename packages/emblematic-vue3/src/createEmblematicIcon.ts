import { h } from 'vue'
import type { DefineComponent, FunctionalComponent, SVGAttributes } from 'vue'
import defaultAttributes from './defaultAttributes'

// Create interface extending SVGAttributes
export interface SVGProps extends Partial<SVGAttributes> {
  size?: 32 | number
}

export type IconNode = ([elementName: string, attrs: Record<string, string>] | [elementName: string, attrs: Record<string, string>, [elementName: string, attrs: Record<string, string>][]])[]
export type Icon = FunctionalComponent<SVGProps>
/**
 * Converts string to KebabCase
 *
 * @param {string} string
 * @returns {string} A kebabized string
 */
export function toKebabCase(string: string) {
  return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

function createEmblematicIcon(iconName: string, iconNode: IconNode): Icon {
  return (
    { size, class: _, ...props }, // props
    { attrs, slots }, // context
  ) => {
    return h(
      'svg',
      {
        ...defaultAttributes,
        width: size || defaultAttributes.width,
        height: size || defaultAttributes.height,
        ...attrs,
        class: ['emblematic', `emblematic-${toKebabCase(iconName)}`],
        ...props,
      },
      [...iconNode.map(([tag, attrs, children]) => {
        if (Array.isArray(children))
          return h(tag, attrs, children.map(([childTag, childAttrs]) => h(childTag, childAttrs)))
        else if (tag === 'title')
          return h(tag, attrs, attrs.values)

        return h(tag, attrs)
      }), ...(slots.default ? [slots.default()] : [])],
    )
  }
}

export default createEmblematicIcon
