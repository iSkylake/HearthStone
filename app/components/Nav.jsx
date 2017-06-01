import React from 'react';
import {Link} from 'react-router-dom';

const Nav = props =>{
	return(
		<nav>
			<ul>
				<li><p>HearthStone</p></li>
				<li><Link to='/'>Search</Link></li>
				<li><Link to='/random'>Random</Link></li>
				<li><Link to='/set'>Set</Link></li>
			</ul>
		</nav>
	);
};

export default Nav;