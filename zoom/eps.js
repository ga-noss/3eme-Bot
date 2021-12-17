const { MessageEmbed } = require('discord.js');

const EPS = new MessageEmbed()
    .setTitle('EPS')
    .setURL('https://zoom.us/j/2481214527?pwd=WTRYMmlRSDN3Ny96a3JEcERiMWd3Zz09')
    .addField(
        { name: 'Professeur', value: 'Madame Lagesse'},
        { name: 'Lien Zoom', value: 'https://zoom.us/j/2481214527?pwd=WTRYMmlRSDN3Ny96a3JEcERiMWd3Zz09'},
        { name: 'ID', value: '248 121 4527'},
        { name: 'Code Secret', value: '8Khbyz'}
    );

module.exports = EPS;