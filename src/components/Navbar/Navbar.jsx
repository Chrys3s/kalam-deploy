import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<section className="flex justify-between bg-red-200 h-14 shadow-xl">
			<section className="flex justify-center align-center">
				<span className="w-20 pt-3 pl-10">
					<Link to="/">&nbsp;&nbsp;क&nbsp;&nbsp;</Link>
				</span>
			</section>
			<section className="flex justify-around h-14 w-60">
				<button>
					<Link to="/blogs">Blogs</Link>
				</button>
				<button>
					<Link to="/practice">Practice</Link>
				</button>
				<button>
					<Link to="/about">About</Link>
				</button>
			</section>
			<section className="flex justify-around h-14 w-60">
				<span className="pt-3.5">LAMP</span>
				<button>SignIn</button>
			</section>
		</section>
	);
};

export default Navbar;
