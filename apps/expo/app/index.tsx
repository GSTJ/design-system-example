import React from 'react'
import { View } from 'react-native'

import { useSafeArea } from 'design-system/src/hooks/useSafeArea'

export default () => {
  const insets = useSafeArea()
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    />
  )
}
