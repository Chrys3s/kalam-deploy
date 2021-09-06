import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import utilitySlice from './slices/utilitySlice';

const rootReducer = {
	userInfo: userSlice.reducer,
	utilitySlice: utilitySlice.reducer,
};

export default configureStore({
	reducer: rootReducer,
});
