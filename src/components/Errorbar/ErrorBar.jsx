import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import utilitySlice from '../../slices/utilitySlice';

const ErrorBar = () => {
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(utilitySlice.actions.showError(false));
		dispatch(utilitySlice.actions.setErrorDetails(null));
	};

	const errorMessage = useSelector(state => state.utilitySlice.errorMessage);
	const toDisplay = useSelector(state => state.utilitySlice.showError);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (toDisplay) {
				handleClose();
			}
		}, 2500);

		return () => clearTimeout(timeout);
	}, [errorMessage]);

	return (
		<main className="bg-red-500 mt-6 p-2 backdrop-opacity-0 flex justify-center animate-pulse rounded-lg">
			{errorMessage}
		</main>
	);
};

export default ErrorBar;
