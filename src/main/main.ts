import { app } from 'electron'
import setApplicationMenu from './utils/menu'
import { MainWindow } from './window/mainWindow'

let mainWindow: MainWindow

function createWindow() {
  mainWindow = new MainWindow()
  mainWindow.init()
  setApplicationMenu()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow.browserWindow === null) {
    createWindow()
  }
})
