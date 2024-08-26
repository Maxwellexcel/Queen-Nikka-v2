const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "menu",
    desc: "To get the menu.",
    react: "👸",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
fun: '',
other: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = `
👉👑 ǫᴜᴇᴇɴ ɴɪᴋᴋᴀ - ᴍᴇɴᴜ👑👈

      ☺️ ɢᴏᴏᴅ ᴅᴀʏ, ${pushname}!

🤩 ᴛʜɪs ɪs ǫᴜᴇᴇɴ ɴɪᴋᴋᴀ 🤩 

 *sᴛᴀᴛs:*👇
────────────────────
👉 *ʙᴏᴛ ʀᴜɴᴛɪᴍᴇ:* ${runtime(process.uptime())}
👉 *ᴄʀᴇᴀᴛᴏʀ:* HAKI
👉 *ᴄʀᴇᴀᴛᴏʀ ᴄᴏɴᴛᴀᴄᴛ:* ${config.BOT_NUMBER}
────────────────────

👑*ᴅᴏᴡɴʟᴏᴀᴅ ᴏᴘᴛɪᴏɴs:*

${menu.download}

────────────────────»
👑 *ᴍᴀɪɴ ᴍᴇɴᴜ:*

${menu.main}

────────────────────»
👑*ғᴜɴ ᴀɴᴅ ɢᴀᴍᴇs:*

${menu.fun}

────────────────────»
👑 *ɢʀᴏᴜᴘ ᴍᴇɴᴜ:*

${menu.group}

────────────────────»
👑 *ᴏᴡɴᴇʀ ᴏɴʟʏ ᴍᴇɴᴜ:*

${menu.owner}

────────────────────»
👑 *ᴄᴏɴᴠᴇʀᴛ:*

${menu.convert}

────────────────────»
👑 *sᴇᴀʀᴄʜ:*

${menu.search}

────────────────────»
👑 *ᴏᴛʜᴇʀs:*

${menu.other}

────────────────────»
*© ᴍᴀᴅᴇ ʙʏ ʜᴀᴋɪ* 
💻 *REPOSITORY:* 👉 github.com/hakisolos/QUEEN_NIKKA
 

`

return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:madeMenu},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})


