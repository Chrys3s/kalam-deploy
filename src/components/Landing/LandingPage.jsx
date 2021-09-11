import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import utilitySlice from '../../slices/utilitySlice';

const LandingPage = () => {
	const dispatch = useDispatch();
	const utility = useSelector(state => state.utilitySlice);

	useEffect(() => {
		document.title = 'कलम 🖋';
	}, []);

	const displayDeletePopup = () => {
		dispatch(utilitySlice.actions.displayDeleteScreenPopup(true));
	};

	return (
		<main>
			<main>कलम 🖋</main>
			{utility.showDeleteOption && (
				<button
					className="bg-black text-customN-light p-3"
					onClick={displayDeletePopup}
				>
					Delete Account
				</button>
			)}
		</main>
	);
};

export default LandingPage;
