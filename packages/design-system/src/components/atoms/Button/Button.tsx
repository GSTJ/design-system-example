import React from 'react'

import { ActivityIndicator, Pressable, Text } from 'dripsy'

export interface ButtonProps extends React.ComponentProps<typeof Pressable> {
  children: React.ReactNode
  isLoading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  isLoading,
  disabled,
  ...props
}) => (
  <Pressable
    style={({ hovered, pressed }) => ({
      opacity: hovered || pressed ? 0.7 : 1,
    })}
    sx={{
      backgroundColor: '$buttonBackground',
      transition: 'opacity 120ms ease-out',
      padding: '$base',
      borderRadius: '$small',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    disabled={isLoading || disabled}
    {...props}
  >
    <Text
      sx={{
        fontWeight: 'bold',
        color: '$buttonText',
        fontSize: '$base',
      }}
    >
      {isLoading ? (
        <ActivityIndicator size={16} color="$buttonText" />
      ) : (
        children
      )}
    </Text>
  </Pressable>
)
