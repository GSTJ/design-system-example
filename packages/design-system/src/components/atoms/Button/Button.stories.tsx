import React from 'react'

import type { Meta, StoryFn } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta<typeof Button>

export const Default: StoryFn<typeof Button> = (args) => <Button {...args} />
