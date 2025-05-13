import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRequest: false,
  data: [],
  error: {},
};

const userslice = createSlice({
  name: "userslice",
  initialState,
  reducers: {
    userRequest: (state) => {
      state.isRequest = true;
    },
    useSuce: (state, payload) => 
    {
      state.isRequest = false;
      state.data = payload;
      
    },
    useFailed: (state, payload) => {
      state.isRequest = false;
      state.data = payload;
    },
  },
});

export const { userRequest, useSuce, useFailed } = userslice.actions;

export default userslice.reducer;
