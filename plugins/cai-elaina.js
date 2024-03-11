let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw(`Contoh:\n${usedPrefix}${command} Halo?`);   
  let ouh = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=Elaina`)
  let gyh = await ouh.json() 
  await conn.sendMessage(m.chat, {
  text: `${gyh.result}`,
      contextInfo: {
      externalAdReply: {
        title: 'ꜰ ᴜ ʀ ɪ ɴ ᴀ - C.ai',
        body: 'ꜰ ᴜ ʀ ɪ ɴ ᴀ ᴏ ɴ ʟ ʏ ᴏ ɴ ᴇ',
        thumbnailUrl: `${global.thumbai2}`,
        sourceUrl: sgc,
        mediaType: 1,
        renderLargerThumbnail: true, 
        showAdAttribution: true
      }}
  })}
handler.command = /^(caifurina)$/i
handler.help = ['caifurina']
handler.tags = ['character-ai']
handler.premium = false

export default handler;