let handler = async(m, { conn, text, usedPrefix, command}) => {
    if (!text) return conn.reply(m.chat, `*— YULA JOIN GROUP*\n\n*7 Day join the group*\n- OrderID: G7\n- Price: Rp. 7.000 IDR\n\n*30 Day join the group*\n- OrderID: G30\n- Price: Rp. 15.000 IDR\n\n*365 Day join the group*\n- OrderID: G365\n- Price: Rp. 110.000 IDR\n\n\n`, m)
    let orderID;

  switch(text) {
      case '3':
      orderID = '3';
      break;
      case '7':
      orderID = '7';
      break;
      case '30':
      orderID = '30';
      break;
      case '60':
      orderID = '60';
      break;
       case '90':
      orderID = '90';
      break;
       case '365':
      orderID = '365';
      break;
      case 'G7':
      orderID = 'G7';
      break;
      case 'G30':
      orderID = 'G30';
      break;
      case 'G365':
      orderID = 'G365';
      break;
      default:
      throw `*OrderID* yang dipilih tidak tersedia, Silahkan pilih *OrderID* di bawah.
      
*— ELAINA JOIN GROUP*

*7 Day join the group*
- OrderID: G7
- Price: Rp. 7.000 IDR

*30 Day join the group*
- OrderID: G30
- Price: Rp. 15.000 IDR

*365 Day join the group*
- OrderID: G365
- Price: Rp. 110.000 IDR


`;
  };
    var nomor = m.sender
    const teks1 = `*[ O R D E R  F U R I N A ]*\nNomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nORDER : ${orderID}`
    conn.reply('62856017311419@s.whatsapp.net', teks1, m)
    conn.reply(m.chat, '✔️ Orderan mu sudah di kirim ke OWNER, Harap tunggu pesan dari OWNER', m)
}
handler.help = ['order'];
handler.tags = ['main'];
handler.command =  /(order|sewa)/i
handler.register = false;
handler.premium = false;

export default handler