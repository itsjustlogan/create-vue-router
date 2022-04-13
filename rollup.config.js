import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/index.ts',
    external: ['fs', 'child_process', 'util', 'path', 'url', 'chalk'],
    output: {
      dir: 'dist',
      preserveModules: false,
      sourcemap: true,
      format: 'esm',
      banner: '#!/usr/bin/env node',
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
      }),
      terser({}),
    ],
  },
]
