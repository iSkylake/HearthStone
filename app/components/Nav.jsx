const React = require('react');
const {Link} = require('react-router-dom');

const Nav = props =>{
	return(
		<nav>
			<ul>
				<li><p>HearthStone</p></li>
				<li><Link to='/'>Search</Link></li>
				<li><Link to='random'>Random</Link></li>
			</ul>
		</nav>
	);
};

module.exports = Nav;