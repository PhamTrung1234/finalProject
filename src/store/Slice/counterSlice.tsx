import { createSlice } from '@reduxjs/toolkit'


const users = localStorage.getItem("user")
type Store = {
  user:string | null;
}


const initialState :Store= {
  user:users?users:null,
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