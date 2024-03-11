import fetch from "node-fetch";

let handler = async (m, { conn, usedPrefix, command, text }) => {
    if (!text) {
        return m.reply(`Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `);
    }

    try {
        conn.sendPresenceUpdate("recording", m.chat);
        const query = m.quoted && m.quoted.text ? `pesan sebelumnya: "${m.quoted.text}"\n\n${text}` : `${text}`;
        const apiUrl = `https://api.azz.biz.id/api/alicia?q=${encodeURIComponent(query)}&user=${m.chat}&key=alok`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data && data.respon) {
            await m.reply(data.respon);
        } else {
            return m.reply("Tidak ada respons yang valid dari API.");
        }
    } catch (err) {
        console.error(err);
        return m.reply("Terjadi kesalahan dalam menjawab pertanyaan");
    }
}

handler.command = /^(ai|openai|chatgpt|alicia|gpt)$/i;
handler.help = ["ai", "openai", "chatgpt", "alicia", "gpt"].map(v => v + " <teks>");
handler.tags = ["internet"];
handler.limit = true;
export default handler;
