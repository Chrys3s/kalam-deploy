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

const App = () => {
	const showLogin = useSelector(state => state.loginScreen);

	useEffect(() => {
		document.title = 'कलम 🖋';
	});

	return (
		<Router>
			<main>
				<Navbar />
				{showLogin.loginScreen && <LoginPopup />}
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
