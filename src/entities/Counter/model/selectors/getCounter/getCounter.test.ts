import { type StateSchema } from 'app/providers/StoreProvider'
import { type DeepPartial } from 'redux'
import { getCounter } from './getCounter'

test('Check value', () => {
    const state: DeepPartial<StateSchema> = {
        counter: {
            value: 10
        }
    }
    expect(getCounter(state as StateSchema)).toEqual({
        value: 10
    })
})
