import React from 'react';
import { Preview } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';
import { KustomerThemeProvider } from '../src/components';
import { lightTheme, darkTheme } from '../src/themes';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    darkMode: {
      stylePreview: true
    }
  },
  decorators: [
    (Story) => (
      <KustomerThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
        <Story />
      </KustomerThemeProvider>
    )
  ]
};

export default preview;
