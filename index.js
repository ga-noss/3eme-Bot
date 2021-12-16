const { Client, Intents, Collection } = require('discord.js');
const fs = require('fs');
const dotenv = require('dotenv');
const help = require('./zoom/help');
const math = require('./zoom/math');
const fr = require('./zoom/fr');
const es = require('./zoom/es');
const hg = require('./zoom/hg');
const sp = require('./zoom/sp');
const eps = require('./zoom/eps');
const svt = require('./zoom/svt');
const tech = require('./zoom/tech');
const si = require('./zoom/si');
dotenv.config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));   
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

const token = process.env.TOKEN;
const prefix = process.env.PREFIX;

client.on('ready', () => {
    console.log('ready');
    client.user.setPresence({ activities: [{ name: 'Beating My Wife'}], status: 'idle'});
});

client.on('messageCreate', (message) => {
    if (message.content === prefix + 'help') {
        message.reply({embeds: [help]});
    } else
    if (message.content === prefix + 'math') {
        message.reply({embeds: [math]});
    } else 
    if (message.content === prefix + 'fr') {
        message.reply({embeds: [fr]});
    } else
    if (message.content === prefix + 'es') {
        message.reply({embeds: [es]});
    } else
    if (message.content === prefix + 'hg' || message.content === prefix + 'hg si') {
        message.reply({embeds: [hg]});
    } else
    if (message.content === prefix + 'sp') {
        message.reply({embeds: [sp]});
    } else
    if (message.content === prefix + 'eps') {
        message.reply({embeds: [eps]});
    } else
    if (message.content === prefix + 'svt') {
        message.reply({embeds: [svt]});
    } else
    if (message.content === prefix + 'techno') {
        message.reply({embeds: [tech]});
    } else
    if (message.content === prefix + 'si') {
        message.reply({embeds: [si]});
    } else
    if (message.content.startsWith(prefix)) {
        message.reply({
            content: 'Please enter a valid command my friend'
        });
    }
});

client.login(token);