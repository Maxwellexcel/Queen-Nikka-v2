const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "about",
    desc: "To get the bot informations.",
    react: "🖱️",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let about = ` Hi there ${senderNumber} my name is Nikka  
              i was created by haki to make WhatsApp easy for you
              
              > *© 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙺𝙺𝙰*
              > *𝚁𝙴𝙿𝙾𝚂𝙸𝚃𝙾𝚁𝚈 :* github.com/hakisolos/QUEEN_NIKKA
              
               HOPE YOU ARE SATISFIED? if not report any problem to https://wa.me/8121373516`
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:about},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})


