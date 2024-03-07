import base64SVG from '@emblematic/build-icons/utils/base64SVG.mjs'

export default ({ componentName, _, children, getSvg }) => {
  const svgContents = getSvg()
  const svgBase64 = base64SVG(svgContents)

  return `
import createEmblematicIcon from '../createEmblematicIcon';

/**
 * @component @name ${componentName}
 * @description Emblematic SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,${svgBase64})
 *
 * @param {Object} props - Emblematic icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Vue component
 */
const ${componentName} = createEmblematicIcon('${componentName}Icon', ${JSON.stringify(children)});

export default ${componentName};
`
}
