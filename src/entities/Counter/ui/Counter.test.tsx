import renderComponent from 'shared/test/renderComponent'
import Counter from './Counter'
import { fireEvent, screen } from '@testing-library/react'

describe('Counter', () => {
    test('increment', () => {
        renderComponent(<Counter />, {
            initialState: {
                counter: {
                    value: 10
                }
            }
        })
        expect(screen.getByTestId('value')).toHaveTextContent('10')
        fireEvent.click(screen.getByTestId('+'))
        expect(screen.getByTestId('value')).toHaveTextContent('11')
    })

    test('increment', () => {
        renderComponent(<Counter />, {
            initialState: {
                counter: {
                    value: 10
                }
            }
        })
        expect(screen.getByTestId('value')).toHaveTextContent('10')
        fireEvent.click(screen.getByTestId('-'))
        expect(screen.getByTestId('value')).toHaveTextContent('9')
    })
})
