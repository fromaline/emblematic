import fs from 'node:fs'
import path from 'node:path'
import prettier from 'prettier'
import { readSvg, toPascalCase } from '../../../scripts/helpers.mjs'

export default ({
  iconNodes,
  outputDirectory,
  template,
  showLog = true,
  iconFileExtension = '.js',
  pretty = true,
  iconsDir,
}) => {
  const icons = Object.keys(iconNodes)
  const iconsDistDirectory = path.join(outputDirectory, `icons`)

  if (!fs.existsSync(iconsDistDirectory))
    fs.mkdirSync(iconsDistDirectory)

  const writeIconFiles = icons.map(async (iconName) => {
    const location = path.join(iconsDistDirectory, `${iconName}${iconFileExtension}`)
    const componentName = toPascalCase(iconName)

    let { children } = iconNodes[iconName]
    children = children.map(({ name, attributes, children }) => {
      if (name === 'title')
        return [name, { values: children[0].value, type: 'text' }]

      if (Array.isArray(children) && children.length > 0)
        return [name, attributes, children.map((({ name, attributes }) => [name, attributes]))]

      return [name, attributes]
    },
    )

    const getSvg = () => readSvg(`${iconName}.svg`, iconsDir)

    const elementTemplate = template({ componentName, iconName, children, getSvg })
    const output = pretty
      ? prettier.format(elementTemplate, {
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 100,
        parser: 'babel',
      })
      : elementTemplate

    await fs.promises.writeFile(location, output, 'utf-8')
  })

  Promise.all(writeIconFiles)
    .then(() => {
      if (showLog)
        // eslint-disable-next-line no-console
        console.log('Successfully built', icons.length, 'icons.')
    })
    .catch((error) => {
      throw new Error(`Something went wrong generating icon files,\n ${error}`)
    })
}
