const { MessageEmbed } = require('discord.js');

const SC = new MessageEmbed()
    .setTitle('Sciences Physiques')
    .setURL('https://us04web.zoom.us/j/71187461081?pwd=U084TzNKbjN2SVdWRG9wanQ0dDJDUT09')
    .addFields(
        { name: 'Professeur', value: 'Monsieur Godenzi'},
        { name: 'Lien Zoom', value: 'https://us04web.zoom.us/j/71187461081?pwd=U084TzNKbjN2SVdWRG9wanQ0dDJDUT09'},
        { name: 'ID', value: '711 8746 1081'},
        { name: 'Code Secret', value: '28TmQF'}
    );

module.exports = SC;