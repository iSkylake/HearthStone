const axios = require('axios');
const API_KEY = require('./apiKey.js')

const API_URL = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/";

module.exports = {
	getCard: function(cardName){
		let encodedCardName = encodeURI(cardName);
		let requestUrl = API_URL + encodedCardName;

		return axios.get(requestUrl, {
			headers: {"X-Mashape-Key": API_KEY}
		}).then(function(res){
			console.log(res.data);
			for(let i=0; i<res.data.length; i++){
				if("img" in res.data[i]){
					return res.data[i].img;
				}
			}
		}).catch(function(err){
			throw new Error(err);
		});
	}
};