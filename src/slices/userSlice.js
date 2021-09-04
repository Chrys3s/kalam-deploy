import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'userSlice',
	initialState: {
		user: null,
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state, action) => {
			state.user = null;
		},
	},
});

export default userSlice;
