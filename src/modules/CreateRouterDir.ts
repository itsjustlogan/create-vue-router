import fs from 'fs'
import util from 'util'
import { cwd } from '../utils/constants.js'

const mkdir = util.promisify(fs.mkdir)

const createRouterDir = async (dirToCreate: string): Promise<string> => {
  await mkdir(`${cwd}/${dirToCreate}`, { recursive: true })

  return dirToCreate
}

export default createRouterDir
