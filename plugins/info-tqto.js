import fetch from 'node-fetch'
let handler = async (m, { conn, args, participants, text, usedPrefix, command }) => {

///GK USAH HAPUS TAMBAH IN AJA NAMA LO JANGAN HAPUS SATU NAMA PUN CREDITS NYAH TAU DIRI LAH TOT🗿
let tqto = `
*My Project:* 28 Juli 2023
*Name:* ${global.nameown}
*Contact:* wa.me/${global.nomorown}

⫹❰⫺ BiG Thanks To ⫹❱⫺
Allah Yang Maha Esa
Orang Tua
My Self
Teman

⫹⫺ The Name That Helped me ⫹⫺`
conn.sendMessage(m.chat, {
text: tqto,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} 
handler.help = ['tqto']
handler.tags = ['main','info']
handler.command = /^(credits|credit|tqto)$/i
export default handler
