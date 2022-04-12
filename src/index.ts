import addRouterDepend from './modules/addRouterDepend.js'
import createRouterDir from './modules/CreateRouterDir.js'
import createRouterFile from './modules/createRouterFile.js'
import { log } from './utils/constants.js'

try {
  createRouterDir('src/views')
  createRouterFile()
  addRouterDepend()
} catch (e) {
  log(e)
}
