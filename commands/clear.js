module.exports = {
    name: 'clear',
    description: 'Clear messages',
    execute(message, args) {
        const clearHelp = require('../Embeds/commandsHelpEmbed/clear')

        const num = parseInt(args[0], 10) + 1;

        if (!isNaN(num)) {
            message.channel.bulkDelete(num);
        } else {
            message.reply({embeds: [clearHelp]})
        }
    }
}