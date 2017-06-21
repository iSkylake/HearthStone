const axios = require('axios');
const API_KEY = require('HSAPIKey');

const GET_CARD_API = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/";
const RANDOM_CARD_API = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/";
const SET_API = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/";

module.exports = {
	getCard: function(cardName){
		let encodedCardName = encodeURI(cardName);
		let requestUrl = GET_CARD_API + encodedCardName;

		return axios.get(requestUrl, {
			headers: {"X-Mashape-Key": API_KEY}
		}).then(function(res){
			let i = 0;
			if(res.data.length > 1){
				do{
					i = Math.floor(Math.random()*res.data.length);
				}while(!("img" in res.data[i]));
			}
			return res.data[i].img;
			// let cards = [];
			// for(let i=0; i<res.data.length; i++){
			// 	if("img" in res.data[i]){
			// 		cards.push(res.data[i].img);
			// 	}
			// }
			// console.log(cards);
			// return cards;
		}).catch(function(err){
			throw new Error(err);
		});
	},

	getRandomCard: function(){
		let cardSet = ["Basic", "Classic", "Whispers of the Old Gods", "One Night in Karazhan", "Mean Streets of Gadgetzan", "Journey to Un'Goro"];
		let i = Math.floor(Math.random()*cardSet.length);
		let encodedCardSet = encodeURI(cardSet[i])
		let requestUrl = 	RANDOM_CARD_API + encodedCardSet;

		return axios.get(requestUrl, {
			headers: {"X-Mashape-Key": API_KEY}
		}).then(function(res){
			let j = 0;
			do{
				j = Math.floor(Math.random()*res.data.length);
			}while(!("img" in res.data[j]));
			// console.log(res.data[j]);
			return res.data[j].img;
		}).catch(function(err){
			throw new Error(err)
		});
	},

	getSet: function(setName){
		let requestUrl = SET_API + setName;
		let excludeCards = ["Anduin Wrynn", "Frog", "Garrosh Hellscream", "Gul'dan", "Jaina Proudmoore", "Malfurion Stormrage", "Rexxar", "Thrall", "Uther Lightbringer", "Valeera Sanguinar", "Avatar of the Coin", "Excess Mana", "Mechanical Dragonling", "Sheep", "Silver Hand Recruit", "Wicked Knife", "Wicked Knife", "Skeleton", "Stoneclaw Totem", "Wrath of Air Totem", "Armor Up!", "Dagger Master", "Dagger Mastery", "Fireblast", "Lesser Heal", "Life Tap", "NOOOOOOOOOOOO", "Reinforce", "Shapeshift", "Steady Shot", "Totemic Call"];

		return axios.get(requestUrl, {
			headers: {"X-Mashape-Key": API_KEY}
		}).then(function(res){
			let cardList = [];
			for(let i=0; i<res.data.length; i++){
				if("img" in res.data[i] && !excludeCards.includes(res.data[i]["name"])){
					cardList.push(res.data[i]);
				}
			}
			return cardList;
			// console.log(cardList);
		}).catch(function(err){
			throw new Error(err)
		});
	}
};