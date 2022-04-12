import { readWriteData, writeData, makeDir } from '../helpers/functions.js'
import { template } from '../helpers/variables.js'

const createRouter = () => {
  makeDir('/src/router')
  readWriteData(template, writeData, 'index.js')
}

export default createRouter
