import { theme } from './provider/dripsy'

type MyTheme = typeof theme
declare module 'dripsy' {
  interface DripsyCustomTheme extends MyTheme {}
}
