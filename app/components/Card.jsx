const React = require('react');
const createReactClass = require('create-react-class');
const CardForm = require('CardForm')
const CardDisplay = require('CardDisplay');

const Card = createReactClass({
	getDefaultProps: function(){
		return{
			card: "https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/1/1a/Card_back-Classic.png?version=81f089f507b8a300c71d9846fe1bb2d7"
		}
	},

	getInitialState: function(){
		return{
			card: this.props.card
		}
	},

	handleSearch: function(card){
		this.setState({
			card: card
		});
	},

	render: function(){
		let card = this.state.card;
		return(
			<div>
				<h1>Card</h1>
				<CardDisplay card={card}/>
				<CardForm onHandleSearch={this.handleSearch}/>
			</div>
		);
	}
});

module.exports = Card;