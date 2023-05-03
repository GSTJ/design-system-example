import { theme } from './src/provider/providers/Dripsy'

type MyTheme = typeof theme
declare module 'dripsy' {
  interface DripsyCustomTheme extends MyTheme {}
}
