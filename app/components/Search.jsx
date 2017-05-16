import React from 'react';
import createReactClass from 'create-react-class';
import SearchForm from 'SearchForm';
import CardDisplay from 'CardDisplay';
import HearthstoneApiRequest from 'HearthstoneAPI';

const Search = createReactClass({
	getDefaultProps: function(){
		return{
			card: "http://wow.zamimg.com/images/hearthstone/backs/original/Card_Back_Default.png"
		}
	},

	getInitialState: function(){
		return{
			isLoading: false,
			card: this.props.card
		}
	},

	handleSearch: function(cardName){
		// this.setState({
		// 	card: card
		// });
		let that = this;

		this.setState({
			isLoading: true
		});

		HearthstoneApiRequest.getCard(cardName).then(function(card){
			that.setState({
				card: card,
				isLoading: false
			});
		}, function(err){
			that.setState({
				isLoading: false
			});
			alert(err);		
		});
	},

	render: function(){
		let card = this.state.card;
		let isLoading = this.state.isLoading;
		let loadingGif = "";

		function renderCard(){
			if(isLoading){
				loadingGif = "loading-on";
				console.log(loadingGif);
			} else {
				loadingGif = "loading-off"
			}
			return <CardDisplay card={card} loadingGif={loadingGif}/>
		}

		return(
			<div className="search-container">
				<h1>Search Card</h1>
				{/*<CardDisplay card={card}/>*/}
				{renderCard()}
				<SearchForm onHandleSearch={this.handleSearch}/>
			</div>
		);
	}
});

export default Search;