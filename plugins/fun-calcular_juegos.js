let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[βππππβ] πΈπ½πΆππ΄ππ΄ π΄π» @tag π³π΄ π°π»πΆππ½ πΏπ°πππΈπ²πΈπΏπ°π½ππ΄ π³π΄π» πΆπππΏπΎ πΎ π΄π» π½πΎπΌπ±ππ΄ π³π΄ π»π° πΏπ΄πππΎπ½π°*`

if (command == 'gay2') {
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(1000).getRandom()}%* *GAY*_ π³οΈβπ`.trim()
  
conn.sendHydrated(m.chat, juego, wm, null, md, 'πππ©ππ½π€π©-ππΏ', null, null, [
['πππ£πͺ ππͺπππ€π¨ | πππ’ππ¨ πππ£πͺ π‘', '#juegosmenu'],
['ππ©π§π π«ππ― | πΌππππ£ π€­', `${usedPrefix + command} ${text.toUpperCase()}`],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
  
//conn.reply(m.chat, `_*${text.toUpperCase()}* *ES π³οΈβπ* *${(500).getRandom()}%* *GAY*_`.trim(), m, m.mentionedJid ? {
//mentions: m.mentionedJid
//} : {})}

 // ------------------------
  
if (command == 'lesbiana') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ES π³οΈβπ* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})} 
if (command == 'pajero') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ES ππ¦* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}   
if (command == 'pajera') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ES ππ¦* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}     
if (command == 'puto') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *MΓS INFORMACIΓN A SU PRIVADO π₯π₯΅ XD*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}     
if (command == 'puta') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *MΓS INFORMACIΓN A SU PRIVADO π₯π₯΅ XD*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}   
if (command == 'manco') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} π©*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'manca') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} π©*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}     
if (command == 'rata') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} π COME QUESO π§*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'prostituto') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} π«¦π, QUIEN QUIERE DE SUS SERVICIOS? XD*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'prostituta') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} π«¦π, QUIEN QUIERE DE SUS SERVICIOS? XD*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}         
}
handler.help = ['gay2', 'lesbiana', 'pajero', 'pajera', 'puto', 'puta', 'manco', 'manca', 'rata', 'prostituta', 'prostituto'].map(v => v + ' @tag | nombre')
handler.tags = ['calculator']
handler.command = /^gay2|lesbiana|pajero|pajera|puto|puta|manco|manca|rata|prostituta|prostituto/i
handler.exp = 100
export default handler
