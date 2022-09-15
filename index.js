const { Telegraf, Markup, Composer } = require("telegraf");
require("dotenv").config();
const commBot = require("./const");

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) =>
  ctx.reply(
    `Привет, ${
      ctx.message.from.first_name ? ctx.message.from.first_name : "друг"
    }, я помогу тебе с высотными работами`
  )
);
bot.hears("Привет", (ctx) => ctx.reply("Привет, помогу с высотными работами"));
bot.help((ctx) => ctx.reply(commBot.commands));
bot.command("site", (ctx) => {
  ctx.replyWithHTML('<a href="http://on-high.ru/">Наш сайт</a>');
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
  }catch(e){
    console.error(e)
  }
})


bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
