const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('menu')
    .setDescription('Open a pop-up menu'),

  async execute(interaction) {
    await interaction.reply({
      content: 'Here is your menu!',
      ephemeral: true,
    });
  },
};
