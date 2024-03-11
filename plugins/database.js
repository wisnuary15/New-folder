import fs from 'fs'
import moment from 'moment-timezone'

let handler = async (m, { usedPrefix, command, conn, text }) => {
  let mentionedJid = [m.sender]
let name = conn.getName(m.sender)
let reyz = { key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    locationMessage: {
                    name: 'Japan`s',
                    jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
                          }
                        }
                      }
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let kon = `*Database Saat Ini ${totalreg} User*\n*Terdaftar Saat Ini ${rtotalreg} User*`
let loadd = [
 '《██▒▒▒▒▒▒▒▒▒▒▒》10%',
 '《████▒▒▒▒▒▒▒▒▒》30%',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
await conn.sendMessage(m.chat, {
text: kon,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `Database`,
body: 'ꜰ ᴜ ʀ ɪ ɴ ᴀ ᴏ ɴ ʟ ʏ ᴏ ɴ ᴇ',
thumbnailUrl: `${global.thumb}`,
sourceUrl: sig,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: reyz})
}
handler.help = ['user']
handler.tags = ['info']
handler.command = /^(pengguna|(jumlah)?database|user)$/i

export default handler
