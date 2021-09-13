import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Editor from '../Editor/Editor';
import useLocalStorage from '../../hooks/useLocalStorage';

const PracticePage = () => {
	const loggedIn = useSelector(state => state.userInfo);

	const htmlKeyName = loggedIn.userInfo.isLoggedIn
		? `html-${loggedIn.userInfo.uuid}`
		: 'html';

	const cssKeyName = loggedIn.userInfo.isLoggedIn
		? `css-${loggedIn.userInfo.uuid}`
		: 'css';

	const jsKeyName = loggedIn.userInfo.isLoggedIn
		? `js-${loggedIn.userInfo.uuid}`
		: 'js';

	const [html, setHtml] = useLocalStorage(htmlKeyName, '');
	const [css, setCss] = useLocalStorage(cssKeyName, '');
	const [js, setJs] = useLocalStorage(jsKeyName, '');

	const [srcDoc, setSrcDoc] = useState('');

	useEffect(() => {
		document.title = 'कलम 🖋 - Practice';
	}, []);

	useEffect(() => {
		let renderTime = 1000;
		if (loggedIn.userInfo.isLoggedIn) {
			renderTime = 300;
		}

		const timeout = setTimeout(() => {
			setSrcDoc(
				`<html><head><style>body{background: #fcfcfc;}</style></head><body>${html}</body><style>${css}</style><script>${js}</script></html>`
			);
		}, renderTime);

		return () => clearTimeout(timeout);
	}, [html, css, js, loggedIn.userInfo.isLoggedIn]);

	const onDemandRender = () => {
		setSrcDoc(
			`<html><head><style>body{background: #fcfcfc;}</style></head><body>${html}</body><style>${css}</style><script>${js}</script></html>`
		);
	};

	return (
		<main className="px-4 py-2 bg-practiceBg-light dark:bg-practiceBg-dark w-auto box-border">
			<main className="flex justify-between">
				<main className="dark:text-white">
					<span className="text-2xl font-semibold">कलम</span>
					<span className="text-2xl font-medium">🖋 - Practice</span>
				</main>
				<main className="flex justify-around pr-6">
					<button
						className={`m-2 mr-6 p-3 bg-yellow-200 w-20 ${
							loggedIn.userInfo.isLoggedIn
								? ''
								: 'cursor-not-allowed'
						}`}
						disabled={!loggedIn.userInfo.isLoggedIn}
						title={
							loggedIn.userInfo.isLoggedIn
								? ''
								: 'You need to sign in to save the work'
						}
					>
						Save
					</button>
					<button
						className="m-2 p-3 bg-yellow-200 w-20"
						onClick={onDemandRender}
					>
						Run
					</button>
				</main>
			</main>
			<main className="flex mt-4">
				<Editor
					language="xml"
					displayName="HTML"
					value={html}
					onChange={setHtml}
				/>
				<Editor
					language="css"
					displayName="CSS"
					value={css}
					onChange={setCss}
				/>
				<Editor
					language="js"
					displayName="JS"
					value={js}
					onChange={setJs}
				/>
			</main>
			<main>
				<iframe
					srcDoc={srcDoc}
					title="Output"
					sandbox="allow-scripts"
					frameBorder="0"
					className="w-full h-screen rounder-t-xl mt-1"
				/>
			</main>
		</main>
	);
};

export default PracticePage;
