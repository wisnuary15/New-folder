import fs from 'fs';
import fetch from 'node-fetch';
let handler = async (m, { conn }) => { 

         let caption = `*Mʏ Gᴄ Oғғɪᴄɪᴀʟ*`;
  conn.reply(m.chat, caption, m, {
      contextInfo: {
        externalAdReply: {
          title: "ꜰ ᴜ ʀ ɪ ɴ ᴀ ᴏ ɴ ʟ ʏ ᴏ ɴ ᴇ",
          thumbnailUrl: `${global.thumb}`,
          sourceUrl: sgc,
          mediaType: 1,
          renderLargerThumbnail: true, 
          showAdAttribution: true
        }
      }
    });
 }
 handler.help = ['gcbot', 'gcfurina'];
handler.tags = ['main'];
handler.command = /^(gcbot|groupbot|botgc|botgroup|gcfurina|groupfurina)$/i;
export default handler;