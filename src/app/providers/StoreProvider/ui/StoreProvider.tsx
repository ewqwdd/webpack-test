import { Provider } from 'react-redux'
import { type StateSchema } from '../config/stateSchema'
import { createReduxStore } from '../config/store'

interface StoreProviderProps {
    children: React.ReactNode
    initialState?: StateSchema
}

export default function StoreProvider({ children, initialState }: StoreProviderProps) {
    const store = createReduxStore(initialState)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
};
