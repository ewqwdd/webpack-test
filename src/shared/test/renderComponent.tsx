import { render } from '@testing-library/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import { type DeepPartial } from 'redux'
import i18n from 'shared/config/i18/i18ForTest'

interface Options {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export default function renderComponent(element: React.ReactNode, options: Options = {}) {
    const { route = '/', initialState } = options

    return render(
        <StoreProvider initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18n}>
                    {element}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
};
