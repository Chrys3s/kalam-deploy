import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  blogsData: [],
};

export const blogDataSlice = createSlice({
  name: "blogDataSlice",
  initialState: {
    blogsData: [],
  },
  reducers: {
    storeAllBlogs: (state, action) => {
      state.blogsData = action.payload;
    },
    resetAllBlogs: (state, action) => {
      state.blogsData = defaultState;
    },
  },
});

export default blogDataSlice;
