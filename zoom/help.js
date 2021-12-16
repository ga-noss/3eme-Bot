const { MessageEmbed } = require('discord.js');

const help = new MessageEmbed()
    .setTitle('Help')
    .addFields(
        { name: 'EPS', value: ';eps'},
        { name: 'Espagnol', value: ';es'},
        { name: 'Français', value: ';fr'},
        { name: 'Histoire Géographie', value: ';hg'},
        { name: 'Histoire Géographie SI', value: ';hg si'},
        { name: 'Maths', value: ';math'},
        { name: 'Section Internationale', value: ';si'},
        { name: 'Science Physiques', value: ';sp'},
        { name: 'SVT', value: ';svt'},
        { name: 'Technologie', value: ';techno'},
    );

module.exports = help;