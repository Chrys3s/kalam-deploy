import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import utilitySlice from "./slices/utilitySlice";
import blogDataSlice from "./slices/blogDataSlice";
import currBlogSlice from "./slices/currBlogSlice";

const rootReducer = {
  userInfo: userSlice.reducer,
  utilitySlice: utilitySlice.reducer,
  blogDataSlice: blogDataSlice.reducer,
  currBlogSlice: currBlogSlice.reducer,
};

export default configureStore({
  reducer: rootReducer,
});
