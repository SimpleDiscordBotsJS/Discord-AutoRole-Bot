const Discord = require("discord.js"); //Library
const config = require("./config.json"); //Loading config file
const client = new Discord.Client(); //Client creation

//===========================================================

client.on('ready', () => { //Bot launched
    console.log(`Launched as a bot: ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => { //User join into the server
    if(client.guilds.get(config.SERVER_ID)) { //Checking for the correct server
        var role = member.guild.roles.get(config.ROLE_ID); //Getting a role (Can be replaced get on find, and then indicate in brackets instead ofconfig.ROLE_ID this: 'name', 'role_name')
        member.addRole(role); //Issuing a role
    }
});

//===========================================================

client.login(config.BOT_TOKEN); //Connect to the bot