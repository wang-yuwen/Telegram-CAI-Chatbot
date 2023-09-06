const {Telegraf} = require('telegraf');
const bot = new Telegraf('ТОКЕН БОТА'); //bot token
const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();

(async () => {
    await characterAI.authenticateWithToken('ТОКЕН CAI'); //account token or using guest authenticateAsGuest() 
    const characterId = "ID БОТА В CAI" //characterid token
    const chat = await characterAI.createOrContinueChat(characterId);

    bot.start((ctx) => {
        ctx.reply('СТАРТОВОЕ СООБЩЕНИЕ')
    });

     bot.command('rpl', async(ctx) => {
        const context2 = ctx.message.reply_to_message.from.first_name;
        const userText2 = ctx.message.reply_to_message.text;
        const textRequest = `${context2}: ${userText2}`;
        const response = await chat.sendAndAwaitResponse(textRequest, true) 
        ctx.reply(response, {
            reply_to_message_id: ctx.message.reply_to_message.message_id
            });
    });

    bot.hears(/ВСЕ|ВАРИАНТЫ|ОБРАЩЕНИЙ|К|БОТУ/, async (ctx) => {
        const context = ctx.from.first_name;
        const userText = ctx.message.text;
        const textRequest = `${context}: ${userText}`;
        const response = await chat.sendAndAwaitResponse(textRequest, true)
        ctx.reply(response, {
            reply_to_message_id: ctx.message.message_id
        });
    });

    bot.hears(/Бот, завали ебало|БЗЕ|Бот завали ебало/, async(ctx) => {
        const Refresh = await chat.saveAndStartNewChat()
        ctx.Refresh
        ctx.reply('Братишка, ну не стукай', {
            reply_to_message_id: ctx.message.message_id
        });
    });

})();

bot.launch()
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
