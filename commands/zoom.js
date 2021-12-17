const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'zoom',
    description: 'Send the zoom link',
    execute(message, args) {

        const math = require('../zoom/math');
        const fr = require('../zoom/fr');
        const es = require('../zoom/es');
        const hg = require('../zoom/hg');
        const sp = require('../zoom/sp');
        const eps = require('../zoom/eps');
        const svt = require('../zoom/svt');
        const tech = require('../zoom/tech');
        const si = require('.../zoom/si');
        
        switch(args) {
            case 'eps'      : message.reply({embeds: [eps]}); break;
            case 'es'       : message.reply({embeds: [es]}); break;
            case 'fr'       : message.reply({embeds: [fr]}); break;
            case 'hg'       : message.reply({embeds: [hg]}); break;
            case 'math'     : message.reply({embeds: [math]}); break;
            case 'si'       : message.reply({embeds: [si]}); break;
            case 'sp'       : message.reply({embeds: [sp]}); break;
            case 'svt'      : message.reply({embeds: [svt]}); break;
            case 'techno'   : message.reply({embeds: [tech]}); break;
        }
    }
}