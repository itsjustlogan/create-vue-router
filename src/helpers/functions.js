import * as fs from 'fs'
import { cwd, errorText, log, whiteText, cyanText } from './variables.js'

export const makeDir = (dirToCreate) => {
  fs.mkdir(`${cwd}/${dirToCreate}`, { recursive: true }, (err) => {
    if (err) {
      log(
        errorText(
          'Could not create "router" directory as it may already exist.'
        )
      )
    }
  })
}

export const writeData = (data, filename) => {
  fs.writeFile(`${cwd}/src/router/${filename}`, data, () => true)
}

export const readWriteData = (sourceFile, writer, outputFileName) => {
  fs.readFile(sourceFile, (err, data) => {
    writer(data, outputFileName)
    if (err) {
      log(err.message)
    }
  })
}

export const nextSteps = () => {
  log(
    `Successfully created router file: ${cyanText('index.js')} in ${whiteText(
      "'src/router'"
    )}`
  )

  log(whiteText('Next Steps:\n'))
  log(
    `-${cyanText(
      " import router from './router'"
    )} at the top of your ${whiteText('"main.js"')} file\n`
  )
  log(`- modify ${whiteText('"createApp(App)"')} statement to look like this: `)
  log(cyanText("createApp(App).use(router).mount('#app')\n"))
  log(`- add ${cyanText('<router-view></router-view>')} to App.vue\n`)
}
