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

	render: function(){
		// let cardList = [];
		// console.log(cardList);

		let that = this;

		function callGetSet(){
			HearthstoneApiRequest.getSet().then((cardList)=>{
				that.setState({
					cardList: cardList
				});
				// console.log(that.state.cardList);
			}, (err)=>{
				alert(err);
			});
		};

		if(that.state.cardList.length < 1){
			callGetSet();
		}

		function renderSet(){
			let cardList = that.state.cardList;
			// console.log(cardList);
			if(cardList.length > 1){
				return <SetDisplay cards = {cardList}/>
			}
		};

		return(
			<div className='set-container'>
				<h1>Card Set</h1>
				<SetOption/>
				{renderSet()}
				{/*<SetDisplay cards = {cardList}/>*/}
			</div>
		);
	}
});

export default CardSet;