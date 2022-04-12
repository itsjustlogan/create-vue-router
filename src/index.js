#! /usr/bin/env node

import createRouter from './scripts/createRouter.js'
import { nextSteps } from './helpers/functions.js'

const execute = () => {
  createRouter()
  nextSteps()
}

execute()
