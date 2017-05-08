const React = require('react');
const {Switch, Route} = require('react-router-dom');
const Nav = require('Nav');
const Home = require('Home');
const Card = require('Card');
const Random = require('Random');

const Main = props => {
	return(
		<div>
			<Nav/>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route exact path='/card' component={Card}/>
				<Route exact path='/random' component={Random}/>
			</Switch>
		</div>
	);	
}

module.exports = Main;