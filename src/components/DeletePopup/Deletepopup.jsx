import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import utilitySlice from '../../slices/utilitySlice';
import userSlice from '../../slices/userSlice';
import { FaTimes } from 'react-icons/fa';
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
		if (!(email && pwd)) {
			dispatch(
				utilitySlice.actions.setErrorDetails(
					'Invalid/Incomplete Details'
				)
			);
			dispatch(utilitySlice.actions.showError(true));
			return;
		}
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
			<main className="popup z-20">
				<form className="popup-inner">
					{error ? <ErrorBar /> : <></>}
					<main className="p-2">
						<h1 className="text-2xl">{'You will be missed!'}</h1>
						<button
							className="flex items-end close-btn"
							onClick={closePopup}
						>
							<FaTimes />
						</button>
					</main>
					<main className=" m-2 p-2">
						<main
							className="ml-2"
							style={{ color: '#1C538F', width: 'fit-content' }}
						>
							Email
						</main>
						<input
							type="email"
							className="border rounded-xl w-80 py-2 px-3 text-grey-darkset shadow-sm"
							onChange={e => {
								setEmail(e.target.value);
							}}
							value={email}
							required
						/>
					</main>
					<main className=" m-2 p-2">
						<main
							className="ml-2"
							style={{ color: '#1C538F', width: 'fit-content' }}
						>
							Password
						</main>
						<input
							type="password"
							className="border rounded-xl w-80 py-2 px-3 text-grey-darkset shadow-sm"
							onChange={e => {
								setPwd(e.target.value);
							}}
							value={pwd}
							required
						/>
					</main>
					<main className="m-2 p-2">
						<button
							className="bg-white p-2 rounded-lg pl-5 pr-5 m-2 w-80 shadow-lg"
							style={{ backgroundColor: '#8FD2F4' }}
							onDoubleClick={deleteAccount}
						>
							Double Click To Delete
						</button>
					</main>
				</form>
			</main>
		</>
	);
};

export default Deletepopup;
