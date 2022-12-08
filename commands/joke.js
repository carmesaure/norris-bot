const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('joke')
		.setDescription('Retourne une joke aleatoire de Chuck Norris')
		.addStringOption(option =>
			option.setName('categorie')
			.setDescription('Categorie de la joke')),

	async execute(interaction) {

		const categorie = interaction.options.getString('categorie');

		if (!categorie) {
			let message = await axios.get('https://api.chucknorris.io/jokes/random', { headers: { Accept: 'application/json', 'Accept-Encoding': 'identity' }, params: { trophies: true } })
			.then(response => response.data.value) 
			.catch(error => {
				console.log(error);
			});

			await interaction.reply(message);
		} else {
			let message = await axios.get(`https://api.chucknorris.io/jokes/random?category=${categorie}`, { headers: { Accept: 'application/json', 'Accept-Encoding': 'identity' }, params: { trophies: true } })
			.then(response => {return {success: true, value: response.data.value};}) 
			.catch(error => {
				console.log(error);
				return {success: false, value: error.response.data.message};
			});

			if (message.success) {
				await interaction.reply(message.value);
			} else {
				await interaction.reply({ content: `There was an error executing this command : ${message.value}`, ephemeral: true });
			}
		}

	}
}