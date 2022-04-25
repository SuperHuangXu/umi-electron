declare module '*.less'
declare module '*.css'
declare module '*.sass'
declare module '*.scss'
declare module '*.png'
declare module '*.jpg'

interface Window {
  API: import('../main/preload/mainPreload').API
}
