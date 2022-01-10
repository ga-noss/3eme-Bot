const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'zoom',
    description: 'Send the zoom link',
    execute(message, args) {
        if(!args[0]) return message.reply('Please enter the subject you want the zoom link'); 

        const EPS = require('../zoomEmbed/eps');
        const ES = require('../zoomEmbed/es');
        const FR = require('../zoomEmbed/fr');
        const HG = require('../zoomEmbed/hg');
        const MATH = require('../zoomEmbed/math');
        const SI = require('../zoomEmbed/si');
        const SP = require('../zoomEmbed/sp');
        const SVT = require('../zoomEmbed/svt');
        const TECH = require('../zoomEmbed/tech');
    
        switch(args[0]) {
            case 'eps'                  : message.reply({embeds: [EPS]}); break;
            case 'es'                   : message.reply({embeds: [ES]}); break;
            case 'fr'                   : message.reply({embeds: [FR]}); break;
            case 'hg' || 'hg si'        : message.reply({embeds: [HG]}); break;
            case 'math'                 : message.reply({embeds: [MATH]}); break;
            case 'si'                   : message.reply({embeds: [SI]}); break;
            case 'sp'                   : message.reply({embeds: [SP]}); break;
            case 'svt'                  : message.reply({embeds: [SVT]}); break;
            case 'techno'               : message.reply({embeds: [TECH]}); break;
        }
    }
}