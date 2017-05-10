const React = require('react');
const createReactClass = require('create-react-class');

const RandomForm = createReactClass({
	onClickRandom: function(e){
		e.preventDefault();
		let cards = [
			"https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/5/5f/Leeroy_Jenkins%28674%29.png?version=c7aedfb960e57074001321560225c55f",
			"https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/7/7c/Malygos%28241%29.png?version=f8f0fd203669ed9e6e433dd5dc362f25",
			"https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/c/cd/Bloodmage_Thalnos%28525%29.png?version=8f1294225adb7ad46a4ddae219b792ff",
			"https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/4/47/Ragnaros_the_Firelord%28503%29.png?version=9a57c14aa96cfecb9620b2fd95ec7b52"
		];
		let i = Math.floor(Math.random()*cards.length);
		this.props.onHandleCardGen(cards[i]);
	},

	render: function(){
		return(
			<form onSubmit={this.onClickRandom}>
				<button>Generate Card</button>
			</form>
		);
	}
});

module.exports = RandomForm;