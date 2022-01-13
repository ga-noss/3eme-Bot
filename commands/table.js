const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'table',
    description: 'Send the time table of a specific class',
    execute(message, args) {
        const tableHelp = require('../Embeds/commandsHelpEmbed/table')

        const tableSI = new MessageEmbed()
            .setImage('https://i.imgur.com/6JM4njh.jpg')

        const argus = String(args[0]).toLowerCase()

        switch(argus) {
            case '3b_si': message.reply({ embeds: [tableSI]}); break;
            default : message.reply({ embeds: [tableHelp]})
        }
    }
}