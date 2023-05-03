import React from 'react'
import { Preview } from '@storybook/react'
import { useDarkMode } from 'storybook-dark-mode'
import { Provider } from 'design-system/src/provider'

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
      <Provider colorMode={useDarkMode() ? 'dark' : 'light'}>
        <Story />
      </Provider>
    ),
  ],
}

export default preview
