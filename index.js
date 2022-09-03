const { Telegraf } = require('telegraf');
require('dotenv').config()
const commBot = require('./const')


const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) =>ctx.reply(`Привет, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'друг'}, я помогу тебе с высотными работами`));
bot.hears('Привет', (ctx) => ctx.reply('Привет, помогу с высотными работами'));
bot.help((ctx)=>ctx.reply(commBot.commands))

bot.command('site', (ctx)=>{
    ctx.replyWithHTML('<a href="http://on-high.ru/">Наш сайт</a>')
})

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));