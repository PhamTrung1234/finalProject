import { createSlice } from '@reduxjs/toolkit'






const initialState = {
  user:"cũng vui đó ta"
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
      setCurrenUser: (state,{payload})=>{
        state.user = payload
      }
  },
})

export const { setCurrenUser } = counterSlice.actions



export default counterSlice