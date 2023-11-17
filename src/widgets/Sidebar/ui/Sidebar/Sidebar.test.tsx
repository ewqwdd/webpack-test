import { fireEvent, screen } from '@testing-library/react'
import Sidebar from './Sidebar'
import renderWithTranslation from 'shared/test/renderWithTranslation'
describe('Sidebar', () => {
    test('Render test', () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('Toggle test', () => {
        renderWithTranslation(<Sidebar />)
        const btn = screen.getByTestId('toggle')
        fireEvent.click(btn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
