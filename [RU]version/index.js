const Discord = require("discord.js"); //Библиотека
const config = require("./config.json"); //Загрузка конфига
const client = new Discord.Client({ intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MEMBERS
] }); //Создание клиента

//===========================================================

client.on('ready', () => { //Бот запущен
    console.log(`Запущен от имени бота: ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => { //Пользователь зашёл на сервер
    if(client.guilds.cache.get(config.SERVER_ID)) { //Проверка на нужный сервер
        return member.roles.add(member.guild.roles.cache.get(config.ROLE_ID)); //Выдача роли
    }
});

//===========================================================

client.login(config.BOT_TOKEN); //Подключение к боту