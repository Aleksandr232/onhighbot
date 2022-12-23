const { Telegraf, Markup, Composer } = require("telegraf");
require("dotenv").config();
const commBot = require("./const");
const webPort = 'https://newportfolio-sooty-kappa.vercel.app/'
const web = 'https://web-onhige.vercel.app/'
const site = 'https://on-high.ru/'
const admin = 'https://webadmin-rm5bho9ld-aleksandr232.vercel.app/'
const cron = require('node-cron')
const axios = require('axios')
const bot = new Telegraf(process.env.BOT_TOKEN);


const TOKEN ='5784348887:AAEf498gjGd0gXuH6nfJC3KpjV_w1lWsot4';
const CHAT_ID = '-1001803523687';
const uri_api = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const password = '123'

bot.start(async(ctx) =>{
  function users(){
    let message =`<b>Кто зашел в бота НА ВЫСОТЕ</b>\n`;
    message += `<b>бота запустил:</b> ${ctx.message.from.first_name} ${ctx.message.from.last_name} и  @${ctx.message.from.username}\n`;
    axios.post(uri_api,{
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message 
    })
    
  }
  
    cron.schedule("0 0 10 * * *", async ()=>{
        await ctx.replyWithHTML('<b>Пора чистить крыши</b>'),
        await ctx.replyWithHTML('<b>Не нужно ждать, пока сам сойдет</b>'),
        await  ctx.replyWithHTML('<b>Выезд опытных альпинистов</b>'),
        await ctx.replyWithHTML('<b>Свяжись!!!</b>')
    })
 
 
    users()     
 await ctx.reply(
    `Привет, ${
      ctx.message.from.first_name ? ctx.message.from.first_name : "друг"
    }, я помогу тебе с высотными работами`
  )
  try{
    await ctx.reply('Используй в чате символ / и откроются доп.возможности', Markup.keyboard([
      ['Услуги', 'Цены'],
      /* ['Связаться'], */
      [Markup.button.webApp('Сайт', site )],
      [Markup.button.webApp('Оставить заявку', web )]
    
      
    ]).oneTime().resize())
    }catch(e){
      console.log(e)
    }
  });
bot.hears("Привет", (ctx) => ctx.reply("Привет, помогу с высотными работами"));
bot.hears("Цены", async (ctx) =>{  
try{
  await ctx.replyWithHTML('<b>Гидроструйная очистка фасада м² - 105 &#8381;</b>')
  await ctx.replyWithHTML('<b>Очистка фасада м² - 165 &#8381;</b>')
  await ctx.replyWithHTML('<b>Огрунтовка фасада "Валиком" м² - 60 &#8381;</b>')
  await ctx.replyWithHTML('<b>Окраска фасада м² - 100 &#8381;</b>')
  await ctx.replyWithHTML('<b>Очистка кровли от снега м² - от 60 &#8381;</b>')
  await ctx.replyWithHTML('<b>Установка внешнего блока кондиционера - 7000 &#8381;</b>')
  await ctx.replyWithHTML('<b>Мойка окон м² - от 50  &#8381;</b>')
  await ctx.replyWithHTML('<b>Ремонт межпанельных швов м² - от 800  &#8381;</b>')
  await ctx.replyWithHTML('<b>Установка снегозадержателей пог.м - от 1000  &#8381;</b>')
  await ctx.replyWithHTML('<b>Выезд альпиниста 6000  &#8381;</b>')
  await ctx.replyWithHTML('<b>Монтаж банеров м² - от 1200 &#8381;</b>')
  await ctx.replyWithHTML('<b>Монтаж строительных лесов(туры) м²  - от 90 &#8381;</b>')
  await ctx.replyWithHTML('<b>Герметизация кровли (ремонт кровли)   - от 500 &#8381;</b>')
  await ctx.replyWithHTML('<b>Монтаж водосточный системы   - от 1800  &#8381; м</b>')
  await ctx.replyWithHTML('<b>Другие виды работ - по договоренности </b>')
}catch(e){
  console.error(e)
}
});


  
  bot.hears(password, (ctx)=>{
    ctx.replyWithHTML('зайти в панель', Markup.inlineKeyboard([
      [
        Markup.button.webApp("admin💻", admin),
      ]
    ]))
  })



