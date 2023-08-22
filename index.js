const {Telegraf} = require('telegraf');
const bot = new Telegraf('СЮДА ВСТАВИТЬ ТОКЕН ТЕЛЕГРАМ БОТА'); //bot token
const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();

(async () => {
    await characterAI.authenticateWithToken('СЮДА ВСТАВИТЬ ТОКЕН CHARACTER AI'); //account token or using guest authenticateAsGuest() 
    const characterId = "СЮДА ВСТАВИТЬ ID БОТА" //characterid token
    const chat = await characterAI.createOrContinueChat(characterId);

    bot.start((ctx) => {
        ctx.reply('ТЕКСТ ПРИ СТАРТЕ БОТА')
    });

    bot.hears(/ВСЕ|ВАРИАНТЫ|ОБРАЩЕНИЙ|ПРИ КОТОРЫХ|БОТ|ОТВЕТИТ НА СООБЩЕНИЕ/, async (ctx) => {
        const context = ctx.from.first_name;
        const userText = ctx.message.text;
        const textRequest = `${context}: ${userText}`;
        const response = await chat.sendAndAwaitResponse(textRequest, true)
        ctx.reply(response)
    });

    bot.hears(/Бот, завали ебало/, async (ctx) => {
        const Refresh = await chat.saveAndStartNewChat()
        ctx.Refresh
        ctx.reply('Братишка, ну не стукай')
    });

})();

bot.launch()
