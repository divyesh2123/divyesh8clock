import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {

    isLoading: false,
    data: [],
    error: {}
}

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (args, { dispatch, getState }) => {
      
        console.log(args);
      return fetch(
        `https://jsonplaceholder.typicode.com/posts`
      ).then(res => res.json());
      //.then(() => dispatch(something else...))
    }
  );

const postsSlice = createSlice({
  name:'posts',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getPosts.pending, (state) => {
    state.isLoading = true;
    })
    .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
    state.data = action.payload;
    })
    .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
    state.error = action.error.message;
    });
    },
});
export const {} = postsSlice.actions

export default postsSlice.reducer