const React = require('react');
const createReactClass = require('create-react-class');
const CardForm = require('CardForm');

const Card = createReactClass({
	render: function(){
		return(
			<div>
				<h1>Card</h1>
				<CardForm/>
			</div>
		);
	}
});

module.exports = Card;