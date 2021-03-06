// import fs from 'fs'
import path from 'path'
import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs';
import scss from 'rollup-plugin-scss'
// import sass from 'rollup-plugin-sass';

if (!process.env.TARGET) {
  throw new Error('TARGET package must be specified via --environment flag.')
}

const packagesDir = path.resolve(__dirname, 'packages')
const packageDir = path.resolve(packagesDir, process.env.TARGET)
const name = path.basename(packageDir)
const resolve = p => path.resolve(packageDir, p)
const pkg = require(resolve(`package.json`))
const packageOptions = pkg.buildOptions || {}

const outputConfigs = {
  esm: {
    file: resolve(`dist/index.js`),
    format: `esm`
  },
  cjs: {
    file: resolve(`dist/${name}.cjs.js`),
    format: `cjs`
  }
}

const defaultFormats = ['esm-bundler', 'cjs']
const inlineFormats = process.env.FORMATS && process.env.FORMATS.split(',')
const packageFormats = inlineFormats || packageOptions.formats || defaultFormats
const packageConfigs = process.env.PROD_ONLY
  ? []
  : packageFormats.map(format => createConfig(format, outputConfigs[format]))

if (process.env.NODE_ENV === 'production') {
  packageFormats.forEach(format => {
    if (packageOptions.prod === false) {
      return
    }
  })
}

export default packageConfigs

function createConfig(format, output, plugins = []) {
  if (!output) {
    console.log(require('chalk').yellow(`invalid format: "${format}"`))
    process.exit(1)
  }
  const entryFile = /runtime$/.test(format) ? `src/runtime.ts` : `src/index.ts`

  const deps = []
    .concat(pkg.dependencies ? Object.keys(pkg.dependencies) : [])
    .concat(pkg.peerDependencies ? Object.keys(pkg.peerDependencies) : [])
  return {
    input: resolve(entryFile),
    output,
    external: id => {
      return !!deps.find(dep => dep === id || id.startsWith(`${dep}/`))
    },
    plugins: [
      typescript({
        abortOnError: false,
        tsconfig: `./packages/${name}/tsconfig.json`,
        // tsconfig: `./tsconfig.json`,
        // tsconfigOverride: {
        //   compilerOptions: {
        //     rootDir: `packages/${name}/src`
        //   }
        // },
        clean: true
      }),
      babel({
        runtimeHelpers: true,
        include: [`**/src/**`],
        extensions: ['.js', '.ts', '.tsx'],
        presets: [
          '@babel/preset-typescript',
          [
            '@babel/preset-env',
            {
              exclude: [
                '@babel/plugin-transform-regenerator',
                '@babel/transform-async-to-generator'
              ],
              modules: false,
              targets: {
                esmodules: true
              }
            }
            
          ],
          '@vue/cli-plugin-babel/preset'
        ],
        plugins: [
          [
            '@babel/plugin-transform-runtime',
            {
              regenerator: false,
              useESModules: true
            }
          ],
          '@babel/plugin-proposal-class-properties'
        ]
      }),
      commonjs(),
      scss({
        output: resolve(`dist/index.css`),
      }),
      // sass({
      //   output(styles, styleNodes) {
      //     if (styleNodes && styleNodes.length) {
      //       styleNodes.forEach((info) => {
      //         const { id, content } = info
      //         const thePath = path.relative(`./packages/${name}/src`, id).replace('scss', 'css')
      //         fsExtra.ensureFileSync(`./packages/${name}/dist/${thePath}`, function (err) {
      //           if (err) {
      //             throw err;
      //           }
      //         });
      //         fs.writeFileSync(`./packages/${name}/dist/${thePath}`, content);
      //       });
      //     }
      //   }
      // }),
    ]
  }
}
