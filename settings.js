//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
//recode kar ke youtube pe upload kar rhe hai ya
//codes copy kar ke apne script me dal rhe
//hai to, description me xeon ka yt channel
// ka link paste kr dena as a cradit or github 
//repo me bhi tag kardena baki jo
//bhi karna hai apki marzi, thank you!🦄
//════════════════════════════//
//If you recode and uploading on your channel
//or copy pasting the codes in ur script, 
//i give permission to do as long as you
//put Xeons youtube channel link in the video
//description and tag me on githuh repo, 
//thank you🦄
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['916238054812'] //ur owner number
global.ownername = "𝙑𝙄𝙋𝞢𝙍 𝙎𝞢𝙍🕊" //ur owner name
global.ytname = "Hehe Nthada nokkunne enthayalum vanne alle insta il follw akk🌝" //ur yt chanel name
global.socialm = "𝙄𝙉𝙎𝙏𝘼:_adaxxh" //ur github or insta name
global.location = "India, Kerala, God's own country 🕊" //ur location

//bot bomdy 
global.owner = ['916238054812']
global.ownertag = '91623805481' //ur tag number
global.botname = '🕊️⃞⋆⋆ ♰⃟〄ᴠɪᴘᴇʀ ʙᴏᴛ🇱🇷⃞➻➤' //ur bot name
global.linkz = "www.endilessboys.com" //your theme url which will be displayed on whatsapp
global.websitex = "www.instagram.com/_adaxxh" //ur website to be displayed
global.botscript = 'angane ne ee bot ondakanda' //script link
global.reactmoji = "🕊" //ur menu react emoji
global.themeemoji = "👻" //ur theme emoji
global.packname = "🕊️⃞⋆⋆ ♰⃟〄ᴠɪᴘᴇʀ ʙᴏᴛ🇱🇷⃞➻➤ \n\n\n\n\n\n\n\n\n\n\n🦄🦄🦄 " //ur sticker watermark packname
global.author = "𝙑𝙄𝙋𝞢𝙍 𝙎𝞢𝙍🕊" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/viperser.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/viperser.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/viperser.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/viperser.jpg") //ur thumb pic

//damtabase
global.premium = ['916909137213'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'Pooi Poyi Admin agu monu 😂!',
    botAdmin: 'Bot Ne Admin Akkada Punde!',
    owner: 'Ee Features oke owners ondakiya mathi angot mari nikk 😏!',
    group: 'Group il poyi adikada punde 😂!',
    private: 'Pm ba private Ayi Talk Cheyam 😌',
    bot: 'Endi illatha ninak eth cheyan pattilla 😂',
    wait: 'Onn adang myre 🙂',
    linkm: 'Link evide myre?',
    error: 'Aah umfi!!',
    endLimit: 'Poyit Adutha Monday Ba Hehe 😂, The Limit Will Be Reset Every 12 Hours',
    ban: 'Ninne evide nirodhichu 😂 Banned!!, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/viperser.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
