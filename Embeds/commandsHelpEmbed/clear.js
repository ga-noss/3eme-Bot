const { MessageEmbed } = require('discord.js');

const clearHelp = new MessageEmbed()
    .setTitle('Clear')
    .addFields(
        { name: 'Utility', value: 'Use this command to clear messages in the channel\n `;clear [number of message you want to delete]`'},
    )

    module.exports = clearHelp;