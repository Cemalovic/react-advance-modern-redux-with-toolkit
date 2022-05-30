import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
  showCounter: boolean
}

const initialState: CounterState = {
  value: 0,
  showCounter: true
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented(state) {
      state.value++
    },
    increased(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
    decremented(state) {
      state.value--
    },
    toggled(state) {
      state.showCounter = !state.showCounter
    }
  }
})

export const { incremented, increased, decremented, toggled } =
  counterSlice.actions

export default counterSlice.reducer
