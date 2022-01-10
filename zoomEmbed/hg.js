const { MessageEmbed } = require('discord.js');

const HG = new MessageEmbed()
    .setTitle('Histoire Geographie')
    .setURL('https://us04web.zoom.us/j/9266096029?pwd=OEY3K0k2a0RMSzRTYnUwSUNYZTk1Zz09')
    .addFields(
        { name: 'Professeur', value: 'Monsieur Buckhory'},
        { name: 'Lien Zoom', value: 'https://us04web.zoom.us/j/9266096029?pwd=OEY3K0k2a0RMSzRTYnUwSUNYZTk1Zz09'},
        { name: 'ID', value: '926 609 6029'},
        { name: 'Code Secret', value: '4anhry'}
    );

module.exports = HG;