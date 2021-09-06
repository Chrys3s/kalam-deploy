import React, { useEffect } from 'react';

const LandingPage = () => {
	useEffect(() => {
		document.title = 'कलम 🖋';
	}, []);

	return <div>कलम 🖋</div>;
};

export default LandingPage;
