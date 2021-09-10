import React from 'react';
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

	return (
		<main className="bg-red-400 backdrop-opacity-0 flex justify-between">
			{errorMessage}
			<span className="cursor-pointer" onClick={handleClose}>
				&nbsp;Close
			</span>
		</main>
	);
};

export default ErrorBar;
