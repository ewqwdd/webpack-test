import { render, screen } from '@testing-library/react'
import AppButton from './AppButton'
describe('AppButton', () => {
    test('test-react', () => {
        render(<AppButton>TEST</AppButton>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})
