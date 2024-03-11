let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw(`Contoh:\n${usedPrefix}${command} Halo?`);   
  let ouh = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=nobara`)
  let gyh = await ouh.json() 
  await conn.sendMessage(m.chat, {
  text: `${gyh.result}`,
      contextInfo: {
      externalAdReply: {
        title: 'Nobara Kugisaki - C.ai',
        body: 'E L A I N A  M U L T I D E V I C E',
        thumbnailUrl: `${global.thumbnobara}`,
        sourceUrl: sgc,
        mediaType: 1,
        renderLargerThumbnail: true, 
        showAdAttribution: true
      }}
  })}
handler.command = /^(cainobara)$/i
handler.help = ['cainobara']
handler.tags = ['character-ai']
handler.premium = false

export default handler;