const { MessageEmbed } = require('discord.js');

const wikiHelp = new MessageEmbed()
    .setTitle('Wiki')
    .setThumbnail('https://i.imgur.com/VDhCAXX.png  ')
    .addFields(
        { name: 'Utility', value: 'Use this command to get the wiki link\n `;wiki`'}
    );

module.exports = wikiHelp;