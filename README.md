# Discord-AutoRole-Bot
This bot is needed to automatically assign roles to new users on your Discord server.

Advantages:
 - I commented everything out, so it's easy to figure it out
 - All setup in one file
 - Checking for the server (It is necessary so that when using the bot on several servers, no crashes occur)

# Instructions

## Discord Ище:
 - [Create application](https://discord.com/developers/applications)
 - Add a bot to it (Bot section)
 - In the same place where the bot was added, enable "PRESENCE INTENT" and "SERVER MEMBERS INTENT" (Without this, the bot will not work)
 - Add a bot to the server (here it is already)

## Customizing the Config.json File
 ```js
 {
    "BOT_TOKEN": "Enter_discord_bot_token",
    "SERVER_ID": "Enter_server_id",
    "ROLE_ID": "Enter_the_id_of_the_required_role"
 }
 ```
 
 The bot token can be copied in the Bot section of [your application](https://discord.com/developers/applications)
 
 # Attention!
 To get the role and server IDs, you must enable [developer mode](https://discord.fandom.com/ru/wiki/Режим_разработчика)

## To run locally, you need Node.JS
 - [Download Node.JS](https://nodejs.org/en/)

## Start
 ```sh
 node index.js
 ```