bot.hears("Услуги", async (ctx) =>{  
    try{
      await ctx.replyWithHTML('<a>Фасадные работы - это сложный комплекс  мероприятий направленный восстановления, утепление, предание красивого внешнего вида, защитное свойство от внешних - вредных воздействий окружающий среды на фасаде вашего дома.</a>',
      ctx.replyWithPhoto('http://on-high.ru/wp-content/themes/shabloner_901/files/ct_block_item_85605_898843_5_image_PJnTHAkO.jpg')),
      await ctx.replyWithHTML('<a>Монтаж кондиционеров - установка кондиционера альпинистом выполняется в определенном порядке: монтируют наружные и внутренние блоки, прокладывают трубопроводы для хладагента, подводят электрокоммуникации и собирают автоматические предохранители выключателей.</a>',
      ctx.replyWithPhoto('https://alpinisti.ru/wp-content/uploads/2021/07/1475486223_0_492d_30a0711b_xl.jpg')),
      await ctx.replyWithHTML('<a>Клининговые работы - профессиональная мойка стеклянных поверхностей и керамогранитных фасадов (вентфасадов) высоток методом промышленного альпинизма выполняется с использованием специального инструментария и мыльного раствора.</a>',
      ctx.replyWithPhoto('https://gor-m.ru/sites/default/files/moika-okon-na-vysote.jpg')),
      await ctx.replyWithHTML('<a>Высотный монтаж - привлечение альпиниста для выполнения высотных монтажных работ, является более выгодным и целесообразным решением, чем монтаж строительных лесов или привлечение тяжелой строительной техники на объект. А зачастую бывает просто не возможно обойтись без привлечения промышленного альпинизма.</a>',
      ctx.replyWithPhoto('https://prom-alp.biz/wp-content/uploads/230120209_227669-1-600x450.jpg')) 
      }catch(e){
          console.error(e)
      }
  });

  bot.hears("Контакты", async (ctx) =>{  
    try {
      await ctx.replyWithContact('+79063207897', 'Андрей')
      await ctx.replyWithContact('+79061128191', 'Артур')
     } catch (e) {
       console.error(e);
     }
  });

  bot.hears("Связаться", async (ctx) =>{  
    try {
      await ctx.replyWithContact('+79063207897', 'Андрей')
      await ctx.replyWithContact('+79061128191', 'Артур')
     } catch (e) {
       console.error(e);
     }
  });

bot.help((ctx) => ctx.reply(commBot.commands));
bot.command("site", (ctx) => {
  ctx.replyWithHTML('<a href="http://on-high.ru/">Наш сайт</a>');
});
bot.command("coder", async (ctx) => {
  try {
    await ctx.replyWithContact("+79991625236", "Саша");
    await ctx.replyWithHTML('<b>Портфолио</b>', Markup.inlineKeyboard([
      [
        Markup.button.webApp("Личный сайт💻", webPort),
      ],  
    ]))
  } catch (e) {
    console.error(e);
  }
});

bot.command("menu", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      "<b>Меню</b>",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("Фото", "btn_1"),
          Markup.button.callback("Видео", "btn_2"),
          Markup.button.callback("Услуги", "btn_3"),
          Markup.button.callback("Контакты", "btn_4"),
        ],
        [
          Markup.button.callback("Цены", "btn_5"),
        ]
        
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

bot.action("btn_1", async (ctx) => {
  try {
    ctx.replyWithPhoto(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Meierbau_cleaning.JPG/1200px-Meierbau_cleaning.JPG"
    ),
      ctx.replyWithPhoto(
        "https://www.aek-stroy.ru/wp-content/uploads/2019/03/photo32-1.jpeg"
      ),
      ctx.replyWithPhoto(
        "https://www.трубочист-л.рф/upload/information_system_6/1/9/9/item_199/item_199.jpg"
      ),
      ctx.replyWithPhoto(
        "https://alpinistspb.ru/wp-content/uploads/2020/05/o-professii-promyshlennyj-alpinist-2.jpg"
      ),
      ctx.replyWithPhoto(
        "https://alpinizm-77.ru/wp-content/uploads/promyshlenniy_alpinizm.jpg"
      );
  } catch (e) {
    console.error(e);
  }
});

