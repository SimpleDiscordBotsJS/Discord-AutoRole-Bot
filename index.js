const Discord = require("discord.js"); //Library
const config = require("./config.json"); //Loading config file
const client = new Discord.Client({ intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MEMBERS
] }); //Client creation

//===========================================================

client.on('ready', () => { //Bot launched
    console.log(`Launched as a bot: ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => { //User join into the server
    if(client.guilds.cache.get(config.SERVER_ID)) { //Checking for the correct server
        return member.roles.add(member.guild.roles.cache.get(config.ROLE_ID)); //Issuing a role
    }
});

//===========================================================

client.login(config.BOT_TOKEN); //Connect to the bot