import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
  incremented,
  increased,
  decremented,
  toggled
} from '../features/counter/counterSlice'
import styles from './Counter.module.css'

const Counter = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.counter.value)
  const show = useAppSelector((state) => state.counter.showCounter)

  const incrementHandler = () => {
    dispatch(incremented())
  }

  const increaseHandler = () => {
    dispatch(increased(10))
  }

  const decrementHandler = () => {
    dispatch(decremented())
  }

  const toggleHandler = () => {
    dispatch(toggled())
  }

  return (
    <div>
      <header className={styles.header}>
        <h1>Redux Counter</h1>
        {show && (
          <div className={styles.buttons}>
            {count}
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseHandler}>Increase by 10</button>
            <button onClick={decrementHandler}>Decrement</button>
          </div>
        )}
        <button onClick={toggleHandler}>Toggle Counter</button>
      </header>
    </div>
  )
}

export default Counter
