import React from 'react'

import { Stack } from 'expo-router'

import { Provider } from '../../../packages/design-system/provider'

export default () => (
  <Provider>
    <Stack screenOptions={{ headerShown: false }} />
  </Provider>
)
