import { BrowserWindow, app } from 'electron'
import url from 'url'
import path from 'path'

const isDev = process.env.NODE_ENV === 'development'

export class MainWindow {
  browserWindow: Electron.BrowserWindow | null
  constructor() {
    this.browserWindow = new BrowserWindow({
      height: 800,
      width: 1000,
      webPreferences: {
        contextIsolation: true,
        preload: isDev
          ? path.join(__dirname, './mainPreload.js')
          : path.join(app.getAppPath(), './dist/main/mainPreload.js'),
      },
    })
    this.init()
  }

  init() {
    if (!this.browserWindow) {
      return
    }
    if (isDev) {
      this.browserWindow.loadURL('http://localhost:8000/#/')
      this.browserWindow.webContents.openDevTools()
    } else {
      this.browserWindow.loadURL(
        url.pathToFileURL(path.join(app.getAppPath(), './dist/render/index.html')).toString(),
      )
    }

    this.browserWindow.on('closed', () => {
      this.browserWindow = null
    })
  }
}
