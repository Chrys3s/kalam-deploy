import React from 'react';
import { useSelector } from 'react-redux';

const DisplayUser = () => {
	const { user } = useSelector(state => state.user);

	return (
		<div>
			<hr />
			<h1>{user}</h1>
			<hr />
		</div>
	);
};

export default DisplayUser;
