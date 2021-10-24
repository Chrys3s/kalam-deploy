import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import CardEffect from '../CardEffect/CardEffect';
import bookGif from '../../assets/images/openBook.gif';
import './LandingPage.css';

const LandingPage = () => {
	useEffect(() => {
		document.title = 'कलम 🖋';
	}, []);

	return (
		<main>
			<main className="home-bg h-screen -mt-14 relative">
				<main className="description text-white">
					<span className="mt-14 absolute text-6xl font-medium top-20 left-32 main-text z-30">
						कलम
					</span>
					<p className="mt-14 absolute text-3xl md:text-xl font-normal top-40 left-32">
						An Interactive Educational Platform
					</p>
					<p className="mt-14 absolute text-3xl md:text-xl font-normal top-48 left-32">
						For Web Development
					</p>
				</main>
			</main>
			<CardEffect />
			{/* <main className="landing-2-img">
				<main className="flex justify-center items-center det-1 relative h-96">
					<h1 className="absolute">Blogs</h1>
				</main>
				<main className="flex justify-end det-2">
					<main className="det-3 relative">
						<h1>Practice</h1>
					</main>
				</main>
				<main className="flex justify-center items-center det-1 relative h-96">
					<h1 className="absolute">Blogs</h1>
				</main> 
			</main> */}
			{/* <main className="flex flex-row justify-evenly items-center text-black mt-20 mb-10 text-2xl">
				<main className="bg-yellow-200 some-round-shape flex justify-center items-center hover:underline hover:animate-bounce">
					<Link to="/blogs">
						<span className="text-rotate-custom">Blogs</span>
					</Link>
				</main>
				<main className="bg-yellow-200 some-round-shape flex justify-center items-center hover:underline hover:animate-bounce">
					<Link to="/blogs">
						<span className="text-rotate-custom">Practice</span>
					</Link>
				</main>
				<main className="bg-yellow-200 some-round-shape flex justify-center items-center hover:underline hover:animate-bounce">
					<Link to="/blogs">
						<span className="text-rotate-custom">About</span>
					</Link>
				</main>
			</main> */}
			<Footer />
		</main>
	);
};

export default LandingPage;
