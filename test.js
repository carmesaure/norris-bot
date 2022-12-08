const axios = require('axios');

// async function getJoke() {
// 	let req = await axios.get('https://api.chucknorris.io/jokes/random');
// 	return req.data
// }


// getJoke().then(message => {console.log(JSON.stringify())});

axios.get('https://api.chucknorris.io/jokes/categories', { headers: { Accept: 'application/json', 'Accept-Encoding': 'identity' }, params: { trophies: true } }).then(response => {
	console.log(response.data[0]);
})
