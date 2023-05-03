import React from 'react'
import { Preview } from '@storybook/react'
import { useDarkMode } from 'storybook-dark-mode'
import { Provider } from 'design-system/provider'
import {
  groupedLightTheme,
  groupedDarkTheme,
} from 'design-system/provider/Dripsy'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <Provider theme={useDarkMode() ? groupedDarkTheme : groupedLightTheme}>
        <Story />
      </Provider>
    ),
  ],
}

export default preview
