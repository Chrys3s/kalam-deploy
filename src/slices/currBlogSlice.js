import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  blogInfo: {
    author: {
      authorName: null,
      authorEmails: null,
      authorId: null,
    },
    blogTitle: null,
    comments: ["loading"],
    content: null,
    dateCreated: null,
    imgUrl: null,
    lastModified: null,
    likes: ["loading"],
    tags: ["loading"],
    views: 0,
    _v: 0,
    _id: null,
  },
};

export const currBlogSlice = createSlice({
  name: "currBlogSlice",
  initialState: {
    blogInfo: {
      author: {
        authorName: null,
        authorEmails: null,
        authorId: null,
      },
      blogTitle: null,
      comments: ["loading"],
      content: null,
      dateCreated: null,
      imgUrl: null,
      lastModified: null,
      likes: ["loading"],
      tags: ["loading"],
      views: 0,
      _v: 0,
      _id: null,
    },
  },
  reducers: {
    setBlog: (state, action) => {
      state.blogInfo = action.payload;
    },
    resetBlog: (state, action) => {
      state.blogInfo = defaultState;
    },
  },
});

export default currBlogSlice;
