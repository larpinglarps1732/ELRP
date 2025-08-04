const { ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

module.exports = {
  name: "menu",
  description: "Shows a test menu",
  async execute(message, args) {
    // Initial message
    await message.channel.send("This is a test");

    // Create a dropdown menu
    const selectMenu = new StringSelectMenuBuilder()
      .setCustomId("test-menu")
      .setPlaceholder("Choose an option")
      .addOptions([
        {
          label: "Option 1",
          description: "This is the first option",
          value: "option_1",
        },
        {
          label: "Option 2",
          description: "This is the second option",
          value: "option_2",
        },
      ]);

    const row = new ActionRowBuilder().addComponents(selectMenu);

    await message.channel.send({
      content: "Select an option below:",
      components: [row],
    });
  },
};
