const React = require('react');
const {Link} = require('react-router-dom');

const Nav = props =>{
	return(
		<nav>
			<ul>
				<li><Link to='/'>HearthStone</Link></li>
				<li><Link to='/'>Get Card</Link></li>
				<li><Link to='random'>Random Card</Link></li>
			</ul>
		</nav>
	);
};

module.exports = Nav;