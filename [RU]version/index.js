const Discord = require("discord.js"); //Библиотека
const config = require("./config.json"); //Загрузка конфига
const client = new Discord.Client(); //Создание клиента

//===========================================================

client.on('ready', () => { //Бот запущен
    console.log(`Запущен от имени бота: ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => { //Пользователь зашёл на сервер
    if(client.guilds.get(config.SERVER_ID)) { //Проверка на нужный сервер
        var role = member.guild.roles.get(config.ROLE_ID); //Получение роли (Можно заменить get на find, и тогда указать в скобках вместо config.ROLE_ID вот это: 'name', 'название роли')
        member.addRole(role); //Выдача роли
    }
});

//===========================================================

client.login(config.BOT_TOKEN); //Подключение к боту