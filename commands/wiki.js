module.exports = {
    name: 'wiki',
    description: 'get the wiki link',
    execute(message, args) {
        const wiki = require('../Embeds/basicEmbeds/wiki');
        const wikiHelp = require('../Embeds/commandsHelpEmbed/wiki');

        if(args[0]) {
            message.reply({embeds: [wikiHelp]})
        } else {
            message.reply({embeds: [wiki]})
        }
    }
}