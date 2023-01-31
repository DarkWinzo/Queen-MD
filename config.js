/*
   ██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗      ███╗   ███╗██████╗ 
  ██╔═══██╗██║   ██║██╔════╝██╔════╝████╗  ██║      ████╗ ████║██╔══██╗
  ██║   ██║██║   ██║█████╗  █████╗  ██╔██╗ ██║█████╗██╔████╔██║██║  ██║
  ██║▄▄ ██║██║   ██║██╔══╝  ██╔══╝  ██║╚██╗██║╚════╝██║╚██╔╝██║██║  ██║   
  ╚██████╔╝╚██████╔╝███████╗███████╗██║ ╚████║      ██║ ╚═╝ ██║██████╔╝   
   ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═══╝      ╚═╝     ╚═╝╚═════╝   
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '805a6c3fa9',
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
global.session = process.env.SESSION_ID || 'eVRObVM3Wmg=',
global.ownername = process.env.OWNER_NAME === undefined ? "DINESH BOT" : process.env.OWNER_NAME
let fake = process.env.OWNER_NUMBER === undefined ? '0781536595' : process.env.OWNER_NUMBER
global.owner = [`${fake}`]
global.ownernumber = [`${fake}`]
global.premium = [`${fake}`]
global.anticall = process.env.ANTICALL === undefined ? 'false' : process.env.ANTICALL
global.packname = process.env.PACK_NAME === undefined ? 'Queen-MD' : process.env.PACK_NAME
global.author = process.env.STICKER_AUTHOR_NAME === undefined ? 'DarkWinzo' : process.env.STICKER_AUTHOR_NAME

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
global.Botname = 'Q'+'ᴜ'+'ᴇ'+'ᴇ'+'ɴ'+'-'+'ᴍ'+'ᴅ'
global.prefa = ['.']
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
global.mess = {
        wait: '*ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ...⏳️*',
        owner: '*🔰️ ᴏɴʟʏ ᴍʏ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜꜱᴇ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ*',
        group: '*🔰️ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ɪꜱ ᴍᴀᴅᴇ ꜰᴏʀ *ɢʀᴏᴜᴘꜱ* ᴏɴʟʏ !*',
        admin: '*🔰️ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ʙᴇ ᴜꜱᴇᴅ ᴏɴʟʏ ꜰᴏʀ *ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ !*',
        botadmin: '*ꜱᴏʀʀʏ😔️, ɪ ᴄᴀɴɴᴏᴛ ʀᴜɴ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴡɪᴛʜᴏᴜᴛ ʙᴇɪɴɢ ᴀɴ *ᴀᴅᴍɪɴ* ᴏꜰ ᴛʜɪꜱ ɢʀᴏᴜᴘ.*',
        botAdmin: '*ꜱᴏʀʀʏ😔️, ɪ ᴄᴀɴɴᴏᴛ ʀᴜɴ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴡɪᴛʜᴏᴜᴛ ʙᴇɪɴɢ ᴀɴ *ᴀᴅᴍɪɴ* ᴏꜰ ᴛʜɪꜱ ɢʀᴏᴜᴘ.*',
        banned: '*❌️ ʏᴏᴜ ᴀʀᴇ *ʙᴀɴɴᴇᴅ* ꜰʀᴏɴ ᴜꜱɪɴɢ ᴄᴏᴍᴍᴀɴᴅꜱ !*',
        bangc: '*❌️ ᴛʜɪꜱ ɢʀᴏᴜᴘ ɪꜱ ʙᴀɴɴᴇᴅ ꜰʀᴏᴍ ᴜꜱɪɴɢ ᴄᴏᴍᴍᴀɴᴅꜱ !*',
}
//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("✅️ ᴜᴘᴅᴀᴛᴇ config.js"))
	delete require.cache[file]
	require(file)
})
