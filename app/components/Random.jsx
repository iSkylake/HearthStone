import React from 'react';
import createReactClass from 'create-react-class';
import CardDisplay from 'CardDisplay';
import RandomForm from 'RandomForm';
import HearthstoneApiRequest from 'HearthstoneAPI';

const Random = createReactClass({
	getDefaultProps: function(){
		return{
			randomCard: "http://wow.zamimg.com/images/hearthstone/backs/original/Card_Back_Default.png"
		};
	},

	getInitialState: function(){
		return{
			randomCard: this.props.randomCard,
			isLoading: false,
			disable: false
		}
	},

	handleCardGen: function(generatedCard){
		let that = this;
		this.setState({
			isLoading: true,
			disable: true
		});
		HearthstoneApiRequest.getRandomCard().then(function(randomCard){
			that.setState({
				randomCard: randomCard,
				isLoading: false,
				disable: false
			});
		}, function(err){
			that.setState({
				isLoading: false,
				disable: false
			});
			alert(err);
		});
		// this.setState({
		// 	randomCard: generatedCard
		// });
	},

	render: function(){
		let randomCard = this.state.randomCard;
		let isLoading = this.state.isLoading;
		let disable = this.state.disable;

		function renderCard(){
			let loadingGif = "";
			if(isLoading){
				loadingGif = "loading-on";
			} else {
				loadingGif = "loading-off";
			}
			return <CardDisplay card={randomCard} loadingGif={loadingGif}/>
		}

		return (
			<div className="random-container">
				<h1>Random Card</h1>
				{renderCard()}
				<RandomForm onHandleCardGen={this.handleCardGen} disable={disable}/>
			</div>
		);
	}
});

export default Random;