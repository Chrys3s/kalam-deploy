import React, { useEffect } from 'react';

const AboutPage = () => {
	useEffect(() => {
		document.title = 'कलम 🖋 - About';
	});
	return <div>About Us</div>;
};

export default AboutPage;
