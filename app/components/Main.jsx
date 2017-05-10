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
			<div className="main-container">
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/card' component={Card}/>
					<Route path='/random' component={Random}/>
				</Switch>
			</div>
		</div>
	);	
}

module.exports = Main;