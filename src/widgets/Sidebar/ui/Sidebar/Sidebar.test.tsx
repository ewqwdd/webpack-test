import { fireEvent, screen } from '@testing-library/react'
import Sidebar from './Sidebar'
import renderComponent from 'shared/test/renderComponent'
describe('Sidebar', () => {
    test('Render test', () => {
        renderComponent(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('Toggle test', () => {
        renderComponent(<Sidebar />)
        const btn = screen.getByTestId('toggle')
        fireEvent.click(btn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
