const React = require('react');
const createReactClass = require('create-react-class');
const CardForm = require('CardForm')
const CardDisplay = require('CardDisplay');

const Card = createReactClass({
	render: function(){
		return(
			<div>
				<h1>Card</h1>
				<CardDisplay/>
				<CardForm/>
			</div>
		);
	}
});

module.exports = Card;