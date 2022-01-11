module.exports = {
    name: 'test',
    descripion: 'test command',
    execute(message, args) {
        if(message.author.id == '570205523438469120') {
            message.reply('yes')
        } else {
            message.reply('no')
        }
    }
}