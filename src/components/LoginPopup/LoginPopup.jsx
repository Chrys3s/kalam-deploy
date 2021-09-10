import React, { useState } from 'react';
import './LoginPopup.css';
import { useDispatch, useSelector } from 'react-redux';
import utilitySlice from '../../slices/utilitySlice';
import userSlice from '../../slices/userSlice';
import { FaTimes } from 'react-icons/fa';
import { auth } from '../../firebaseConfig/config';
import firebaseDB from '../../firebaseConfig/config';
import ErrorBar from '../Errorbar/ErrorBar';

const LoginPopup = () => {
	const dispatch = useDispatch();

	const [flag, setFlag] = useState(false);
	const [email, setEmail] = useState('');
	const [pwd, setPwd] = useState('');
	const [name, setName] = useState('');
	const [cpwd, setCpwd] = useState('');

	const closePopup = () => {
		dispatch(utilitySlice.actions.displayPopup(false));
	};

	const signUpAction = () => {
		if (!(name && email && pwd && cpwd)) {
			console.log('Required Fields Empty....');
			return;
		}

		if (pwd !== cpwd) {
			console.log("Passwords don't match....");
			return;
		}

		auth.createUserWithEmailAndPassword(email, cpwd)
			.then(user => {
				firebaseDB
					.collection(process.env.REACT_APP_DB_DEV)
					.add({ name: name, email: email, uid: user.user.uid });
				dispatch(
					userSlice.actions.login({
						isLoggedIn: true,
						isAdmin: false,
						userEmail: user.user.email,
						uuid: user.user.uid,
						userName: name,
					})
				);
				dispatch(utilitySlice.actions.displayPopup(false));
			})
			.catch(err => {
				if (err.code === 'auth/email-already-in-use') {
					dispatch(
						utilitySlice.actions.setErrorDetails(
							'Account already exists'
						)
					);
					dispatch(utilitySlice.actions.showError(true));
				}
			});
	};

	const signInAction = () => {
		auth.signInWithEmailAndPassword(email, pwd)
			.then(user => {
				firebaseDB
					.collection(process.env.REACT_APP_DB_DEV)
					.get()
					.then(query => {
						query.forEach(ele => {
							const userData = ele.data();
							console.log(userData);
							if (
								userData.uid === user.user.uid &&
								userData.email === user.user.email
							) {
								dispatch(
									userSlice.actions.login({
										isLoggedIn: true,
										userEmail: user.user.email,
										uuid: user.user.uid,
										userName: userData.name,
									})
								);
								dispatch(
									utilitySlice.actions.displayPopup(false)
								);
							}
						});
					});
			})
			.catch(err => {
				if (err.code === 'auth/wrong-password') {
					dispatch(
						utilitySlice.actions.setErrorDetails('Wrong Password')
					);
					dispatch(utilitySlice.actions.showError(true));
				}

				if (err.code === 'auth/invalid-email') {
					dispatch(
						utilitySlice.actions.setErrorDetails('Invalid Email')
					);
					dispatch(utilitySlice.actions.showError(true));
				}

				if (err.code === 'auth/user-not-found') {
					dispatch(
						utilitySlice.actions.setErrorDetails(
							"Account doesn't exist"
						)
					);
					dispatch(utilitySlice.actions.showError(true));
				}
			});
	};

	const error = useSelector(state => state.utilitySlice.showError);

	return (
		<main className="popup">
			<main className="popup-inner">
				{error ? <ErrorBar /> : <></>}
				<button
					className="flex items-end close-btn"
					onClick={closePopup}
				>
					<FaTimes />
				</button>
				{flag ? (
					<main className="bg-yellow-200 m-2 p-2">
						<main>Name</main>
						<input
							type="text"
							className="border py-2 px-3 text-grey-darkset"
							onChange={e => {
								setName(e.target.value);
							}}
							value={name}
							required
						/>
					</main>
				) : (
					<></>
				)}
				<main className="bg-yellow-200 m-2 p-2">
					<main>Email</main>
					<input
						type="email"
						className="border py-2 px-3 text-grey-darkset"
						onChange={e => {
							setEmail(e.target.value);
						}}
						value={email}
						required
					/>
				</main>
				<main className="bg-yellow-500 m-2 p-2">
					<h2>Password</h2>
					<input
						type="password"
						className="border py-2 px-3 text-grey-darkset"
						onChange={e => {
							setPwd(e.target.value);
						}}
						value={pwd}
						required
					/>
				</main>
				{flag ? (
					<>
						<main className="bg-yellow-500 m-2 p-2">
							<h2>Confirm Password</h2>
							<input
								type="password"
								className="border py-2 px-3 text-grey-darkset"
								onChange={e => {
									setCpwd(e.target.value);
								}}
								value={cpwd}
								required
							/>
						</main>
						<main className="m-2 bg-yellow-700 p-2">
							<button
								className="bg-white m-2"
								onClick={signUpAction}
							>
								Sign Up
							</button>
						</main>
						<main className="m-2">
							<h4 className="flex justify-center items-center">
								Already have an account?&nbsp;
								<span
									onClick={() => {
										setFlag(false);
										setEmail('');
										setPwd('');
										setCpwd('');
										setName('');
									}}
									className="cursor-pointer text-blue-700 underline"
								>
									Sign In
								</span>
							</h4>
						</main>
					</>
				) : (
					<>
						<main className="m-2 bg-yellow-700 p-2">
							<button
								className="bg-white m-2"
								onClick={signInAction}
							>
								Sign In
							</button>
						</main>
						<main className="m-2">
							<h4 className="flex justify-center items-center">
								Don't have an account?&nbsp;
								<span
									onClick={() => {
										setFlag(true);
										setEmail('');
										setPwd('');
										setCpwd('');
										setName('');
									}}
									className="cursor-pointer text-blue-700 underline"
								>
									Sign Up
								</span>
							</h4>
						</main>
					</>
				)}
			</main>
		</main>
	);
};

export default LoginPopup;
