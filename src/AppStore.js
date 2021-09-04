import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';

const rootReducer = {
	user: userSlice.reducer,
};

export default configureStore({
	reducer: rootReducer,
});
