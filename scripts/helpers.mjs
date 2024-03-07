import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * Converts string to CamelCase
 *
 * @param {string} string
 * @returns {string} A camelized string
 */
export function toCamelCase(string) {
  return string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) =>
    p2 ? p2.toUpperCase() : p1.toLowerCase())
}

/**
 * Converts string to PascalCase
 *
 * @param {string} string
 * @returns {string} A pascalized string
 */
export function toPascalCase(string) {
  const camelCase = toCamelCase(string)

  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1)
}

/**
 * Resets the file contents.
 *
 * @param {string} fileName
 * @param {string} outputDirectory
 */
export function resetFile(fileName, outputDirectory) {
  return fs.writeFileSync(path.join(outputDirectory, fileName), '', 'utf-8')
}

/**
 * Reads the file contents.
 *
 * @param {string} path
 * @returns {string} The contents of a file
 */
export const readFile = entry => fs.readFileSync(path.resolve(__dirname, '../', entry), 'utf-8')

/**
 * append content to a file
 *
 * @param {string} content
 * @param {string} fileName
 * @param {string} outputDirectory
 */
export function appendFile(content, fileName, outputDirectory) {
  return fs.appendFileSync(path.join(outputDirectory, fileName), content, 'utf-8')
}

/**
 * writes content to a file
 *
 * @param {string} content
 * @param {string} fileName
 * @param {string} outputDirectory
 */
export function writeFile(content, fileName, outputDirectory) {
  return fs.writeFileSync(path.join(outputDirectory, fileName), content, 'utf-8')
}

/**
 * reads the icon directory
 *
 * @param {string} directory
 * @returns {Array} An array of file paths containing svgs
 */
export function readSvgDirectory(directory, fileExtension = '.svg') {
  return fs.readdirSync(directory).filter(file => path.extname(file) === fileExtension)
}

/**
 * Read svg from directory
 *
 * @param {string} fileName
 * @param {string} directory
 */
export function readSvg(fileName, directory) {
  return fs.readFileSync(path.join(directory, fileName), 'utf-8')
}

/**
 * djb2 hashing function
 *
 * @param {string} string
 * @param {number} seed
 * @returns {string} A hashed string of 6 characters
 */
export function hash(string, seed = 5381) {
  let i = string.length

  while (i)

    seed = (seed * 33) ^ string.charCodeAt(--i)

  return (seed >>> 0).toString(36).substr(0, 6)
}

/**
 * Generate Hashed string based on name and attributes
 *
 * @param {object} seed
 * @param {string} seed.name A name, for example an icon name
 * @param {object} seed.attributes An object of SVGElement Attrbutes
 * @returns {string} A hashed string of 6 characters
 */
export const generateHashedKey = ({ name, attributes }) => hash(JSON.stringify([name, attributes]))

/**
 * Checks if array of items contains duplicated items
 *
 * @param {Array} children an array of items
 * @returns {boolean} if items contains duplicated items.
 */
export function hasDuplicatedChildren(children) {
  const hashedKeys = children.map(generateHashedKey)

  return !hashedKeys.every(
    (key, index) => index === hashedKeys.findIndex(childKey => childKey === key),
  )
}

/**
 * @param {string} currentPath
 * @returns {string}
 */
export const getCurrentDirPath = currentPath => path.dirname(fileURLToPath(currentPath))
