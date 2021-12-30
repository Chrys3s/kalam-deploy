import React, { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useDispatch, useSelector } from 'react-redux';
import utilitySlice from '../../slices/utilitySlice';
import axios from 'axios';
import ErrorBar from '../Errorbar/ErrorBar';
import { storage } from '../../firebaseConfig/config';

const CreateBlog = () => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector(state => state.userInfo);

	const [title, setTitle] = useLocalStorage('title-uid', '');
	const [tags, setTags] = useLocalStorage('tags-uid');
	const [content, setContent] = useLocalStorage('content-uid', '');
	const [imgSrc, setImgSrc] = useState('');
	const [isImage, setIsImage] = useState(false);
	const [image, setImage] = useState(null);

	const uploadPostToBackend = async () => {
		const postDataToBackend = async () => {
			if (!/^[\s\w]*$/gm.test(title)) {
				dispatch(
					utilitySlice.actions.setErrorDetails(
						'Title can only contain alpha-numeric characters.'
					)
				);
				dispatch(utilitySlice.actions.showError(true));
				return;
			}

			const tagList = tags.split(',');

			for (let tag in tagList) {
				if (!/^[\w\S]*$/gm.test(tagList[tag])) {
					dispatch(
						utilitySlice.actions.setErrorDetails(
							'A tag can only contain alphabets.'
						)
					);
					dispatch(utilitySlice.actions.showError(true));
					return;
				}
			}

			const requestBody = {
				title: title,
				content: content,
				tags: tagList,
				authorDetails: {
					authorName: userInfo.userName,
					authorEmail: userInfo.userEmail,
					authodId: userInfo.uuid,
				},
			};

			try {
				const response = await axios.post(
					`${process.env.REACT_APP_API_URL}/v1/blogs/`,
					requestBody
				);
				await navigator.clipboard.writeText(
					`http://localhost:3000/#/blogs/${response.data.data._id}`
				);
				dispatch(
					utilitySlice.actions.setErrorDetails(
						'Blog URL has been copied to clipboard.'
					)
				);
				dispatch(utilitySlice.actions.showError(true));
				dispatch(utilitySlice.actions.setIsNotError(true));
				localStorage.removeItem('kalam-saved-data-title-uid');
				localStorage.removeItem('kalam-saved-data-tags-uid');
				localStorage.removeItem('kalam-saved-data-content-uid');
				setTags('');
				setTitle('');
				setContent('');
				console.log('Reached here');
			} catch (e) {
				dispatch(utilitySlice.actions.setErrorDetails(e));
				dispatch(utilitySlice.actions.showError(true));
			}
		};
		await postDataToBackend();
	};

	// const handleUploadedImage = (event) => {
	//   const file = event.files[0];
	//   const reader = new FileReader();
	//   reader.onload = function(e){
	//     setImgSrc(e.target.result)
	//     setIsImage(true)
	//   }
	//   reader.readAsDataURL(file)
	// }

	const handleUploadedImage = e => {
		// console.log(e.target)
		if (e.target.files[0]) {
			console.log(e.target.files[0]);
      const l = e.target.files[0];
      // console.log('LLLLL', l)
			setImage(l);
		}
    // // while(!image){
    //   console.log(image)
    // // }
	};

	const uploadImgFirebase = event => {
		const uploadTask = storage
			.ref(`images/${image.name}`)
			.put(image)
			.on(
				'state_change',
				snapshot => {
					console.log(snapshot);
				},
				error => {
					console.log(error);
				},
				() => {
					storage
						.ref('images')
						.child(image.name)
						.getDownloadURL()
						.then(url => {
							console.log(url);
						});
				}
			);
	};

	const error = useSelector(state => state.utilitySlice.showError);

	return (
		<div className="p-4">
			{error ? <ErrorBar /> : <></>}
			<div className="flex justify-start m-4">
				<button className="bg-blue-100 px-6 rounded-sm py-2">
					Back
				</button>
			</div>
			<form className="m-4" onSubmit={uploadImgFirebase}>
				<div className="">
					<input
						placeholder="Title"
						className="appearance-none bg-transparent border-b text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none w-2/3"
						type="text"
						required={true}
						onChange={e => setTitle(e.target.value)}
						value={title}
					/>
					<input
						type="file"
						className="absolute m-0 p-0 outline-none w-1/3 bg-yellow-100"
						placeholder="+"
						accept={'image/*'}
						onChange={handleUploadedImage}
					/>
				</div>
				<div className="mt-4">
					<input
						placeholder="Tags (Comma Separated)"
						className="appearance-none bg-transparent border text-gray-700 mr-3 py-4 px-2 leading-tight focus:outline-none w-2/3"
						type="text"
						required={true}
						onChange={e => setTags(e.target.value)}
						value={tags}
					/>
				</div>
				<div className="mt-4 ml-1">
					<div className="flex justify-end">
						{content.split(' ').length} words
					</div>
					<textarea
						rows="20"
						cols="120"
						className="p-2 outline-black"
						onChange={e => setContent(e.target.value)}
						value={content}
					/>
				</div>
				<div className="flex justify-end mr-4">
					<button
						className="px-6 py-2 bg-blue-100 rounded-sm"
						type="submit"
					>
						Submit
					</button>
				</div>
			</form>
			{isImage && <img src={imgSrc} alt={'source'} />}
		</div>
	);
};

export default CreateBlog;
