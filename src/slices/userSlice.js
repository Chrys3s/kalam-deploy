import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
	userInfo: {
		isLoggedIn: false,
		isAdmin: false,
		userEmail: null,
		uuid: null,
		userName: null,
	},
};

export const userSlice = createSlice({
	name: 'userSlice',
	initialState: {
		userInfo: {
			isLoggedIn: false,
			isAdmin: false,
			userEmail: null,
			uuid: null,
			userName: null,
		},
	},
	reducers: {
		login: (state, action) => {
			state.userInfo = action.payload;
		},
		logout: (state, action) => {
			state.userInfo = defaultState;
		},
	},
});

export default userSlice;
