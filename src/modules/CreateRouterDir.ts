import fs from 'fs'
import { cwd, errorText, log } from '../utils/constants.js'

const createRouterDir = async (dirToCreate: string): Promise<string> => {
  fs.mkdir(`${cwd}/${dirToCreate}`, { recursive: true }, (err) => {
    if (err) log(errorText(err.message))
  })
  return dirToCreate
}

export default createRouterDir
