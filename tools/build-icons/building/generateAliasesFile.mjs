import path from 'node:path'
import fs from 'node:fs'
import { appendFile, resetFile, toPascalCase } from '../../../scripts/helpers.mjs'

function getImportString(componentName, iconName, aliasImportFileExtension = '') {
  return `export { default as ${componentName} } from './icons/${iconName}${aliasImportFileExtension}';\n`
}

export default async function generateAliasesFile({
  iconNodes,
  outputDirectory,
  fileExtension,
  iconFileExtension = '.js',
  iconMetaData,
  aliasImportFileExtension,
  aliasNamesOnly = false,
  separateAliasesFile = false,
  showLog = true,
}) {
  const iconsDistDirectory = path.join(outputDirectory, `icons`)
  const fileName = path.basename(`aliases${fileExtension}`)
  const icons = Object.keys(iconNodes)

  // Reset file
  resetFile(fileName, outputDirectory)

  // Generate Import for Icon VNodes
  await Promise.all(
    icons.map(async (iconName, index) => {
      const componentName = toPascalCase(iconName)
      const iconAliases = iconMetaData[iconName]?.aliases

      let importString = ''

      if ((iconAliases != null && Array.isArray(iconAliases)) || !aliasNamesOnly) {
        if (index > 0)
          importString += '\n'

        importString += `// ${componentName} aliases\n`
      }

      if (!aliasNamesOnly) {
        importString += getImportString(`${componentName}Icon`, iconName, aliasImportFileExtension)
        importString += getImportString(
          `Emblematic${componentName}`,
          iconName,
          aliasImportFileExtension,
        )
      }

      if (iconAliases != null && Array.isArray(iconAliases)) {
        await Promise.all(
          iconAliases.map(async (alias) => {
            const componentNameAlias = toPascalCase(alias)

            if (separateAliasesFile) {
              const output = `export { default } from "./${iconName}"`
              const location = path.join(iconsDistDirectory, `${alias}${iconFileExtension}`)

              await fs.promises.writeFile(location, output, 'utf-8')
            }

            // Don't import the same icon twice
            if (componentName === componentNameAlias)
              return

            const exportFileIcon = separateAliasesFile ? alias : iconName

            importString += getImportString(
              componentNameAlias,
              exportFileIcon,
              aliasImportFileExtension,
            )

            if (!aliasNamesOnly) {
              importString += getImportString(
                `${componentNameAlias}Icon`,
                exportFileIcon,
                aliasImportFileExtension,
              )

              importString += getImportString(
                `Emblematic${componentNameAlias}`,
                exportFileIcon,
                aliasImportFileExtension,
              )
            }
          }),
        )
      }

      appendFile(importString, fileName, outputDirectory)
    }),
  )

  appendFile('\n', fileName, outputDirectory)

  if (showLog)
    // eslint-disable-next-line no-console
    console.log(`Successfully generated ${fileName} file`)
}
