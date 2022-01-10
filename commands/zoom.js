const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'zoom',
    description: 'Send the zoom link',
    execute(message, args) {
        const zoomHelp = require('../Embeds/commandsEmbed/zoom')

        const EPS = require('../Embeds/zoomEmbed/eps');
        const ES = require('../Embeds/zoomEmbed/es');
        const FR = require('../Embeds/zoomEmbed/fr');
        const HG = require('../Embeds/zoomEmbed/hg');
        const MATH = require('../Embeds/zoomEmbed/math');
        const SI = require('../Embeds/zoomEmbed/si');
        const SP = require('../Embeds/zoomEmbed/sp');
        const SVT = require('../Embeds/zoomEmbed/svt');
        const TECH = require('../Embeds/zoomEmbed/tech');
    
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
            default                     : message.reply({embeds: [zoomHelp]}); 
        }
    }
}