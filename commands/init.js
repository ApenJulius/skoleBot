const { SlashCommandBuilder } = require('discord.js');
const { initRowTop, initRowBot, initRowMid } = require('../initButtons');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('init')
        .setDescription('Create message with role self assignment'),

    async execute(interaction) {
        await interaction.reply({content:"Select role", components:[initRowTop,initRowMid, initRowBot]});
    },
};

