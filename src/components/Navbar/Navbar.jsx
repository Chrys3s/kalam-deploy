import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import loginSlice from '../../slices/loginScreenSlice';
import userSlice from '../../slices/userSlice';

const Navbar = () => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector(state => state.userInfo);

	const showPopup = () => {
		dispatch(loginSlice.actions.displayTrue(true));
	};

	const logOutAction = () => {
		dispatch(userSlice.actions.logout());
	};

	return (
		<section className="flex justify-between bg-red-200 h-14 shadow-xl">
			<section className="flex justify-center align-center">
				<span className="w-20 pt-3 pl-10">
					<Link to="/">&nbsp;&nbsp;क&nbsp;&nbsp;</Link>
				</span>
			</section>
			<section className="flex justify-around h-14 w-60">
				<button>
					<Link to="/blogs">Blogs</Link>
				</button>
				<button>
					<Link to="/practice">Practice</Link>
				</button>
				<button>
					<Link to="/about">About</Link>
				</button>
			</section>
			<section className="flex justify-around h-14 w-60">
				<span className="pt-3.5">LAMP</span>
				{!userInfo.isLoggedIn ? (
					<button onClick={showPopup}>SignIn</button>
				) : (
					<button
						className="rounded-2xl bg-red-500 h-8 w-8 items-center mt-3 text-center border-none"
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
