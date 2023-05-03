import React from 'react'

import { Provider } from 'design-system/src/provider'
import { Stack } from 'expo-router'

export default () => (
  <Provider>
    <Stack screenOptions={{ headerShown: false }} />
  </Provider>
)
