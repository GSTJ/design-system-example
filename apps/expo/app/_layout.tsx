import React from 'react'

import { Provider } from 'app/provider'
import { Stack } from 'expo-router'

export default () => (
  <Provider>
    <Stack screenOptions={{ headerShown: false }} />
  </Provider>
)
