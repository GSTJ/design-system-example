import React from 'react'

import { ActivityIndicator, Pressable, SxProp, Text } from 'dripsy'

export interface ButtonProps
  extends Omit<React.ComponentProps<typeof Pressable>, 'variant'> {
  children: React.ReactNode
  isLoading?: boolean
  variant?: 'layout.primary' | 'layout.ghost'
}

export const Button: React.FC<ButtonProps> = ({
  children,
  sx,
  isLoading,
  disabled,
  variant = 'layout.primary',
  ...props
}) => (
  <Pressable
    style={({ hovered, pressed }) => ({
      opacity: hovered || pressed ? 0.7 : 1,
    })}
    sx={
      {
        transition: 'opacity 120ms ease-out',
        padding: 15,
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
      } as SxProp
    }
    disabled={isLoading || disabled}
    variant={variant}
    {...props}
  >
    <Text sx={{ fontWeight: 'bold', color: '$buttonText' }}>
      {isLoading ? (
        <ActivityIndicator size={16} color="$buttonText" />
      ) : (
        children
      )}
    </Text>
  </Pressable>
)
