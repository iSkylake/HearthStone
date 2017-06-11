import React from 'react';
import createReactClass from 'create-react-class';
import SetDisplay from 'SetDisplay';
import SetOption from 'SetOption';
import HearthstoneApiRequest from 'HearthstoneAPI';

const CardSet = createReactClass({
	getInitialState: function(){
		return{
			ready: false,
			cardList: []
		};
	},

	getSet: function(setName){
		HearthstoneApiRequest.getSet(setName).then((cardList)=>{
			this.setState({
				cardList: cardList
			});
		}, (err)=>{
			alert(err);
		});
	},

	render: function(){
		let cardList = this.state.cardList;
		// console.log(cardList);

		// let that = this;

		// function callGetSet(){
		// 	HearthstoneApiRequest.getSet().then((cardList)=>{
		// 		that.setState({
		// 			cardList: cardList
		// 		});
		// 	}, (err)=>{
		// 		alert(err);
		// 	});
		// };

		// if(that.state.cardList.length < 1){
		// 	callGetSet();
		// }

		// function renderSet(){
		// 	let cardList = that.state.cardList;
		// 	if(cardList.length > 1){
		// 		return <SetDisplay cards = {cardList}/>
		// 	}
		// };

		return(
			<div className='set-container'>
				<h1>Card Set</h1>
				<SetOption onGetSet={this.getSet}/>
				{/*renderSet()*/}
				{<SetDisplay cards={cardList}/>}
			</div>
		);
	}
});

export default CardSet;