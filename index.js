require('dotenv').config();
const { Client, GatewayIntentBits, Partials, Events, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages],
  partials: [Partials.Channel], // needed to receive DMs
});

client.once(Events.ClientReady, () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on(Events.InteractionCreate, async interaction => {
  try {
    if (interaction.isChatInputCommand()) {
      if (interaction.commandName === 'menu') {
        const menu = new StringSelectMenuBuilder()
          .setCustomId('select_menu')
          .setPlaceholder('Select an option')
          .addOptions([
            {
              label: 'Option 1',
              description: 'This is option 1',
              value: 'option_1',
            },
            {
              label: 'Option 2',
              description: 'This is option 2',
              value: 'option_2',
            },
            {
              label: 'Option 3',
              description: 'This is option 3',
              value: 'option_3',
            },
          ]);
        
        const row = new ActionRowBuilder().addComponents(menu);
        await interaction.reply({ content: 'Please select an option:', components: [row], ephemeral: true });
      }
    } else if (interaction.isStringSelectMenu()) {
      if (interaction.customId === 'select_menu') {
        const selectedValue = interaction.values[0];
        await interaction.update({ content: `You selected: **${selectedValue}**`, components: [] });
      }
    }
  } catch (error) {
    console.error(error);
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({ content: 'There was an error while processing this interaction.', ephemeral: true });
    } else {
      await interaction.reply({ content: 'There was an error while processing this interaction.', ephemeral: true });
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
