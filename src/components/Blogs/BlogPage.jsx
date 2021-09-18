import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import blogDataSlice from '../../slices/blogDataSlice';
import utilitySlice from '../../slices/utilitySlice';
import { useSelector } from 'react-redux';
import AllBlogs from '../AllBlogs/AllBlogs';
import LoadingEffect from '../AllBlogs/LoadingEffect';
import { sleepInMilliseconds } from '../../helpers/sleepInMilliseconds';

const BlogPage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(blogDataSlice.actions.resetAllBlogs());
		dispatch(utilitySlice.actions.setDisplayBlogs(false));
		document.title = 'कलम 🖋 - Blogs';
		const fetchData = async () => {
			const res = await axios.request({
				method: 'get',
				url: `${process.env.REACT_APP_API_URL}/v1/blogs/`,
			});
			dispatch(blogDataSlice.actions.storeAllBlogs(res.data.data));
			await sleepInMilliseconds(2500);
			dispatch(utilitySlice.actions.setDisplayBlogs(true));
		};
		fetchData();
	}, []);

	const blogDataFetched = useSelector(state => state.blogDataSlice.blogsData);
	const isDisplayBlogs = useSelector(
		state => state.utilitySlice.displayBlogs
	);
	return (
		<main>
			<h1>कलम 🖋 - Blogs</h1>
			<main className="flex flex-col items-center p-6">
				{isDisplayBlogs ? (
					blogDataFetched.map(curr => {
						return <AllBlogs key={curr['_id']} data={curr} />;
					})
				) : (
					<LoadingEffect />
				)}
			</main>
		</main>
	);
};

export default BlogPage;
