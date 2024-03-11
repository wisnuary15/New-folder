import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
         
/*============== SOCIAL ==============*/
global.sig = 'https://instagram.com/genkaku._' //instagram
global.sgh = '-' //github
global.sgc = 'https://chat.whatsapp.com/JB8ZPCnskdx6MhVbFfdnsH' //group whatsapp
global.saluran = 'https://linkbio.co/yukicanpedia' //saluran whatsapp
global.syt = 'https://www.youtube.com/@YukiCanPediaa' //youtube
global.swa = 'https://wa.me/62856017311419' //whatsapp
global.tele = 'https://t.me/' //telegram
global.sdc = 'https://discord.gg/' //discord
global.snh = '-' //nhentai

/*============== PAYMENT ==============*/
global.pdana = '-' //pulsa1
global.ppulsa = '-' //pulsa2
global.povo = '-' //ovo
global.gopay = '-' //gopay
global.dana = '-' //dana
global.sid = '-' //s.id
global.psaweria = '-' //saweria

/*============== NOMOR ==============*/
global.nomorwa = '6285601731141' //whatsapp
global.nomorbot = '6285601731141' //nomor Bot
global.nomorown = '62856016311419' //nomor Owner
global.namebot = 'ꜰᴜʀɪɴᴀ ᴏɴʟʏ ᴏɴᴇ' //nama Bot
global.nameown = 'ꜱʜɪQɪᴏɴʟʏᴏɴᴇ' //nama Owner

/*============== STAFF ==============*/
global.owner = [
  ['62856017311419', 'ꜱʜɪQɪᴏɴʟʏᴏɴᴇ', true] //creator/owner
] //put your number here
global.mods = [] //moderator
global.prems = [] //prem bukan disini

/*============== CPANEL ==============*/
global.domain = 'https://xxxxx' //domain
global.capikey = 'pltc_xxxxx' //pltc
global.apikey = 'plta_xxxxx' //plta

/*============== APIKEY ==============*/
global.lolkey = 'GataDios'
global.xkey = 'd90a9e986e18778b'
global.xzn = 'konekocyz'
global.lann = 'p8ADYJib'
global.xyro = '3WIq7q3CWt'

/*============== API ==============*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  lol: 'https://api.lolhuman.xyz', 
  xzn: 'https://skizo.tech',
  lann: 'https://api.betabotz.org', 
  xyro: 'https://api.xyroinee.xyz'
}

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.lolhuman.xyz': 'GataDios', //lolhuman
  'https://skizo.tech': 'konekocyz', //skizo
  'https://api.betabotz.org': 'p8ADYJib', //betabotz
  'https://api.xyroinee.xyz': '3WIq7q3CWt' //xyroine
}

/*============== VERSION ==============*/
global.version = '3.0.0'

/*============== WATERMARK ==============*/
global.wm = 'ꜱʜɪQɪᴏɴʟʏᴏɴᴇ' //wm1
global.wm2 = 'Ⓒ ꜱʜɪQɪᴏɴʟʏᴏɴᴇ' //wm2
global.wm3 = '• ꜰᴜʀɪɴᴀ ᴏɴʟʏ ᴏɴᴇ' //wm3
global.namedoc = 'ꜱʜɪQɪᴏɴʟʏᴏɴᴇ' //nama document
global.botdate = `• ᴅᴀʏ's: ${week} ${date}`
global.bottime = `ᴛɪᴍᴇ: ${wktuwib}`
global.titlebot = '🎋 ┊ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ'
global.author = global.wm


/*============== LOGO ==============*/
global.thumb =  'https://telegra.ph/file/c11ba1f72fae836abceef.jpg'//thumbnailUtama
global.thumb2 = 'https://telegra.ph/file/2f28d49cfc86adb2a5e33.jpg'
global.thumbbc = 'https://telegra.ph/file/f73689808a71adde3ffb7.jpg' //broadcast
global.giflogo = 'https://telegra.ph/file/1368bd45c66e3dabdb3cb.mp4'
global.thumblvlup = 'https://telegra.ph/file/a9f3a51faa5019e2750f0.jpg'
global.thumbai = 'https://telegra.ph/file/9ba2335398f0034adb500.jpg'
global.thumbai2 = 'https://telegra.ph/file/9ba2335398f0034adb500.jpg'
global.thumbmiku = 'https://telegra.ph/file/9ba2335398f0034adb500.jpg'
global.thumbnezuko = 'https://telegra.ph/file/9ba2335398f0034adb500.jpg'
global.thumbnobara = 'https://telegra.ph/file/9ba2335398f0034adb500.jpg'
global.hwaifu = ['https://telegra.ph/file/9ba2335398f0034adb500.jpg']

/*============== FlamingText ===========*/
global.flaaa = [
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=', 
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='] 

/*============== TEXT ==============*/
global.wait = '🚩 ʟᴏᴀᴅɪɴɢ ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ... '
global.eror = '```404 error```'
global.dtu = 'ɪɴꜱᴛᴀɢʀᴀᴍ'
global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ'
global.phn = '+62 856-0173-11419'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
global.djson = 'application/json'

global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊↬' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer

// COMMAND MENU
global.dashmenu = '┅━━━═┅═❏ *ღ 𝘿𝘼𝙎𝙃𝘽𝙊𝘼𝙍𝘿 ღ* ❏═┅═━━━┅'
global.cmenut = '❏––––––『'                       //top
global.cmenuh = '』––––––'                        //header
global.cmenub = '┊❀'                            //body
global.cmenuf = '┗━═┅═━––––––๑\n'                //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ' //after
global.pmenus = '┊'                              //pembatas menu selector

global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '⫹⫺'    //hiasan
global.hsquere = ['⛶','❏','⫹⫺']

/*============== STICKER WM ==============*/
global.stickpack = 'ꜰᴜʀɪɴᴀ ᴏɴʟʏ ᴏɴᴇ'
global.stickauth = `ꜰ\nᴜ\nʀ\nɪ\nɴ\nᴀ\n ᴏ\nɴ\nʟ\nʏ\n ᴏ\nɴ\nᴇ\nwa.me/${global.nomorbot}`
global.packname = 'sᴛɪᴄᴋᴇʀ ʀᴇǫᴜᴇsᴛ ʙʏ'
global.packname2 = 'ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜰᴜʀɪɴᴀ ᴏɴʟʏ ᴏɴᴇ'

global.multiplier = 38 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
