import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Nav from 'Nav';
import Home from 'Home';
import Search from 'Search';
import Random from 'Random';
import CardSet from 'CardSet';

const Main = props => {
	return(
		<div>
			<Nav/>
			<div className="main-container">
				<Switch>
					<Route exact path='/' component={Search}/>
					<Route path='/random' component={Random}/>
					<Route path='/set' component={CardSet}/>
				</Switch>
			</div>
		</div>
	);	
}

export default Main;