bot.action("btn_2", (ctx) => {
  try {
    ctx.replyWithVideo({ source: "video.mp4" }),
      ctx.replyWithVideo({ source: "video1.mp4" });
  } catch (e) {
    console.error(e);
  }
});




bot.action("btn_3", async (ctx) => {
    try{
    await ctx.replyWithHTML('<a>Фасадные работы - это сложный комплекс  мероприятий направленный восстановления, утепление, предание красивого внешнего вида, защитное свойство от внешних - вредных воздействий окружающий среды на фасаде вашего дома.</a>',
    ctx.replyWithPhoto('http://on-high.ru/wp-content/themes/shabloner_901/files/ct_block_item_85605_898843_5_image_PJnTHAkO.jpg')),
    await ctx.replyWithHTML('<a>Монтаж кондиционеров - установка кондиционера альпинистом выполняется в определенном порядке: монтируют наружные и внутренние блоки, прокладывают трубопроводы для хладагента, подводят электрокоммуникации и собирают автоматические предохранители выключателей.</a>',
    ctx.replyWithPhoto('https://alpinisti.ru/wp-content/uploads/2021/07/1475486223_0_492d_30a0711b_xl.jpg')),
    await ctx.replyWithHTML('<a>Клининговые работы - профессиональная мойка стеклянных поверхностей и керамогранитных фасадов (вентфасадов) высоток методом промышленного альпинизма выполняется с использованием специального инструментария и мыльного раствора.</a>',
    ctx.replyWithPhoto('https://gor-m.ru/sites/default/files/moika-okon-na-vysote.jpg')),
    await ctx.replyWithHTML('<a>Высотный монтаж - привлечение альпиниста для выполнения высотных монтажных работ, является более выгодным и целесообразным решением, чем монтаж строительных лесов или привлечение тяжелой строительной техники на объект. А зачастую бывает просто не возможно обойтись без привлечения промышленного альпинизма.</a>',
    ctx.replyWithPhoto('https://prom-alp.biz/wp-content/uploads/230120209_227669-1-600x450.jpg')) 
    }catch(e){
        console.error(e)
    }
});


bot.action("btn_4", async (ctx) => {
  try {
   await ctx.replyWithContact('+79063207897', 'Андрей')
   await ctx.replyWithContact('+79061128191', 'Артур')
  } catch (e) {
    console.error(e);
  }
});

bot.action('btn_5', async (ctx)=>{
  try{
    await ctx.replyWithHTML('<b>Гидроструйная очистка фасада м² - 105 &#8381;</b>')
    await ctx.replyWithHTML('<b>Очистка фасада м² - 165 &#8381;</b>')
    await ctx.replyWithHTML('<b>Огрунтовка фасада "Валиком" м² - 60 &#8381;</b>')
    await ctx.replyWithHTML('<b>Окраска фасада м² - 100 &#8381;</b>')
    await ctx.replyWithHTML('<b>Очистка кровли от снега м² - от 60 &#8381;</b>')
    await ctx.replyWithHTML('<b>Установка внешнего блока кондиционера - 7000 &#8381;</b>')
    await ctx.replyWithHTML('<b>Мойка окон м² - от 50  &#8381;</b>')
    await ctx.replyWithHTML('<b>Ремонт межпанельных швов м² - от 800  &#8381;</b>')
    await ctx.replyWithHTML('<b>Установка снегозадержателей пог.м - от 1000  &#8381;</b>')
    await ctx.replyWithHTML('<b>Выезд альпиниста 6000  &#8381;</b>')
    await ctx.replyWithHTML('<b>Монтаж банеров м² - от 1200 &#8381;</b>')
    await ctx.replyWithHTML('<b>Монтаж строительных лесов(туры) м²  - от 90 &#8381;</b>')
    await ctx.replyWithHTML('<b>Герметизация кровли (ремонт кровли)   - от 500 &#8381;</b>')
    await ctx.replyWithHTML('<b>Монтаж водосточный системы   - от 1800  &#8381; м</b>')
    await ctx.replyWithHTML('<b>Другие виды работ - по договоренности </b>')
  }catch(e){
    console.error(e)
  }
})


bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
