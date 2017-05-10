const React = require('react');
const createReactClass = require('create-react-class');
const SearchForm = require('SearchForm')
const CardDisplay = require('CardDisplay');
const HearthstoneApiRequest = require('HearthstoneAPI');

const Search = createReactClass({
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

	handleSearch: function(cardName){
		// this.setState({
		// 	card: card
		// });
		var that = this;
		HearthstoneApiRequest.getCard(cardName).then(function(card){
			that.setState({
				card: card
			});
		}, function(err){
			alert(err);		
		});
	},

	render: function(){
		let card = this.state.card;
		return(
			<div className="search-container">
				<h1>Search Card</h1>
				<CardDisplay card={card}/>
				<SearchForm onHandleSearch={this.handleSearch}/>
			</div>
		);
	}
});

module.exports = Search;