import { createSlice } from '@reduxjs/toolkit';

export const utilitySlice = createSlice({
	name: 'utilitySlice',
	initialState: {
		loginScreen: false,
		darkMode: false,
	},
	reducers: {
		displayPopup: (state, action) => {
			state.loginScreen = action.payload;
		},
		setDarkMode: (state, action) => {
			state.darkMode = action.payload;
		},
	},
});

export default utilitySlice;
