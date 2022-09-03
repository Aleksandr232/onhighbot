const { Telegraf, Markup } = require('telegraf');
require('dotenv').config()
const commBot = require('./const')


const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) =>ctx.reply(`Привет, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'друг'}, я помогу тебе с высотными работами`));
bot.hears('Привет', (ctx) => ctx.reply('Привет, помогу с высотными работами'));
bot.help((ctx)=>ctx.reply(commBot.commands))
bot.command('site', (ctx)=>{
    ctx.replyWithHTML('<a href="http://on-high.ru/">Наш сайт</a>')
})


bot.command('menu', async (ctx)=>{
   try{
    await ctx.replyWithHTML('<b>Меню</b>', Markup.inlineKeyboard(
        [
            [Markup.button.callback('Фото', 'btn_1'), Markup.button.callback('Видео', 'btn_2'), Markup.button.callback('Услуги', 'btn_3')],
            [Markup.button.callback('Контакты', 'btn_4')]
        ]
        
    ))
   }catch(e){
        console.error(e)
   }
})

bot.action('btn_1', async(ctx)=>{
    try{
        ctx.replyWithPhoto('https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Meierbau_cleaning.JPG/1200px-Meierbau_cleaning.JPG'),
        ctx.replyWithPhoto('https://www.aek-stroy.ru/wp-content/uploads/2019/03/photo32-1.jpeg'),
        ctx.replyWithPhoto('https://www.трубочист-л.рф/upload/information_system_6/1/9/9/item_199/item_199.jpg'),
        ctx.replyWithPhoto('https://alpinistspb.ru/wp-content/uploads/2020/05/o-professii-promyshlennyj-alpinist-2.jpg'),
        ctx.replyWithPhoto('https://alpinizm-77.ru/wp-content/uploads/promyshlenniy_alpinizm.jpg')
    }catch(e){
        console.error(e)
    }
})

bot.action('btn_2', (ctx)=>{
    try{
        ctx.replyWithVideo({source:'video.mp4'}),
        ctx.replyWithVideo({source:'video1.mp4'})
    }catch(e){
        console.error(e)
    }
})


bot.action('btn_4', (ctx)=>{
    try{
        ctx.replyWithContact(89991625236, 'Андрей')
    }catch(e){
        console.error(e)
    }
})


bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));