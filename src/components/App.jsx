import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './Landing/LandingPage';
import BlogPage from './Blogs/BlogPage';
import PracticePage from './Practice/PracticePage';
import Navbar from './Navbar/Navbar';
import NoMatch from './404/NoMatch';
import AboutPage from './About/AboutPage';
import LoginPopup from './LoginPopup/LoginPopup';
import Deletepopup from './DeletePopup/Deletepopup';
import utilitySlice from '../slices/utilitySlice';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		document.title = 'कलम 🖋';
		// const setDarkMode = async () => {
		// 	const modePref = await localStorage.getItem('kalam-darkMode');
		// 	console.log(modePref);
		// 	dispatch(utilitySlice.actions.setDarkMode(modePref));
		// };
		// setDarkMode();
	}, []);

	const utility = useSelector(state => state.utilitySlice);

	return (
		<Router>
			<main className={utility.darkMode ? 'dark' : ''}>
				<Navbar />
				{utility.loginScreen && <LoginPopup />}
				{utility.deleteScreenPopup && <Deletepopup />}
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
