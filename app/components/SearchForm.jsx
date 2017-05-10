const React = require('react');
const createReactClass = require('create-react-class');

const SearchFrom = createReactClass({
	onClickSubmit: function(e){
		e.preventDefault();
		let cardName = this.refs.cardName.value;
		// let cards = {
		// 	"Leeroy Jenkins": "https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/5/5f/Leeroy_Jenkins%28674%29.png?version=c7aedfb960e57074001321560225c55f",
		// 	"Malygos": "https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/7/7c/Malygos%28241%29.png?version=f8f0fd203669ed9e6e433dd5dc362f25",
		// 	"Bloodmage Thalnos": "https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/c/cd/Bloodmage_Thalnos%28525%29.png?version=8f1294225adb7ad46a4ddae219b792ff",
		// 	"Ragnaros the Firelord": "https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/4/47/Ragnaros_the_Firelord%28503%29.png?version=9a57c14aa96cfecb9620b2fd95ec7b52"
		// }


		// if(cardName.length > 0){
		// 	this.refs.cardName.value = '';
		// 	if(cardName in cards){
		// 		this.props.onHandleSearch(cards[cardName]);
		// 	} else {
		// 		alert('Card not found');
		// 	}
			
		// }

		if(cardName.length > 0){
			this.refs.cardName.value = "";
			this.props.onHandleSearch(cardName);
		}
	},
	render: function(){
		return (
			<form onSubmit={this.onClickSubmit} className="search-form">
				<input ref="cardName" type="search" placeholder="Card Name"/>
				<button>Submit</button>
			</form>
		);
	}
});

module.exports = SearchFrom;