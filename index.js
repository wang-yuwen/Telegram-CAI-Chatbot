const { Telegraf } = require('telegraf');
const bot = new Telegraf('6651025524:AAGzTiP03tMoh6rX80BGHUS8s5diWTBIUbk'); //bot token
const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();

(async() => {
    await characterAI.authenticateWithToken('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkVqYmxXUlVCWERJX0dDOTJCa2N1YyJ9.eyJpc3MiOiJodHRwczovL2NoYXJhY3Rlci1haS51cy5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTUxMzI2MDAzNTc1ODQ4NDMzMjgiLCJhdWQiOlsiaHR0cHM6Ly9hdXRoMC5jaGFyYWN0ZXIuYWkvIiwiaHR0cHM6Ly9jaGFyYWN0ZXItYWkudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY5MjIxMzIyOCwiZXhwIjoxNjk0ODA1MjI4LCJhenAiOiJkeUQzZ0UyODFNcWdJU0c3RnVJWFloTDJXRWtucVp6diIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.ggFHi--2LWhqy1zmntc3CViw2qBrDJ0QoUPeeR5iS7svSSC1abrHINauqYuYgCWYL3pKFv4cs09IXKOZOgtEsFHCu6u4ohm4k1wXSH4WTFxfhPUGiFxKjHRkWAfwoXYggHqW7aFq2us5divwUpZlqY0nSfxOxR-6jFELx1Je5v3qzUUbRy-VHKp-RssHhG5Ha3k7AJoc7feyoafx0n8iC7C7fnYmeF42Zu9renJKEVPJyLoTt-7XdwTZfAWGmr2ZE6Yfnq94Tth0jQNRZW-XYy6RatWeQedm3NKMChgqpRYQAwSm84smjcTz1Z8fryr0G82xCvbtBRuOXFdHrlLbLA'); //account token or using guest authenticateAsGuest() 
    const characterId = "-XJ84xEDf5jf7hYPP1YRulYkKZaoaRPwWgQa4zqwtxE" //characterid token
    const chat = await characterAI.createOrContinueChat(characterId);
    
    bot.start((ctx) => {
        ctx.reply('Сап, я Игорь Духанин, тру стори, пруфов не будет')
    });

    bot.hears(/Игорь|игорь|ОП|Оп|оп|Духанин|духанин|DukhAInin_bot|Dukhan1n|Духан|Нейродухан|Нейродуханин|НейроДухан|Духан/, async(ctx) => {
        const response = await chat.sendAndAwaitResponse(ctx.message.text, true)
        ctx.reply(response)
        });
        
        bot.hears(/Бот, завали ебало/, async(ctx) => {
        const Refresh = await chat.saveAndStartNewChat()
        ctx.Refresh
        ctx.reply('Братишка, ну не стукай')
        });
        
})();

bot.launch()
