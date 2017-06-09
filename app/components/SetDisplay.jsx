import React from 'react';
import createReactClass from 'create-react-class';

const SetDisplay = (cards) =>{
	// let cards = ['https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/5/5f/Leeroy_Jenkins%28674%29.png?version=c7aedfb960e57074001321560225c55f', 'https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/7/7c/Malygos%28241%29.png?version=f8f0fd203669ed9e6e433dd5dc362f25', 'https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/d/df/Edwin_VanCleef%283%29.png?version=722b3e7638ea5d3e3eec49cf0f26088e', 'https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/c/cd/Bloodmage_Thalnos%28525%29.png?version=8f1294225adb7ad46a4ddae219b792ff', 'https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/e/ef/Lyra_the_Sunshard%2855545%29.png?version=2ce01cd4d92796ad5e18d30cbc7d2dae', 'https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/0/0e/Gadgetzan_Auctioneer%28131%29.png?version=6338fc833b5628fb5c54e1e23d99fc3e', 'https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/7/71/Meteor%2855558%29.png?version=035d196d47169632a74429d903ce79f9', 'https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/b/b9/Twilight_Drake%28360%29.png?version=c71e023548f46d1e4301272e39eb2103'];
	console.log(cards["cards"]);
	let newCards = cards['cards'];
	const cardList = newCards.map((card)=>
		<li key={card['cardId']}><img src={card['img']}/></li>
	);
	return(
		<div>
			<ul id="card-list">{cardList}</ul>
		</div>
	);
};

export default SetDisplay;