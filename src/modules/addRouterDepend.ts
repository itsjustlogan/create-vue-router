import { exec } from 'child_process'
import { log } from '../utils/constants.js'
import exitMessage from '../utils/exitMessage.js'

const addRouterDepend = (): void => {
  exec('npm i vue-router@4', (err, stdout, stderr) => {
    if (err) {
      log(err.message)
    }
    if (stderr) {
      log(stderr)
    }
    log(stdout)
    exitMessage()
  })
}

export default addRouterDepend
