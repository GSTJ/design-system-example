import { StorybookConfig } from '@storybook/preset-react-webpack'

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
    'storybook-dark-mode',
    'arcade-storybook-addon-rtl',
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: [
          'react-native',
          'react-native-web',
          'solito',
          'dripsy',
          '@dripsy/core',
          'design-system',
          'tokens',
          'react-native-reanimated',
          '@expo/html-elements',
          'react-native-gesture-handler',
        ],
      },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
  },
}

export default config
