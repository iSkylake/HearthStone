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
			return res.data[0].img;
		}).catch(function(err){
			throw new Error(err);
		});
	}
};