import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import utilitySlice from '../../slices/utilitySlice';
import userSlice from '../../slices/userSlice';
import { auth } from '../../firebaseConfig/config';

const Navbar = () => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector(state => state.userInfo);
	const utility = useSelector(state => state.utilitySlice);

	const showPopup = () => {
		dispatch(utilitySlice.actions.displayPopup(true));
	};

	const logOutAction = () => {
		auth.signOut();
		dispatch(userSlice.actions.logout());
	};

	const switchMode = () => {
		dispatch(utilitySlice.actions.setDarkMode(!utility.darkMode));
		localStorage.setItem('darkMode', !utility.darkMode);
	};

	return (
		<section className="flex justify-between bg-customN-light dark:bg-customN-dark dark:text-white h-14 shadow-xl dark:shadow-2xl">
			<section className="flex justify-center items-center">
				<span className="p-2 m-1 text-3xl font-semibold">
					<Link to="/">क</Link>
				</span>
			</section>
			<section className="flex justify-around items-center">
				<button className="p-2 m-1">
					<Link to="/blogs">Blogs</Link>
				</button>
				<button className="p-2 m-1">
					<Link to="/practice">Practice</Link>
				</button>
				<button className="p-2 m-1">
					<Link to="/about">About</Link>
				</button>
			</section>
			<section className="flex justify-around h-14 w-60 items-center">
				<span className="cursor-pointer p-2 m-1" onClick={switchMode}>
					LAMP
				</span>
				{!userInfo.isLoggedIn ? (
					<button onClick={showPopup} className="p-2 m-1">
						SignIn
					</button>
				) : (
					<button
						className="rounded-2xl bg-red-500 h-8 w-8 items-center text-center border-none"
						onClick={logOutAction}
					>
						{userInfo.userName[0].toUpperCase()}
					</button>
				)}
			</section>
		</section>
	);
};

export default Navbar;
