import chalk from 'chalk'
import getPackageDir from './getPackageDir.js'

export const cwd = process.cwd()
export const packageDir = getPackageDir()
export const log = console.log
export const routerFileTemplate = './config/router.txt'
export const whiteText = chalk.bold.white
export const cyanText = chalk.bold.cyan
