import { createSlice } from '@reduxjs/toolkit';

export const utilitySlice = createSlice({
	name: 'utilitySlice',
	initialState: {
		loginScreen: false,
		darkMode: false,
		showError: false,
		errorMessage: null,
	},
	reducers: {
		displayPopup: (state, action) => {
			state.loginScreen = action.payload;
		},
		setDarkMode: (state, action) => {
			state.darkMode = action.payload;
		},
		showError: (state, action) => {
			state.showError = action.payload;
		},
		setErrorDetails: (state, action) => {
			state.errorMessage = action.payload;
		},
	},
});

export default utilitySlice;
