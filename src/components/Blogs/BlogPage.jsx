import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import blogDataSlice from '../../slices/blogDataSlice';
import utilitySlice from '../../slices/utilitySlice';
import { useSelector } from 'react-redux';
import AllBlogs from '../AllBlogs/AllBlogs';
import LoadingEffect from '../AllBlogs/LoadingEffect';
import { sleepInMilliseconds } from '../../helpers/sleepInMilliseconds';
import './BlogPage.css';

const BlogPage = () => {
	const [flag, setFlag] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(blogDataSlice.actions.resetAllBlogs());
		dispatch(utilitySlice.actions.setDisplayBlogs(false));
		document.title = 'कलम 🖋 - Blogs';
		const fetchData = async () => {
			const res = await axios.request({
				timeout: 20000,
				method: 'get',
				url: `${process.env.REACT_APP_API_URL}/v1/blogs/`,
			});
			dispatch(blogDataSlice.actions.storeAllBlogs(res.data.data));
			await sleepInMilliseconds(1000);
			dispatch(utilitySlice.actions.setDisplayBlogs(true));
		};
		fetchData();
	}, [flag]);

	const blogDataFetched = useSelector(state => state.blogDataSlice.blogsData);
	const isDisplayBlogs = useSelector(
		state => state.utilitySlice.displayBlogs
	);
	const userInfo = useSelector(state => state.userInfo);

	return (
		<main>
			<main className="blog-landing flex justify-center items-center h-80 w-screen">
				<h1 className="dark:text-white">कलम 🖋 - Blogs</h1>
			</main>
			<main className="flex justify-end">
				{userInfo.userInfo.isAdmin && (
					<button className="mr-2 p-2">Add</button>
				)}
				<button
					className="mr-2 p-2"
					onClick={() => {
						setFlag(!flag);
					}}
				>
					Refresh
				</button>
			</main>
			<main className="flex flex-col items-center p-6 -mt-24">
				{isDisplayBlogs ? (
					blogDataFetched.map(curr => {
						return <AllBlogs key={curr._id} data={curr} />;
					})
				) : (
					<LoadingEffect />
				)}
			</main>
		</main>
	);
};

export default BlogPage;
