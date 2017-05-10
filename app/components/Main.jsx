const React = require('react');
const {Switch, Route} = require('react-router-dom');
const Nav = require('Nav');
const Home = require('Home');
const Search = require('Search');
const Random = require('Random');

const Main = props => {
	return(
		<div>
			<Nav/>
			<div className="main-container">
				<Switch>
					<Route exact path='/' component={Search}/>
					<Route path='/random' component={Random}/>
				</Switch>
			</div>
		</div>
	);	
}

module.exports = Main;