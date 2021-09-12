import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './Landing/LandingPage';
import BlogPage from './Blogs/BlogPage';
import PracticePage from './Practice/PracticePage';
import Navbar from './Navbar/Navbar';
import NoMatch from './404/NoMatch';
import AboutPage from './About/AboutPage';
import LoginPopup from './LoginPopup/LoginPopup';
import Deletepopup from './DeletePopup/Deletepopup';
import useLocalStorage from '../hooks/useLocalStorage';

const App = () => {
	const [darkMode, setDarkMode] = useLocalStorage('darkmode', false);

	useEffect(() => {
		document.title = 'कलम 🖋';
	}, []);

	const utility = useSelector(state => state.utilitySlice);

	return (
		<Router>
			<main className={darkMode ? 'dark' : ''}>
				<Navbar onClick={setDarkMode} val={darkMode} />
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
