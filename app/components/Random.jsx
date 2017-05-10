const React = require('react');
const createReactClass = require('create-react-class');
const CardDisplay = require('CardDisplay');
const RandomForm = require('RandomForm');

const Random = createReactClass({
	getDefaultProps: function(){
		return{
			randomCard: "https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/1/1a/Card_back-Classic.png?version=81f089f507b8a300c71d9846fe1bb2d7"
		};
	},

	getInitialState: function(){
		return{
			randomCard: this.props.randomCard
		}
	},

	handleCardGen: function(generatedCard){
		this.setState({
			randomCard: generatedCard
		});
	},

	render: function(){
		let randomCard = this.state.randomCard;
		return (
			<div className="random-container">
				<h1>Random Card</h1>
				<CardDisplay card={randomCard}/>
				<RandomForm onHandleCardGen={this.handleCardGen}/>
			</div>
		);
	}
});

module.exports = Random;