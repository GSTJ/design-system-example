import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import { Provider } from '../../../provider'

import { Button } from './Button'

describe('Button', () => {
  it('renders correctly', () => {
    const component = render(<Button>Press me</Button>, {
      wrapper: Provider,
    })

    expect(component).toMatchSnapshot()
  })

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
