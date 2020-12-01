# Discord-AutoRole-Bot
Этот бот необходим для автоматического назначения ролей новым пользователям на вашем сервере Discord.

Плюшки:
 - Я всё закомментировал, так что разобраться просто
 - Вся настройка в одном файле
 - Проверка на сервер (Нужна чтобы при использовании бота на нескольких серверах, не происходило крашей)

# Инструкция

## Discord Бот:
 - [Создать приложение](https://discord.com/developers/applications)
 - Добавить в него бота (Раздел Bot)
 - Там-же где и добавляли бота, включить "PRESENCE INTENT" и "SERVER MEMBERS INTENT" (Без этого бот не будет работать)
 - Добавить бота на сервер (Тут уже сами)

## Настройка файла Config.json
 ```js
 {
    "BOT_TOKEN": "Вставьте токен вашего бота",
    "SERVER_ID": "Вставьте ID вашего сервера",
    "ROLE_ID": "Вставьте ID роли которую вы хотите автоматически выдавать"
 }
 ```
 
 Токен бота можно скопировать в разделе Bot у [вашего приложения](https://discord.com/developers/applications)
 
 # Внимание!
 Чтобы получить ID ролей и сервера, необходимо включить [режим разработчика](https://discord.fandom.com/ru/wiki/Режим_разработчика)

## Для локального запуска нужен Node.JS
 - [Скачать Node.JS](https://nodejs.org/en/)

## Запуск
 ```sh
 node index.js
 ```