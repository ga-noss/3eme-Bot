const { MessageEmbed } = require('discord.js');

const SI = new MessageEmbed()
    .setTitle('Section Internationale')
    .setURL('https://us02web.zoom.us/j/81699412943?pwd=T2E1SXVqN2ZDTDhxM1RscHJnSEFiQT09')
    .addFields(
        { name: 'Professeur', value: 'Madame Ramjuttun'},
        { name: 'Lien Zoom', value: 'https://us02web.zoom.us/j/81699412943?pwd=T2E1SXVqN2ZDTDhxM1RscHJnSEFiQT09'},
        { name: 'ID', value: '816 9941 2943'},
        { name: 'Code Secret', value: 'H5jt4B'}
    );  

module.exports = SI;