const { MessageEmbed } = require('discord.js');

const tableHelp = new MessageEmbed()
    .setTitle('Wiki')
    .addFields(
        { name: 'Utility', value: 'Get the time table\n `;table [the class]`'},
        { name: 'Class', value: '3B_SI\n 3B\n 3C'}
    );

module.exports = tableHelp;