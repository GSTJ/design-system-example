module.exports = (api) => {
  api.cache(true)
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      'react-native-reanimated/plugin',
      'transform-inline-environment-variables',
      // https://expo.github.io/router/docs/#configure-the-babel-plugin
      require.resolve('expo-router/babel'),
    ],
  }
}
