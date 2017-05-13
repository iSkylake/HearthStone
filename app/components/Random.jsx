const React = require('react');
const createReactClass = require('create-react-class');
const CardDisplay = require('CardDisplay');
const RandomForm = require('RandomForm');
const HearthstoneApiRequest = require('HearthstoneAPI');

const Random = createReactClass({
	getDefaultProps: function(){
		return{
			randomCard: "http://wow.zamimg.com/images/hearthstone/backs/original/Card_Back_Default.png"
		};
	},

	getInitialState: function(){
		return{
			randomCard: this.props.randomCard,
			isLoading: false
		}
	},

	handleCardGen: function(generatedCard){
		let that = this;
		this.setState({
			isLoading: true
		});
		HearthstoneApiRequest.getRandomCard().then(function(randomCard){
			that.setState({
				randomCard: randomCard,
				isLoading: false
			});
		}, function(err){
			that.setState({
				isLoading: false
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
				<RandomForm onHandleCardGen={this.handleCardGen}/>
			</div>
		);
	}
});

module.exports = Random;