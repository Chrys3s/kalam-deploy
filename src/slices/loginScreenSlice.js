import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
	name: 'loginSlice',
	initialState: {
		loginScreen: false,
	},
	reducers: {
		displayTrue: (state, action) => {
			state.loginScreen = action.payload;
		},
		displayFalse: (state, action) => {
			state.loginScreen = action.payload;
		},
	},
});

export default loginSlice;
