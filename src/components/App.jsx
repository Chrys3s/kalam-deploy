import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import userSlice from '../slices/userSlice';
import DisplayUser from './DisplayUser';
import { HashRouter as Router, Switch, Route, Page } from 'react-router-dom';
import LandingPage from './Landing/LandingPage';
import BlogPage from './Blogs/BlogPage';
import PracticePage from './Practice/PracticePage';
import Navbar from './Navbar/Navbar';
import NoMatch from './404/NoMatch';
import AboutPage from './About/AboutPage';
import axios from 'axios';

const App = () => {
	// const [msg, setMsg] = useState(null);
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		await axios
	// 			.get(
	// 				`http://localhost:1104/v1/helloworld/${
	// 					msg ? msg : 'Please Enter a Value'
	// 				}`
	// 			)
	// 			.then(result => {
	// 				dispatch(userSlice.actions.login(result.data));
	// 			});
	// 	};

	// 	fetchData();
	// }, [msg]);

	// <>
	// 	<div>
	// 		<input
	// 			type="name"
	// 			onChange={e => setMsg(e.target.value)}
	// 			className="bg-white"
	// 		/>
	// 		<DisplayUser />
	// 	</div>
	// </>

	useEffect(() => {
		document.title = 'कलम 🖋';
	});

	return (
		<Router>
			<main>
				<Navbar />
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/blogs" exact component={BlogPage} />
					<Route path="/practice" exact component={PracticePage} />
					<Route path="/about" exact component={AboutPage} />
					<Route component={NoMatch} />
				</Switch>
			</main>
		</Router>
	);
};

export default App;
