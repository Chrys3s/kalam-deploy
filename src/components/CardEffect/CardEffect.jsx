import React from 'react';
import './CardEffect.css';
import av from '../../assets/images/avatar.png';

const CardEffect = () => {
	return (
		<main className="card-body">
			<section className="card-list">
				<article className="card">
					<header className="card-header">
						<p>{Date.now()}</p>
						<h2>Blogs</h2>
					</header>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Exercitationem, nam dignissimos quo perspiciatis ab
						similique in mollitia rerum illum commodi veniam debitis
						eius modi assumenda error consequatur fugit sapiente
						libero?
					</p>
					<div className="card-author">
						<a className="author-avatar" href="#">
							<img src={av} />
						</a>
						<svg className="half-circle" viewBox="0 0 106 57">
							<path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
						</svg>
						<div className="author-name">
							<div className="author-name-prefix">Author</div>
							Gaurav Goyal
						</div>
					</div>
					<div className="tags">
						<a href="#">html</a>
						<a href="#">css</a>
						<a href="#">web-dev</a>
					</div>
				</article>

				<article className="card">
					<header className="card-header">
						<p>{Date.now()}</p>
						<h2>Practice</h2>
					</header>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Exercitationem, nam dignissimos quo perspiciatis ab
						similique in mollitia rerum illum commodi veniam debitis
						eius modi assumenda error consequatur fugit sapiente
						libero?
					</p>
					<div className="card-author">
						<a className="author-avatar" href="#">
							<img src={av} />
						</a>
						<svg className="half-circle" viewBox="0 0 106 57">
							<path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
						</svg>
						<div className="author-name">
							<div className="author-name-prefix">Author</div>
							Gaurav Goyal
						</div>
					</div>
					<div className="tags">
						<a href="#">html</a>
						<a href="#">css</a>
						<a href="#">web-dev</a>
					</div>
				</article>

				{/* <article className="card">
					<header className="card-header">
						<p>May 25th 2020</p>
						<h2>Card tricks are fun.</h2>
					</header>
					<div className="card-author">
						<a className="author-avatar" href="#">
							<img src={av} />
						</a>
						<svg className="half-circle" viewBox="0 0 106 57">
							<path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
						</svg>
						<div className="author-name">
							<div className="author-name-prefix">Author</div>
							Gaurav Goyal
						</div>
					</div>
					<div className="tags">
						<a href="#">html</a>
						<a href="#">css</a>
						<a href="#">web-dev</a>
					</div>
				</article> */}
			</section>
		</main>
	);
};

export default CardEffect;
