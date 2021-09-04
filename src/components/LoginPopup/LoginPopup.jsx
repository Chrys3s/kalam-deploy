import React from 'react';
import './LoginPopup.css';
import { useDispatch } from 'react-redux';
import loginSlice from '../../slices/loginScreenSlice';
import { FaTimes } from 'react-icons/fa';

const LoginPopup = () => {
	const dispatch = useDispatch();
	const closePopup = () => {
		dispatch(loginSlice.actions.displayFalse(false));
	};

	return (
		<main className="popup">
			<main className="popup-inner">
				<button
					className="flex items-end close-btn"
					onClick={closePopup}
				>
					<FaTimes />
				</button>
				<main className="bg-yellow-200 m-2 p-2">
					<main>Email</main>
					<input
						type="email"
						className="border py-2 px-3 text-grey-darkset"
					/>
				</main>
				<main className="bg-yellow-500 m-2 p-2">
					<h2>Password</h2>
					<input type="password" />
				</main>
				<main className="m-2 bg-yellow-700 p-2">
					<button className="bg-white m-2">Sign In</button>
				</main>
			</main>
		</main>
	);
};

export default LoginPopup;
