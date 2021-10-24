import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaComment, FaThumbsUp } from 'react-icons/fa';

const AllBlogs = props => {
	const numberOfLikes = props.data.likes.length;
	const authorDetails = props.data.author;
	const blogTitle = props.data.blogTitle;
	const comments = props.data.comments;
	const content = props.data.content;
	const dateCreated = props.data.dateCreated;
	const imgUrl = props.data.imgUrl;
	const lastModified = props.data.lastModified;
	const tags = props.data.tags;
	const views = props.data['views'];
	const uniqueId = props.data['_id'];
	return (
		<main
			className="m-4 bg-yellow-900 py-4 px-2"
			style={{ minWidth: '500px', width: '1000px', height: '200px' }}
		>
			<Link to={`/blogs/${uniqueId}`}>
				<main className="flex flex-col place-content-between">
					<main className="flex  justify-between bg-yellow-700">
						<main className="bg-yellow-600 w-10 h-10 rounded-3xl flex justify-center items-center mx-2">
							{/* <img src={imgUrl} /> */}
							img
						</main>
						<h2 className="flex justify-center items-center mx-2">
							{blogTitle}
						</h2>
					</main>
					<main className="bg-yellow-500 my-2">
						{content.length > 25
							? `${content.slice(0, 25)}...`
							: `${content}`}
						<h2 className="flex justify-end">
							{authorDetails.authorName}
						</h2>
					</main>
					<main className="bg-yellow-200 flex justify-between">
						<main>
							{tags.map(tag => {
								return (
									<span
										key={Date.now().toString() + tag}
										className="bg-yellow-400 p-2"
									>
										{tag}
									</span>
								);
							})}
						</main>
						<main className="flex justify-between w-32">
							<p className="flex justify-between w-14 mr-2">
								<FaEye />
								{views}
							</p>
							<p className="flex justify-between w-14 mr-2">
								<FaThumbsUp />
								{numberOfLikes}
							</p>
							<p className="flex justify-between w-14 mr-2">
								<FaComment />
								{comments.length}
							</p>
						</main>
					</main>
				</main>
			</Link>
		</main>
	);
};

export default AllBlogs;
