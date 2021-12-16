const { MessageEmbed } = require('discord.js');

const FR = new MessageEmbed()
    .setTitle('Français')
    .setURL('https://us02web.zoom.us/j/84926871567?pwd=WGd6Vk4ydDMzVXNuYmEveXlpNUorUT09')
    .addFields(
        { name: 'Professeur', value: 'Monsieur Jarlegand'},
        { name: 'Lien Zoom', value: 'https://us02web.zoom.us/j/84926871567?pwd=WGd6Vk4ydDMzVXNuYmEveXlpNUorUT09'},
        { name: 'ID', value: '849 2687 1567'},
        { name: 'Code Secret', value: 'RWTRA9'}
    );

module.exports = FR;