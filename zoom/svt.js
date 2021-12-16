const { MessageEmbed } = require('discord.js');

const SVT = new MessageEmbed()
    .setTitle('SVT')
    .setURL('https://us04web.zoom.us/j/4823714469?pwd=UzVLbkhaVGI2MXNsWmx0cmtvcTltUT09')
    .addFields(
        { name: 'Professeur', value: 'Madame Lagesse'},
        { name: 'Lien Zoom', value: 'https://us04web.zoom.us/j/4823714469?pwd=UzVLbkhaVGI2MXNsWmx0cmtvcTltUT09'},
        { name: 'ID', value: '482 371 4469'},
        { name: 'Code Secret', value: '312336'}
    );

module.exports = SVT;