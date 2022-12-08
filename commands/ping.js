const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Répond avec Pong! et affiche le ping'),

	async execute(interaction) {
		let response = "Pong!";
		response += ` Le ping actuel est de ${Date.now() - interaction.createdTimestamp} ms`;
		await interaction.reply(response);
	}
};
