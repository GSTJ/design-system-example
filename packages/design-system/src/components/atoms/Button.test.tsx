import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import { Provider } from '../../provider'

import { Button, ButtonProps } from './Button'

type ButtonVariants = ButtonProps['variant'][]

describe('Button', () => {
  it.each(['layout.ghost', 'layout.primary'] as ButtonVariants)(
    'renders %s variant',
    (variant) => {
      const component = render(<Button variant={variant}>Press me</Button>, {
        wrapper: Provider,
      })
      expect(component).toMatchSnapshot()
    }
  )

  it('fires onPress when pressed', () => {
    const onPress = jest.fn()
    const TEST_ID = 'button-id'

    const { getByTestId } = render(
      <Button testID={TEST_ID} onPress={onPress}>
        Press me
      </Button>,
      { wrapper: Provider }
    )

    fireEvent.press(getByTestId(TEST_ID))

    expect(onPress).toHaveBeenCalled()
  })
})
