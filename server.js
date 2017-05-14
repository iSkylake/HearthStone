const express = require('express');
const app = express();
const path = require('path');

PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('*', function(req, res){
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, function(){
	console.log('Server listening on PORT: ', PORT);
});