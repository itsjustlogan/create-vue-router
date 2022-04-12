import { routerFileTemplate } from '../utils/constants.js'
import createRouterDir from './CreateRouterDir.js'
import readData from '../utils/readData.js'
import writeData from '../utils/writeData.js'

const createRouterFile = async () => {
  const routerContent = await readData(routerFileTemplate)
  const writePath = await createRouterDir('src/router')
  writeData(routerContent, writePath, 'index.js')
}

export default createRouterFile
