import React, { useEffect, useState } from 'react';
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

	useEffect(() => {
		dispatch(utilitySlice.actions.showError(false));
		dispatch(utilitySlice.actions.setErrorDetails(null));
	}, []);

	const [flag, setFlag] = useState(false);
	const [email, setEmail] = useState('');
	const [pwd, setPwd] = useState('');
	const [name, setName] = useState('');
	const [cpwd, setCpwd] = useState('');

	const validateEmail = () => {
		setEmail(email.toLowerCase());

		if (
			!/^[a-z0-9_-]*\.*[a-z0-9_-]*@[a-z]*\.[a-z]*\.*[a-z]*$/gm.test(email)
		) {
			dispatch(utilitySlice.actions.setErrorDetails('Invalid Email'));
			dispatch(utilitySlice.actions.showError(true));
			return true;
		}

		const breakEmail = email.split('@');

		if (breakEmail[1] === 'kalam.admin') {
			dispatch(utilitySlice.actions.setErrorDetails('Invalid Email'));
			dispatch(utilitySlice.actions.showError(true));
			return true;
		}

		return false;
	};

	const closePopup = () => {
		dispatch(utilitySlice.actions.displayPopup(false));
	};

	const dontHaveAnAccount = () => {
		setFlag(true);
		setEmail('');
		setPwd('');
		setCpwd('');
		setName('');
		dispatch(utilitySlice.actions.showError(false));
		dispatch(utilitySlice.actions.setErrorDetails(null));
	};

	const alreadyHaveAnAccount = () => {
		setFlag(false);
		setEmail('');
		setPwd('');
		setCpwd('');
		setName('');
		dispatch(utilitySlice.actions.showError(false));
		dispatch(utilitySlice.actions.setErrorDetails(null));
	};

	const forgetPassword = () => {
		if (validateEmail()) {
			return;
		}

		auth.sendPasswordResetEmail(email)
			.then(() => {
				dispatch(
					utilitySlice.actions.setErrorDetails(
						`An email has been sent to ${email}`
					)
				);
				dispatch(utilitySlice.actions.showError(true));
			})
			.catch(err => {
				console.log(err);
			});
	};

	const signUpAction = () => {
		if (validateEmail()) {
			return;
		}

		if (!(name && email && pwd && cpwd)) {
			console.log('Required Fields Empty....');
			return;
		}

		if (pwd !== cpwd) {
			console.log("Passwords don't match....");
			return;
		}

		setEmail(email.toLowerCase());

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
				dispatch(utilitySlice.actions.displayDeleteAccountButton(true));
			})
			.catch(err => {
				if (err.code === 'auth/invalid-email') {
					dispatch(
						utilitySlice.actions.setErrorDetails('Invalid Email')
					);
					dispatch(utilitySlice.actions.showError(true));
					return;
				}

				if (err.code === 'auth/email-already-in-use') {
					dispatch(
						utilitySlice.actions.setErrorDetails(
							'Account already exists'
						)
					);
					dispatch(utilitySlice.actions.showError(true));
					return;
				}
			});
	};

	const signInAction = () => {
		setEmail(email.toLowerCase());
		auth.signInWithEmailAndPassword(email, pwd)
			.then(async user => {
				const dbRef = firebaseDB.collection(
					process.env.REACT_APP_DB_DEV
				);

				const snapshot = await dbRef
					.where('uid', '==', user.user.uid)
					.get();

				if (snapshot.empty) {
					console.log('No match found....');
					return;
				}

				snapshot.forEach(doc => {
					const userData = doc.data();
					if (
						userData.uid === user.user.uid &&
						userData.email === user.user.email
					) {
						dispatch(
							userSlice.actions.login({
								isLoggedIn: true,
								userEmail: user.user.email,
								uuid: user.user.uid,
								idAdmin: userData.isAdmin
									? userData.isAdmin
									: false,
								userName: userData.name,
							})
						);
						dispatch(utilitySlice.actions.displayPopup(false));
						dispatch(
							utilitySlice.actions.displayDeleteAccountButton(
								true
							)
						);
						return;
					}
				});
			})
			.catch(err => {
				if (err.code === 'auth/wrong-password') {
					dispatch(
						utilitySlice.actions.setErrorDetails('Wrong Password')
					);
					dispatch(utilitySlice.actions.showError(true));
					return;
				}

				if (err.code === 'auth/invalid-email') {
					dispatch(
						utilitySlice.actions.setErrorDetails('Invalid Email')
					);
					dispatch(utilitySlice.actions.showError(true));
					return;
				}

				if (err.code === 'auth/user-not-found') {
					dispatch(
						utilitySlice.actions.setErrorDetails(
							"Account doesn't exist"
						)
					);
					dispatch(utilitySlice.actions.showError(true));
					return;
				}
			});
	};

	const error = useSelector(state => state.utilitySlice.showError);

	return (
		<main className="popup z-20">
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
									onClick={alreadyHaveAnAccount}
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
							<h4
								className="flex justify-center items-center cursor-pointer text-blue-700 underline"
								onClick={forgetPassword}
							>
								Forgot Password?
							</h4>
						</main>
						<main className="m-2">
							<h4 className="flex justify-center items-center">
								Don't have an account?&nbsp;
								<span
									onClick={dontHaveAnAccount}
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
