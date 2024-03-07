import plugins, { replace } from '@emblematic/rollup-plugins'
import dts from 'rollup-plugin-dts'
import pkg from './package.json' assert { type: 'json' }

const packageName = 'EmblematicVue'
const outputFileName = 'emblematic-vue3'
const outputDir = 'dist'
const inputs = ['src/emblematic-vue3.ts']
const bundles = [
  {
    format: 'umd',
    inputs,
    outputDir,
    minify: true,
  },
  {
    format: 'umd',
    inputs,
    outputDir,
  },
  {
    format: 'cjs',
    inputs,
    outputDir,
  },
  {
    format: 'esm',
    inputs,
    outputDir,
    preserveModules: true,
  },
]

const configs = bundles
  .map(({ inputs, outputDir, format, minify, preserveModules }) =>
    inputs.map(input => ({
      input,
      plugins: plugins(pkg, minify),
      external: ['vue'],
      output: {
        name: packageName,
        ...(preserveModules
          ? {
              dir: `${outputDir}/${format}`,
            }
          : {
              file: `${outputDir}/${format}/${outputFileName}${minify ? '.min' : ''}.js`,
            }),
        format,
        preserveModules,
        sourcemap: true,
        globals: {
          vue: 'vue',
        },
      },
    })),
  )
  .flat()

export default [
  {
    input: inputs[0],
    output: [
      {
        file: `dist/${outputFileName}.d.ts`,
        format: 'es',
      },
    ],
    plugins: [
      dts({
        compilerOptions: {
          preserveSymlinks: false,
        },
      }),
    ],
  },
  ...configs,
]
