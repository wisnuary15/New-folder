import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"
let handler = async (m, { conn }) => {
let pp = 'https://telegra.ph/file/f73689808a71adde3ffb7.jpg'
try {
    pp = await conn.profilePictureUrl(m.sender, 'image')
  } catch (e) {
  }

let msg = await generateWAMessageFromContent(m.chat, { locationMessage: {
  degreesLatitude: 0,
  degreesLongitude: 0,
  name: `Yakin?`,
  address: `🐾 ᴅᴏɴᴀᴛᴇ 🐾`,
  url: 'Serius?',
  isLive: true,
  accuracyInMeters: 0,
  speedInMps: 0,
  degreesClockwiseFromMagneticNorth: 2,
  comment: ``,
  jpegThumbnail: await( await fetch(pp)).buffer()
}}, { quoted: m })

return conn.relayMessage(m.chat, msg.message, {})
}
handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^(donasi|donate)$/i

export default handler