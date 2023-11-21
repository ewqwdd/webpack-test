import { useSelector, useDispatch } from 'react-redux'

import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export default function Counter() {
    const dispatch = useDispatch()
    const value = useSelector(getCounterValue)
    const { decrement, increment } = counterActions

    const increment_ = () => {
        dispatch(increment())
    }

    const decrement_ = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <span data-testid="value">{value}</span>
            <button data-testid="+" onClick={increment_}>+</button>
            <button data-testid="-" onClick={decrement_}>-</button>
        </div>
    )
}
