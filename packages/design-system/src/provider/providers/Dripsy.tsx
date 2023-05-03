import React from 'react'

import { DripsyFinalTheme, DripsyProvider, makeTheme } from 'dripsy'
import { darkTheme, defaultThemeProps, lightTheme } from 'tokens'

// https://www.dripsy.xyz/usage/theming/create
export const theme = makeTheme(defaultThemeProps) as DripsyFinalTheme

export const groupedDarkTheme = {
  ...theme,
  ...darkTheme,
} as DripsyFinalTheme

export const groupedLightTheme = {
  ...theme,
  ...lightTheme,
} as DripsyFinalTheme

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
