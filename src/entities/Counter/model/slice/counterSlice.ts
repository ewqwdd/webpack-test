import { createSlice } from '@reduxjs/toolkit'
import { type CounterSchema } from '../types/CounterSchema'

const initialState: CounterSchema = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        }
    }
})

export const counterActions = counterSlice.actions
export const counterReducer = counterSlice.reducer
