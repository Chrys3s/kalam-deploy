import React from 'react';
import './DropDown.css';
import userSlice from '../../slices/userSlice';
import utilitySlice from '../../slices/utilitySlice';
import { auth } from '../../firebaseConfig/config';
import { useDispatch } from 'react-redux';

const DropDown = ({ show }) => {
	const dispatch = useDispatch();

	const logOutAction = () => {
		auth.signOut();
		dispatch(utilitySlice.actions.displayDeleteAccountButton(false));
		dispatch(userSlice.actions.logout());
	};

	const displayDeletePopup = () => {
		dispatch(utilitySlice.actions.displayDeleteScreenPopup(true));
	};

	return (
		<>
			{show ? (
				<main className="drop-popup">
					<main className="drop-popup-inner flex items-center flex-col fade-in animated-fade">
						<button
							className="p-3 m-3 w-56 bg-customN-light dark:bg-customN-dark rounded-lg"
							onClick={logOutAction}
						>
							Logout
						</button>
						<button
							className="p-3 mt-1 w-56 bg-customN-light dark:bg-customN-dark rounded-lg"
							onClick={displayDeletePopup}
						>
							Delete Account
						</button>
					</main>
				</main>
			) : (
				<></>
			)}
		</>
	);
};

export default DropDown;
