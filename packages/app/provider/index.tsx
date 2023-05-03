import { StatusBar, useColorScheme } from 'react-native'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Dripsy, groupedDarkTheme, groupedLightTheme } from './dripsy'

export const queryClient = new QueryClient()

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const colorMode = useColorScheme()
  const isDarkMode = colorMode === 'dark'

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
      <Dripsy theme={isDarkMode ? groupedDarkTheme : groupedLightTheme}>
        {children}
      </Dripsy>
    </QueryClientProvider>
  )
}
