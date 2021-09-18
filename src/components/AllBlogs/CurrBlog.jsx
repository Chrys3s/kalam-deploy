import React from 'react';

const CurrBlog = ({ match, location }) => {
	return (
		<div>
			<code>{JSON.stringify(match, null, 2)}</code>
			<code>{JSON.stringify(location, null, 2)}</code>
		</div>
	);
};

export default CurrBlog;
