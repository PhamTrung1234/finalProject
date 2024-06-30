import { createSlice } from '@reduxjs/toolkit'


const users = localStorage.getItem("user")
const currentUser = users ? JSON.parse(users):null
type Store = {
  user:{
    avatar:string;
    token:string;
    name:string;
    email:string;
    id:string | number;
    role:string;
  }|null;
}


const initialState :Store = {
  user:currentUser,
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