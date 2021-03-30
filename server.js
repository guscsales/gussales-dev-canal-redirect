const express = require('express');

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
	console.log('Redirect to YouTube channel!');
	res.redirect('https://www.youtube.com/channel/UCQmw7Ty7UN8i7_dan_uKNfQ');
});

app.listen(port, () => {
	console.log(`Example app listening at ${port}`);
});
