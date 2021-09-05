import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import loginSlice from './slices/loginScreenSlice';

const rootReducer = {
	userInfo: userSlice.reducer,
	loginScreen: loginSlice.reducer,
};

export default configureStore({
	reducer: rootReducer,
});
