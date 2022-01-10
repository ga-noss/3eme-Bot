const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help', 
    description: 'Help people with the commands',
    execute(message, args) {
        const help = new MessageEmbed()
            .setTitle('Help')
            .setAuthor('Ganoss', 'https://i.imgur.com/IcKaCI1.jpg','https://ga-noss.github.io')
            .addFields(
                { name: 'help', value: 'Use ;help [command name] for more information on a specific command or open this menu' },
                { name: 'zoom', value: 'Use this command to know the zoom link of a subject'},
                { name: 'clear', value: 'To clear the number of messages you want', inline: true},
            )

        const zoomHelp = new MessageEmbed()
            .setTitle('Zoom')
            .setThumbnail('https://i.imgur.com/9zAAR9q.png')
            .addFields(
                { name: 'Utility', value: 'Use this command to know the zoom link of a subject\n `;zoom [subject]`'},
                { name: 'All Subjects', value: 'Sport : eps \n Espagnol : es \nFrançais : fr \nHistoire Géographie :  hg \nHistoire Géographie SI : hg si \nMaths : math \nSection Internationale : si \nSciences Physiques : sp \nSVT : svt \nTechnologie : techno \n', inline: true}
            )

        const clearHelp = new MessageEmbed()
            .setTitle('Clear')
            .addFields(
                { name: 'Utility', value: 'Use this command to clear messages in the channel\n `;clear [number of message you want to delete]`'},
            )

        switch(args[0]) {
            case 'zoom' : message.reply({ embeds: [zoomHelp] }); break;
            case 'clear': message.reply({ embeds: [clearHelp] }); break;
            default: message.reply({ embeds: [help] });
        }
    }
}