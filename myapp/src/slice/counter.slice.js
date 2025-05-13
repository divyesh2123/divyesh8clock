import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    counter:0
}

const counterslice = createSlice({
  name: 'counterslice',
  initialState,
  reducers: {
    inc : (state)=>{
        state.counter = state.counter +1;
    },
    dec : (state)=>{
        state.counter = state.counter -1;
    }


  }
});

export const {inc,dec} = counterslice.actions

export default counterslice.reducer