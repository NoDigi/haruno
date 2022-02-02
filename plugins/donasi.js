let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(thumbfoto)).buffer(), `
┌〔 Donasi • Topup 〕
├ Digi✨: 60149431385
├ Umobile✨: 60189830350
├ Digi✨: 60149431385
├ Umobile✨: 60189830350
├ 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 𝐆𝐑𝐎𝐔𝐏 𝐁𝐎𝐓 𝐋𝐘𝐍¹
├ https://chat.whatsapp.com/BCkOrQkTa7pIORSOWyBJpk
├ 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 𝐆𝐑𝐎𝐔𝐏 𝐁𝐎𝐓 𝐋𝐘𝐍²
├ https://chat.whatsapp.com/GzDQlgoUamS5Ok4EOcYRRB
└────
`.trim(), watermark, 'Menu', '.menu', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
