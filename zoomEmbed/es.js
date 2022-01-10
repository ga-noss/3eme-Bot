const { MessageEmbed } = require('discord.js');

const ES = new MessageEmbed()
    .setTitle('Espagnol')
    .setURL('https://zoom.us/j/8713226270?pwd=SGlleVpJV0k3SjBrRjZiY3V5VU42Zz09')
    .addFields(
        { name: 'Professeur', value: 'Madame Acosta Martinez'},
        { name: 'Lien Zoom', value: 'https://zoom.us/j/8713226270?pwd=SGlleVpJV0k3SjBrRjZiY3V5VU42Zz09'},
        { name: 'ID', value: '871 322 6270'},
        { name: 'Code Secret', value: '9iegFP'}
    );

module.exports = ES;