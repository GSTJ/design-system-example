import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'

import { Dripsy, groupedDarkTheme, groupedLightTheme } from './providers/Dripsy'

export const Provider = ({
  children,
  colorMode,
}: {
  children: React.ReactNode
  colorMode?: 'dark' | 'light'
}) => {
  const colorScheme = useColorScheme()
  const activeTheme = colorMode || colorScheme

  const isDarkMode = activeTheme === 'dark'

  return (
    <Dripsy theme={isDarkMode ? groupedDarkTheme : groupedLightTheme}>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
      {children}
    </Dripsy>
  )
}
