import { configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from './stateSchema'
import { counterReducer } from 'entities/Counter'

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer
        },
        devTools: _IS_DEV_,
        preloadedState: initialState
    })
}
