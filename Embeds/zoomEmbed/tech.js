const { MessageEmbed } = require('discord.js');

const TECH = new MessageEmbed()
    .setTitle('Technologie')
    .setURL('https://us04web.zoom.us/j/76040173001?pwd=RUtYSUtHWGtYb01vZG9HaXB5ZjBOdz09')
    .addFields(
        { name: 'Professeur', value: 'Monsieur Marcon'},
        { name: 'Lien Zoom', value: 'https://us04web.zoom.us/j/76040173001?pwd=RUtYSUtHWGtYb01vZG9HaXB5ZjBOdz09'},
        { name: 'ID', value: '760 4017 3001'},
        { name: 'Code Secret', value: 'WvTp4z'}
    );

module.exports = TECH;