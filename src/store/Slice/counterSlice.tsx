import { createSlice } from '@reduxjs/toolkit'


const user = localStorage.getItem("user")



const initialState = {
  user:user?JSON.parse(user):null,
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