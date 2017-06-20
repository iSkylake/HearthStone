import React from 'react';
import createReactClass from 'create-react-class';

const RandomForm = createReactClass({
	onClickRandom: function(e){
		e.preventDefault();
		let cards = [
			"https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/5/5f/Leeroy_Jenkins%28674%29.png?version=c7aedfb960e57074001321560225c55f",
			"https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/7/7c/Malygos%28241%29.png?version=f8f0fd203669ed9e6e433dd5dc362f25",
			"https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/c/cd/Bloodmage_Thalnos%28525%29.png?version=8f1294225adb7ad46a4ddae219b792ff",
			"https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/4/47/Ragnaros_the_Firelord%28503%29.png?version=9a57c14aa96cfecb9620b2fd95ec7b52",
			"https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/0/0e/Gadgetzan_Auctioneer%28131%29.png?version=6338fc833b5628fb5c54e1e23d99fc3e",
			"https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/8/86/Primordial_Drake%2855533%29.png?version=8025fa09c544411ebf98df456506a580",
			"https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/5/57/Eviscerate%28382%29.png?version=5a9947e57ea4c0a693536673b16fda76"
		];
		// let i = Math.floor(Math.random()*cards.length);
		// this.props.onHandleCardGen(cards[i]);
		this.props.onHandleCardGen();
	},

	render: function(){
		return(
			<form onSubmit={this.onClickRandom}>
				<button disabled={this.props.disable}>Generate Card</button>
			</form>
		);
	}
});

export default RandomForm;