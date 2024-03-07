import { visualizer } from 'rollup-plugin-visualizer'
import replace from '@rollup/plugin-replace'
import license from 'rollup-plugin-license'
import esbuild from 'rollup-plugin-esbuild'

function plugins(pkg, minify, esbuildOptions = {}) {
  return [
    esbuild({
      minify,
      ...esbuildOptions,
    }),
    license({
      banner: `@license ${pkg.name} v${pkg.version} - ${pkg.license}

This source code is licensed under the ${pkg.license} license.
See the LICENSE file in the root directory of this source tree.`,
    }),
    visualizer({
      sourcemap: true,
      filename: `stats/${pkg.name}${minify ? '-min' : ''}.html`,
    }),
  ].filter(Boolean)
}

export { license, visualizer, replace }

export default plugins
