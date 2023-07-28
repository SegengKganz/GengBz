import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;𝔊𝔢𝔫𝔤 𝔖𝔱𝔬𝔯𝔢\nNICKNAME:👑 Owner GengBotzz\nORG:Geng Store\nTITLE:soft\nitem1.TEL;waid=6283846677065:+62 838-4667-7065\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://www.youtube.com/@awersgamung\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:segengelek@gmail.com\nitem3.X-ABLabel:💌 Mail Owner Geng Store\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🐦 HAMDEH\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: global.fkontak })
let caption = `👋 Hai *@${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler