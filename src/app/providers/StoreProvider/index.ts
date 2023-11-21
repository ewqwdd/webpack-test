import StoreProvider from './ui/StoreProvider'
import { createReduxStore } from './config/store'
import { type StateSchema, type CounterState } from './config/stateSchema'

export {
    type CounterState,
    type StateSchema,
    StoreProvider,
    createReduxStore
}
