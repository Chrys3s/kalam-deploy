import React, { useEffect } from 'react';

const BlogPage = () => {
	useEffect(() => {
		document.title = 'कलम 🖋 - Blogs';
	});

	return <div>कलम 🖋 - Blogs</div>;
};

export default BlogPage;
