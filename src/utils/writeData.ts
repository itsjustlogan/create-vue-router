import fs from 'fs'
import { cwd } from './constants.js'

const writeData = (
  data: Buffer,
  pathToWrite: string,
  filename: string
): void => {
  fs.writeFile(`${cwd}/${pathToWrite}/${filename}`, data, () => true)
}

export default writeData
