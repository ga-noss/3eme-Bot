const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help', 
    description: 'Help people with the commands',
    execute(message, args) {
        const zoomHelp = require('../Embeds/commandsEmbed/zoom');
        const clearHelp = require('../Embeds/commandsEmbed/clear');

        const help = new MessageEmbed()
            .setTitle('Help')
            .setAuthor('Ganoss', 'https://i.imgur.com/IcKaCI1.jpg','https://ga-noss.github.io')
            .addFields(
                { name: 'help', value: 'Use ;help [command name] for more information on a specific command or open this menu' },
                { name: 'zoom', value: 'Use this command to know the zoom link of a subject'},
                { name: 'clear', value: 'To clear the number of messages you want', inline: true},
            )

        

        switch(args[0]) {
            case 'zoom' : message.reply({ embeds: [zoomHelp] }); break;
            case 'clear': message.reply({ embeds: [clearHelp] }); break;
            default: message.reply({ embeds: [help] });
        }
    }
}