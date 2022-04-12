import chalk from 'chalk'

const cwd = process.cwd()
const log = console.log
const template = `${cwd}/node_modules/create-vue-router/src/config/router.txt`
const grayText = chalk.bold.gray
const whiteText = chalk.bold.white
const cyanText = chalk.bold.cyan
const errorText = chalk.bgRed.white.bold

export { cwd, log, template, grayText, whiteText, cyanText, errorText }
