import fs from 'fs'
import path from 'path'

const { contextBridge } = require('electron')

export interface API {
  helloPreload(msg: string): string
  dirname(): string
  readMainJs: () => Promise<string>
}

function createAPI(api: API) {
  return api
}

contextBridge.exposeInMainWorld(
  'API',
  createAPI({
    helloPreload: (msg: string) => `hello ${msg}`,
    dirname: () => __dirname,
    readMainJs: () => {
      return new Promise<string>((resolve, reject) => {
        fs.readFile(path.join(__dirname, 'main.js'), (err, data) => {
          if (err) {
            reject(err)
          }
          resolve(data.toString())
        })
      })
    },
  }),
)
