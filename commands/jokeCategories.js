const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('jokecategories')
		.setDescription('Retourne la liste des categories de joke disponibles'),

	async execute(interaction) {
		let categories = await axios.get('https://api.chucknorris.io/jokes/categories', { headers: { Accept: 'application/json', 'Accept-Encoding': 'identity' }, params: { trophies: true } })
		.then(response => response.data) 
		.catch(error => {
			console.log(error);
		});

		let message = "Categories de Jokes :\n";
		message += categories.map(c => `- ${c}\n`).join("");

		await interaction.reply(message);
	}
}