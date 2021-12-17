const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'zoom',
    description: 'Send the zoom link',
    execute(message, args) {
        if(!args[0]) return message.reply('Please enter the subject you want the zoom link'); 

        const EPS = require('../zoom/eps');
        const ES = require('../zoom/es');
        const FR = require('../zoom/fr');
        const HG = require('../zoom/hg');
        const MATH = require('../zoom/math');
        const SI = require('../zoom/si');
        const SP = require('../zoom/sp');
        const SVT = require('../zoom/svt');
        const TECH = require('../zoom/tech');
    
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