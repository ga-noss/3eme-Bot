module.exports = {
    name: 'clear',
    description: 'Clear messages',
    execute(message, args) {
        message.delete();
        message.channel.bulkDelete(args[0]);
    }
}