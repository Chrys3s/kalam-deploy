import React from 'react';

const LoadingEffect = () => {
	return (
		<main
			className="m-4 bg-yellow-900 py-4 px-2 animate-pulse"
			style={{ minWidth: '500px', width: '1000px', height: '200px' }}
		>
			<main className="flex flex-col place-content-between">
				<main className="flex  justify-between bg-yellow-700">
					<main className="bg-yellow-600 w-10 h-10 rounded-3xl flex justify-center items-center mx-2">
						{/* <img src={imgUrl} /> */}
						img
					</main>
					<h2 className="flex justify-center items-center mx-2">
						blogTitle
					</h2>
				</main>
				<main className="bg-yellow-500 my-2">
					{/* {content.length > 25
                ? `${content.slice(0, 25)}...`
                : `${content}`} */}
					content
					<h2 className="flex justify-end">
						authorDetails.authorName
					</h2>
				</main>
				<main className="bg-yellow-200 flex justify-between">
					<main>
						{/* {tags.map(tag => {
                    return (
                        <span className="bg-yellow-400 p-2">{tag}</span>
                    );
                })} */}
					</main>
					<main className="flex justify-between w-32">
						<p className="flex justify-between w-14 mr-2">
							{/* <FaEye /> */}
							views
						</p>
						<p className="flex justify-between w-14 mr-2">
							{/* <FaThumbsUp /> */}
							numberOfLikes
						</p>
						<p className="flex justify-between w-14 mr-2">
							{/* <FaComment /> */}
							comments.length
						</p>
					</main>
				</main>
			</main>
		</main>
	);
};

export default LoadingEffect;
