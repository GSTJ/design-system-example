import React from 'react'

import { DripsyFinalTheme, DripsyProvider, makeTheme } from 'dripsy'
import { darkTheme, defaultThemeProps } from 'tokens'

// https://www.dripsy.xyz/usage/theming/create
export const theme = makeTheme({
  ...defaultThemeProps,
  layout: {
    primary: {
      backgroundColor: '$primary',
    },
    ghost: {
      backgroundColor: 'transparent',
      borderColor: '$primary',
      borderWidth: 2,
    },
  },
})

export const groupedDarkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    ...darkTheme,
  },
}

export const groupedLightTheme = theme

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
