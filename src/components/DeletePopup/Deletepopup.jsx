import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import utilitySlice from '../../slices/utilitySlice';
import userSlice from '../../slices/userSlice';
import { FaTimes } from 'react-icons/fa';
import './Deletepopup.css';
import firebaseDB, { auth } from '../../firebaseConfig/config';
import ErrorBar from '../Errorbar/ErrorBar';

const Deletepopup = () => {
	const [email, setEmail] = useState(null);
	const [pwd, setPwd] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(utilitySlice.actions.showError(false));
		dispatch(utilitySlice.actions.setErrorDetails(null));
	}, []);

	const closePopup = () => {
		dispatch(utilitySlice.actions.displayDeleteScreenPopup(false));
	};

	const deleteAccount = () => {
		const currUser = auth.currentUser;
		auth.signInWithEmailAndPassword(email, pwd)
			.then(user => {
				if (user.user.uid === currUser.uid) {
					auth.currentUser.delete().then(async () => {
						dispatch(
							utilitySlice.actions.displayDeleteScreenPopup(false)
						);
						const dbRef = firebaseDB.collection(
							process.env.REACT_APP_DB_DEV
						);

						const snapshot = await dbRef
							.where('uid', '==', user.user.uid)
							.get();

						let docId;

						snapshot.forEach(doc => {
							docId = doc.id;
							return;
						});

						await firebaseDB
							.collection(process.env.REACT_APP_DB_DEV)
							.doc(docId)
							.delete();

						auth.signOut();
						dispatch(
							utilitySlice.actions.displayDeleteAccountButton(
								false
							)
						);
						dispatch(userSlice.actions.logout());
					});
				} else {
					dispatch(
						utilitySlice.actions.setErrorDetails(
							'Please Enter you email'
						)
					);
					dispatch(utilitySlice.actions.showError(true));
				}
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
		<>
			<main className="popup">
				<main className="popup-inner">
					{error ? <ErrorBar /> : <></>}
					<button
						className="flex items-end close-btn"
						onClick={closePopup}
					>
						<FaTimes />
					</button>
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
					<main className="m-2 bg-yellow-700 p-2">
						<button
							className="bg-white m-2"
							onDoubleClick={deleteAccount}
						>
							Delete Account
						</button>
					</main>
				</main>
			</main>
		</>
	);
};

export default Deletepopup;
