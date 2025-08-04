const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  name: "menu",
  description: "Shows a test menu with buttons",
  async execute(message, args) {
    // Step 1: Send the test message
    await message.channel.send("This is a test");

    // Step 2: Create buttons
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("option_1")
        .setLabel("Option 1")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("option_2")
        .setLabel("Option 2")
        .setStyle(ButtonStyle.Secondary)
    );

    // Step 3: Send the message with buttons
    await message.channel.send({
      content: "Choose an option:",
      components: [row],
    });
  },
};
