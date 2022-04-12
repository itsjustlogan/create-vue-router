#!/usr/bin/env ts-node

import fs from 'fs'
import util from 'util'
import path from 'path'
import { log, packageDir } from './constants.js'

const readFile = util.promisify(fs.readFile)

const readData = async (sourceFile: string) => {
  const dataRead = await readFile((path.resolve(packageDir), sourceFile))
  return dataRead
}

export default readData
