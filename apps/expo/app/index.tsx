import React from 'react'
import { StatusBar, View } from 'react-native'

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
    >
      <StatusBar barStyle="dark-content" />
    </View>
  )
}
