module.exports = {
    name: 'clear',
    description: 'Clear messages',
    execute(message, args) {
        const num = parseInt(args[0], 10);

        if (isNaN(num)) {
            message.reply('Please enter a valid argument')
        } else {
            message.channel.bulkDelete(num);
        }
    }
}