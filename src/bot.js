//require("dotenv").config({path: '../.env'});    // Relative path one file backwards
require("dotenv").config(); // For most purposes this will work


const fs = require("fs");
const { Collection, Client, GatewayIntentBits } = require('discord.js');


const bot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers]});

bot.commands = new Collection();



process.on('unhandledRejection', error => { // Error handling for the things under "unhandledRejection" event.
	console.error('Unhandled promise rejection:', error);
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); // Collects every command file from location
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js')); // Collects every event file from location



for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    // Set a new item in the Collection
    // With the key as the command name and the value as the exported module
    bot.commands.set(command.data.name, command);
}



for (const file of eventFiles) { //Takes every event file and registers it with bot
    const event = require(`../events/${file}`);
    if (event.once) {
        bot.once(event.name, (...args) => event.execute(...args));
    } else {
        bot.on(event.name, (...args) => event.execute(...args));
    }
}



bot.on("ready", async () => {
    console.log(`>>>>${bot.user.username} has logged in`)
})





bot.login(process.env.BOT_TOKEN); // Logs in with bot token from .env. This can also be a string with token, however thats not secure.