import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<ul className='nav'>
			<li className='nav-item'>
				<Link to='/' className='nav-link'>
					Home
				</Link>
			</li>
			<li className='nav-item'>
				<Link to='/users' className='nav-link'>
					Documents
				</Link>
			</li>
		</ul>
	);
}
