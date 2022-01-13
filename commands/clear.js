const { Permissions } = require('discord.js');

module.exports = {
    name: 'clear',
    description: 'Clear messages',
    execute(message, args) {
        const clearHelp = require('../Embeds/commandsHelpEmbed/clear')

        const num = parseInt(args[0], 10) + 1;

        if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            message.reply('You don\'t have the permission to use this command')
        } else {
            if (!isNaN(num)) {
                message.channel.bulkDelete(num);
            } else {
                message.reply({embeds: [clearHelp]})
            }
        }
    }
}