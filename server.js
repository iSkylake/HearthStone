const express = require('express');
const app = express();

PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT, function(){
	console.log('Server listening on PORT: ', PORT);
});