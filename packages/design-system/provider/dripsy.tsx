import { DripsyFinalTheme, DripsyProvider, makeTheme } from 'dripsy'
import { darkTheme, defaultThemeProps, lightTheme } from 'tokens'

// https://www.dripsy.xyz/usage/theming/create
export const theme = makeTheme(defaultThemeProps)

export const groupedDarkTheme = {
  ...theme,
  ...darkTheme,
}

export const groupedLightTheme = {
  ...theme,
  ...lightTheme,
}

type DripsyProps = {
  children: React.ReactNode
  theme: DripsyFinalTheme
}

export const Dripsy: React.FC<DripsyProps> = ({ children, theme }) => {
  return (
    <DripsyProvider
      theme={theme}
      // this disables SSR, since react-native-web doesn't have support for it (yet)
      ssr
    >
      {children}
    </DripsyProvider>
  )
}
