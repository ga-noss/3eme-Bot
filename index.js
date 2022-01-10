const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

const dotenv = require('dotenv');
dotenv.config();

const fs = require('fs');
client.commands = new Collection();
const commandsFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')); 
for(const file of commandsFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

const token = process.env.TOKEN;
const prefix = process.env.PREFIX;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity('Beating My Wife', { type: 'WATCHING' });
    client.user.setPresence({ status: 'idle' });
});

client.on('messageCreate', (message) => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch(command) {
        case 'zoom': client.commands.get('zoom').execute(message, args); break;
        case 'clear': client.commands.get('clear').execute(message, args); break;
        case 'help': client.commands.get('help').execute(message, args); break;
    }
});

client.login(token);