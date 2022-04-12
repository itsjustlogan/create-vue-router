import { cyanText, log, whiteText } from './constants.js'

const exitMessage = () => {
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

export default exitMessage
