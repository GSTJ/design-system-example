module.exports = {
  preset: 'react-native',
  automock: false,
  testEnvironment: 'jest-environment-jsdom',
  modulePaths: ['<rootdir>/src'],
  roots: ['<rootDir>'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.svg$': 'jest-transformer-svg',
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  moduleFileExtensions: [
    'web.tsx',
    'tsx',
    'web.ts',
    'ts',
    'web.jsx',
    'jsx',
    'web.js',
    'js',
  ],
  modulePathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist'],
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|react-native|@react-native-community|dripsy|@expo)',
  ],
}
