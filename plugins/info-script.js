import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {

let str = `
🚩 Gak ada Om 🗿
owner contact
wa.me/6283846677065`
conn.sendMessage(m.chat, {
text: str,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
