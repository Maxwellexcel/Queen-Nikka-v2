const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "alive",
    desc: "To Check the bot online or no.",
    react: "😘",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{




let aliveMessage = ` 
⌜✵[ * '~' ✦ 𝑸𝑼𝑬𝑬𝑵 𝑵𝑰𝑲𝑲𝑨 𝑩𝑶𝑻 ✦ '~' * ]✵⌟
 

*𝙸𝙼 𝙰𝙻𝙸𝚅𝙴🥵!* 

 > up and running!
           Runtime : ${runtime(process.uptime())}
 > *𝙲𝚁𝙴𝙰𝚃𝙾𝚁:* 𝙷𝙰𝙺𝙸
 


> *𝙴𝙽𝙹𝙾𝚈!* 

*💻 𝚁𝙴𝙿𝙾:* github.com/hakisolos/QUEEN_NIKKA `

await conn.sendMessage(from, { audio: { url: voice.alive }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })

return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:aliveMessage},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})



