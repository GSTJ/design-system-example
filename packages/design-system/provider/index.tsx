import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'

import { Dripsy, groupedDarkTheme, groupedLightTheme } from './Dripsy'

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const colorMode = useColorScheme()
  const isDarkMode = colorMode === 'dark'

  return (
    <Dripsy theme={isDarkMode ? groupedDarkTheme : groupedLightTheme}>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
      {children}
    </Dripsy>
  )
}
