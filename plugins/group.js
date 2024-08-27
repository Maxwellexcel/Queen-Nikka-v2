const config = require('../config')
const { cmd, commands } = require('../command')

 cmd({
    pattern: "promote",
    desc: "Promote a member to admin.",
    category: "group",
    react: "✔️",
    filename: __filename
 },
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply('This command can only be used in a group.')
        if (!isBotAdmins) return reply('Bot must be an admin to use this command.')
        if (!isAdmins) return reply('You must be an admin to use this command.')

        const user = m.mentioned[0] || m.quoted?.sender
        if (!user) return reply('Please tag or reply to a user to promote.')

        await conn.groupParticipantsUpdate(from, [user], 'promote')
        await reply(`@${user.split('@')[0]} has been promoted to admin.`, { mentions: [user] })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

 cmd({
    pattern: "demote",
    desc: "Demote an admin to member.",
    category: "group",
    react: "💀",
    filename: __filename
 },
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply('This command can only be used in a group.')
        if (!isBotAdmins) return reply('Bot must be an admin to use this command.')
        if (!isAdmins) return reply('You must be an admin to use this command.')

        const user = m.mentioned[0] || m.quoted?.sender
        if (!user) return reply('GIMME SOMEONE 💀.')

        await conn.groupParticipantsUpdate(from, [user], 'demote')
        await reply(`@${user.split('@')[0]} has been demoted to member.`, { mentions: [user] })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
cmd({
    pattern: "remove",
    desc: "Remove a member from the group.",
    category: "group",
    react: "💀",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply('This command can only be used in a group.')
        if (!isBotAdmins) return reply('Bot must be an admin to use this command.')
        if (!isAdmins) return reply('You must be an admin to use this command.')

        const user = m.mentioned[0] || m.quoted?.sender
        if (!user) return reply('Please tag or reply to a user to remove.')

        await conn.groupParticipantsUpdate(from, [user], 'remove')
        await reply(`@${user.split('@')[0]} GONE💀✔️.`, { mentions: [user] })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

 cmd({
    pattern: "add",
    desc: "Add a member to the group.",
    category: "group",
    react: "➕",
    filename: __filename
 },
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply('This command can only be used in a group.')
        if (!isBotAdmins) return reply('Bot must be an admin to use this command.')
        if (!isAdmins) return reply('You must be an admin to use this command.')

        const user = q.split(' ')[0]
        if (!user) return reply('Please provide a phone number to add.')

        await conn.groupParticipantsUpdate(from, [`${user}@s.whatsapp.net`], 'add')
        await reply(`@${user} has been added to the group.`, { mentions: [`${user}@s.whatsapp.net`] })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

 cmd({
    pattern: "setgoodbye",
    desc: "Set the goodbye message for the group.",
    category: "group",
    react: "👋",
    filename: __filename
 },
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply('This command can only be used in a group.')
        if (!isBotAdmins) return reply('Bot must be an admin to use this command.')
        if (!isAdmins) return reply('You must be an admin to use this command.')

        const goodbye = q
        if (!goodbye) return reply('Please provide a goodbye message.')

        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: goodbye })
        await reply('Goodbye message has been set.')
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

 cmd({
    pattern: "setwelcome",
    desc: "Set the welcome message for the group.",
    category: "group",
    react: "👋",
    filename: __filename
 },
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply('This command can only be used in a group.')
        if (!isBotAdmins) return reply('Bot must be an admin to use this command.')
        if (!isAdmins) return reply('You must be an admin to use this command.')

        const welcome = q
        if (!welcome) return reply('Please provide a welcome message.')

        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: welcome })
        await reply('Welcome message has been set.')
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})


 cmd({
   pattern: "rejectall",
   desc: "reject all request to join!",
   category: "group",
   react: "💀",
   filename: __filename
 }, async (_0xb81e45, _0x3dda5f) => {
   try {
     if (!_0xb81e45.isGroup) {
       return _0xb81e45.reply(tlang().group);
     }
     if (!_0xb81e45.isBotAdmin || !_0xb81e45.isAdmin) {
       return await _0xb81e45.reply(!_0xb81e45.isBotAdmin ? "*_I'm Not an admin" + (!_0xb81e45.isCreator ? ", man" : "") + "_*" : tlang().admin);
     }
     const _0x4ea369 = await _0xb81e45.bot.groupRequestParticipantsList(_0xb81e45.chat);
     if (!_0x4ea369 || !_0x4ea369[0]) {
       return await _0xb81e45.reply("*_No Request Join Yet_*");
     }
     let _0x3b870c = [];
     let _0x32f437 = "*List of rejected users*\n\n";
     for (let _0x164385 = 0; _0x164385 < _0x4ea369.length; _0x164385++) {
       try {
         await _0xb81e45.bot.groupRequestParticipantsUpdate(_0xb81e45.from, [_0x4ea369[_0x164385].jid], "reject");
         _0x32f437 += "@" + _0x4ea369[_0x164385].jid.split("@")[0] + "\n";
         _0x3b870c = [..._0x3b870c, _0x4ea369[_0x164385].jid];
       } catch {}
     }
     await _0xb81e45.send(_0x32f437, {
       mentions: [_0x3b870c]
     });
   } catch (_0x13cc87) {
     await _0xb81e45.error(_0x13cc87 + "\n\ncommand: rejectall", _0x13cc87);
   }
 });


 cmd({
   pattern: "acceptall",
   desc: "accept all request to join",
   react: "🌞"
   category: "group",
   filename: __filename
 }, async (_0x90a6de, _0x5537ca) => {
   try {
     if (!_0x90a6de.isGroup) {
       return _0x90a6de.reply(tlang().group);
     }
     if (!_0x90a6de.isBotAdmin || !_0x90a6de.isAdmin) {
       return await _0x90a6de.reply(!_0x90a6de.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x90a6de.isCreator ? ", man" : "") + "_*" : tlang().admin);
     }
     const _0x3da7c6 = await _0x90a6de.bot.groupRequestParticipantsList(_0x90a6de.chat);
     if (!_0x3da7c6 || !_0x3da7c6[0]) {
       return await _0x90a6de.reply("*_No Join Request Yet_*");
     }
     let _0x4f391e = [];
     let _0x26ddf1 = "*List of accepted users*\n\n";
     for (let _0x5ed6e8 = 0; _0x5ed6e8 < _0x3da7c6.length; _0x5ed6e8++) {
       try {
         await _0x90a6de.bot.groupRequestParticipantsUpdate(_0x90a6de.from, [_0x3da7c6[_0x5ed6e8].jid], "approve");
         _0x26ddf1 += "@" + _0x3da7c6[_0x5ed6e8].jid.split("@")[0] + "\n";
         _0x4f391e = [..._0x4f391e, _0x3da7c6[_0x5ed6e8].jid];
       } catch {}
     }
     await _0x90a6de.send(_0x26ddf1, {
       mentions: [_0x4f391e]
     });
   } catch (_0x366bd4) {
     await _0x90a6de.error(_0x366bd4 + "\n\ncommand: acceptall", _0x366bd4);
   }
 });
 
 cmd({
   pattern: "setdesc",
   desc: "Set Description of Group",
   react: "🗂️",
   category: "group",
   filename: __filename,
   use: "<enter Description Text>"
 }, async (_0x160b96, _0x4ef0da) => {
   try {
     if (!_0x160b96.isGroup) {
       return _0x160b96.reply(tlang().group);
     }
     if (!_0x4ef0da) {
       return await _0x160b96.reply("*Provide Description text, You wants to Set*");
     }
     if (!_0x160b96.isBotAdmin || !_0x160b96.isAdmin) {
       return await _0x160b96.reply(!_0x160b96.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x160b96.isCreator ? ", Idiot" : "") + "_*" : tlang().admin);
     }
     try {
       await _0x160b96.bot.groupUpdateDescription(_0x160b96.chat, _0x4ef0da + "\n\n\t" + Config.caption);
       _0x160b96.reply("*_✅Group description Updated Successfuly!_*");
     } catch (_0x986809) {
       await _0x160b96.reply("*_Can't update description, Group Id not found!!_*");
     }
   } catch (_0x526bb2) {
     await _0x160b96.error(_0x526bb2 + "\n\ncommand: setdesc", _0x526bb2);
   }
 });

 cmd({
   pattern: "ginfo",
   desc: "get group info by link",
   category: "group",
   react: "🗂️",
   filename: __filename,
   use: "<group link.>"
 }, async (_0x4f7c88, _0x1490e0) => {
   try {
     let _0x3eb855 = _0x1490e0 ? _0x1490e0 : _0x4f7c88.reply_text;
     const _0x3e5033 = _0x3eb855.match(grouppattern) || false;
     if (!_0x3e5033) {
       return await _0x4f7c88.reply("*_Uhh Please, provide group link_*");
     }
     let _0x5ced5d = _0x3e5033[0].split("https://chat.whatsapp.com/")[1].trim();
     const _0x5f4890 = await _0x4f7c88.bot.groupGetInviteInfo(_0x5ced5d);
     if (_0x5f4890) {
       const _0x40ced5 = new Date(_0x5f4890.creation * 1000);
       var _0x10288a = _0x40ced5.getFullYear();
       var _0x436585 = _0x40ced5.getMonth() + 1;
       var _0x511884 = _0x40ced5.getDate();
       var _0x236a49 = _0x10288a + "-" + _0x436585.toString().padStart(2, "0") + "-" + _0x511884.toString().padStart(2, "0");
       var _0x56eaaf = {
         externalAdReply: {
           title: "QUEEN NIKKA 👑",
           body: _0x5f4890.subject,
           renderLargerThumbnail: true,
           thumbnail: log0,
           mediaType: 1,
           mediaUrl: _0x3e5033[0],
           sourceUrl: _0x3e5033[0]
         }
       };
       
let mtypes = ["imageMessage"];
 cmd({
   pattern: "gpp",
   desc: "Set Group profile picture",
   category: "group",
   react: "🗂️"
   use: "<reply to image>",
   filename: __filename
 }, async _0x5ac912 => {
   try {
     if (!_0x5ac912.isGroup) {
       return await _0x5ac912.send(tlang().group, {}, "", _0x5ac912);
     }
     if (!_0x5ac912.isBotAdmin || !_0x5ac912.isAdmin) {
       return await _0x5ac912.reply(!_0x5ac912.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x5ac912.isCreator ? ", Idiot" : "") + "_*" : tlang().admin);
     }
     let _0xc0618e = mtypes.includes(_0x5ac912.mtype) ? _0x5ac912 : _0x5ac912.reply_message;
     if (!_0xc0618e || !mtypes.includes(_0xc0618e?.mtype || "need_Media")) {
       return await _0x5ac912.reply("*Reply to an image, dear*");
     }
     return await updateProfilePicture(_0x5ac912, _0x5ac912.chat, _0xc0618e, "gpp");
   } catch (_0x5abd07) {
     await _0x5ac912.error(_0x5abd07 + "\n\ncommand : gpp", _0x5abd07);
   }
 });
 
 cmd({
   pattern: "tagall",
   desc: "Tags every person of group.",
   react: "✍️"
   category: "group",
   filename: __filename
 }, async (_0x1ed055, _0x929954) => {
   try {
     if (!_0x1ed055.isGroup) {
       return _0x1ed055.reply(tlang().group);
     }
     const _0x5d614a = _0x1ed055.metadata.participants || {};
     if (!_0x1ed055.isAdmin && !_0x1ed055.isCreator) {
       return _0x1ed055.reply(tlang().admin);
     }
     let _0x392a2d = "\n══✪〘   *GROUP MEMBERS*   〙✪══\n\n➲ *Message :* " + (_0x929954 ? _0x929954 : "blank Message") + " \n " + Config.caption + " \n\n\n➲ *Tagger:* " + _0x1ed055.pushName + " 🔖\n";
     for (let _0x502431 of _0x5d614a) {
       if (!_0x502431.id.startsWith("2348121373516")) {
         _0x392a2d += " 🗂️ @" + _0x502431.id.split("@")[0] + "\n";
       }
     }
     await _0x1ed055.bot.sendMessage(_0x1ed055.chat, {
       text: _0x392a2d,
       mentions: _0x5d614a.map(_0x3696c5 => _0x3696c5.id)
     }, {
       quoted: _0x1ed055
     });
   } catch (_0x4450f8) {
     await _0x1ed055.error(_0x4450f8 + "\n\ncommand: tagall", _0x4450f8, false);
   }
 });
 
 cmd({
   pattern: "left",
   desc: "left from a group.",
   react: "🚶‍♂️"
   fromMe: true,
   category: "group",
   filename: __filename
 }, async (_0x37841c, _0x260aed) => {
   try {
     if (!_0x37841c.isGroup) {
       return await _0x37841c.send(tlang().group, {}, "", _0x37841c);
     }
     let _0x6118c5 = _0x260aed.toLowerCase().trim();
     if (_0x6118c5.startsWith("sure") || _0x6118c5.startsWith("ok") || _0x6118c5.startsWith("yes")) {
       await _0x37841c.bot.groupParticipantsUpdate(_0x37841c.chat, [_0x37841c.user], "remove");
       _0x37841c.send("*Group Left!!*", {}, "", _0x37841c, _0x37841c.user);
     } else {
       return await _0x37841c.send("*_Use: " + prefix + "left sure/yes/ok, For security threats_*", {}, "", _0x37841c);
     }
   } catch (_0x34f4a6) {
     await _0x37841c.error(_0x34f4a6 + "\n\ncommand: left", _0x34f4a6, false);
   }
 });
