import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, generateWAMessageFromContent, }) => {
let loadd = [
 '《██▒▒▒▒▒▒▒▒▒▒▒》10%',
 '《████▒▒▒▒▒▒▒▒▒》30%',
 '《█████████████》100%',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
    let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw, statusupdate, autogetmsg, antivirus, publicjoin } = global.db.data.settings[conn.user.jid]
    const chats = Object.keys(await conn.chats)
    const groups = Object.keys(await conn.groupFetchAllParticipating())
    const block = await conn.fetchBlocklist()
    
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let sts = ` – *ɪɴғᴏ ʙᴏᴛ ꜰᴜʀɪɴᴀ ᴏɴʟʏ ᴏɴᴇ*
    
┌ ◦ ᴀᴋᴛɪғ sᴇʟᴀᴍᴀ ${uptime}
│ ◦ *${groups.length}* ɢʀᴜᴘ
│ ◦ *${chats.length - groups.length}* ᴄʜᴀᴛ ᴘʀɪʙᴀᴅɪ
│ ◦ *${Object.keys(global.db.data.users).length}* ᴘᴇɴɢɢᴜɴᴀ
│ ◦ ${block == undefined ? '*0* ᴅɪʙʟᴏᴄᴋɪʀ' : '*' + block.length + '* ᴅɪʙʟᴏᴄᴋɪʀ'}
│ ◦ *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* ᴄʜᴀᴛ ᴛᴇʀʙᴀɴɴᴇᴅ
└ ◦ *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* ᴘᴇɴɢɢᴜɴᴀ ᴛᴇʀʙᴀɴɴᴇᴅ

ꜰᴜʀɪɴᴀ ᴏɴʟʏ ᴏɴᴇ`
await conn.sendMessage(m.chat, {
	        video: fs.readFileSync('./media/infonya.mp4'),
            mimetype: 'video/mp4',
            fileLength: 100000,
            caption: sts,
            gifPlayback: true,
            gifAttribution: 5,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    forwardingScore: 2023,
                    title: 'ꜰ ᴜ ʀ ɪ ɴ ᴀ ᴏ ɴ ʟ ʏ ᴏ ɴ ᴇ',
                    thumbnailUrl: `${global.thumb}`,
                    sourceUrl: sig,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    mentionedJid: [m.sender]
	}}}, { quoted: m,ephemeralExpiration: 86400});
	let anjay = fs.readFileSync('./vn/infobot.mp3')
      
	conn.sendFile(m.chat, anjay, "furina.mp3", null, m, true, {
		type: 'audioMessage',  
 ptt: true, 
seconds: 18,
fileLength: 18,
 ptt: true, contextInfo: { forwardingScore: 999, isForwarded: false, externalAdReply: {title: 'ꜰᴜʀɪɴᴀ ᴏɴʟʏ ᴏɴᴇ', body: wm, sourceUrl: `${global.sgc}`, thumbnail: await (await fetch(thumb)).buffer(),}}  
  }) 
}
handler.help = ['botstatus']
handler.tags = ['info']
handler.command = /^(infobot|botstatus|statusbot)?$/i

export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}