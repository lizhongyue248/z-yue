import { DEFAULT_EXTENSIONS } from '@babel/core'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import filesize from 'rollup-plugin-filesize'
import { terser } from 'rollup-plugin-terser'
import strip from '@rollup/plugin-strip'
import fs from 'fs'
import readPkgUp from 'read-pkg-up'

const extensions = [...DEFAULT_EXTENSIONS, '.js', '.ts']
const excludePath = 'node_modules/**'
const envInput = process.env.INPUT

const { packageJson: pkg } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd())
})

const packagePath = `packages/${pkg.name.substr(pkg.name.lastIndexOf('/') + 1)}`

const buildJS = (input) => ({
  input,
  external: ['react'],
  output: [
    {
      format: 'esm',
      file: pkg.module,
      exports: 'named'
    },
    {
      format: 'cjs',
      file: pkg.main,
      exports: 'named',
      plugins: [terser()],
      sourcemap: true
    }
  ],
  plugins: [
    typescript({
      tsconfig: `${packagePath}/tsconfig.json`,
      useTsconfigDeclarationDir: true,
      clean: true
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: excludePath,
      extensions
    }),
    nodeResolve({
      preferBuiltins: false,
      extensions
    }),
    commonjs(),
    peerDepsExternal(),
    filesize(),
    strip()
  ]
})

export default buildJS(envInput)
