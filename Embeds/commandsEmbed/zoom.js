const { MessageEmbed } = require('discord.js');

const zoomHelp = new MessageEmbed()
    .setTitle('Zoom')
    .setThumbnail('https://i.imgur.com/9zAAR9q.png')
    .addFields(
        { name: 'Utility', value: 'Use this command to know the zoom link of a subject\n `;zoom [subject]`'},
        { name: 'All Subjects', value: 'Sport : eps \n Espagnol : es \nFrançais : fr \nHistoire Géographie :  hg \nHistoire Géographie SI : hg si \nMaths : math \nSection Internationale : si \nSciences Physiques : sp \nSVT : svt \nTechnologie : techno \n', inline: true}
    ) 

module.exports = zoomHelp;