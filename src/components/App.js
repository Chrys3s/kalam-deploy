import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
	const [msg, setMsg] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				`${process.env.REACT_APP_API_URL}/कलम 🖋`
			);
			setMsg(response.data);
		};

		fetchData();
	}, []);

	return <div>{msg}</div>;
};

export default App;
