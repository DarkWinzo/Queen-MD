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
////////////////////////////////////////////////////|:|             OWNER DETAILS             |:|//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
global.session = process.env.SESSION_ID || 'PUT HERE',
global.ownername = process.env.OWNER_NAME === undefined ? "AbhishekSuresh" : process.env.OWNER_NAME
let fake = process.env.OWNER_NUMBER === undefined ? '919074692450' : process.env.OWNER_NUMBER
global.owner = [`${fake}`]
global.ownernumber = [`${fake}`]
global.premium = [`${fake}`]
global.anticall = process.env.ANTICALL === undefined ? 'false' : process.env.ANTICALL
global.packname = process.env.PACK_NAME === undefined ? 'ABHISHEK-SER-MD' : process.env.PACK_NAME
global.author = process.env.STICKER_AUTHOR_NAME === undefined ? 'AbhishekSuresh' : process.env.STICKER_AUTHOR_NAME
global.pmblock = process.env.PM_BLOCK === undefined ? 'false' : process.env.PM_BLOCK
global.chatbot_pm = process.env.PM_CHATBOT === undefined ? 'false' : process.env.PM_CHATBOT
global.chatbot_group = process.env.GROUP_CHATBOT === undefined ? 'false' : process.env.GROUP_CHATBOT

/////////////////////////////////////////////////////////////////||SESSION ID METHOD||///////////////////////////////////////////////////////////////////////
global.sessionconvert = ['true']                           //This is session id method.....//Don't Change
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
global.Botname = 'A'+'B'+'H'+'I'+'S'+'H'+'E'+'K'+'-'+'S'+'E'+'R'
global.prefa = ['.']
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
global.mess = {
        wait: '*𝙿𝚕𝚎𝚊𝚜𝚎 𝚆𝚊𝚒𝚝...⏳️*',
        owner: '*🔰️ 𝚃𝚑𝚒𝚜 𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝙸𝚜 𝙾𝚗𝚕𝚢 𝙵𝚘𝚛 𝙼𝚢 𝙾𝚠𝚗𝚎𝚛👻*',
        group: '*🔰️ 𝚃𝚑𝚒𝚜 𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝙸𝚜 𝙾𝚗𝚕𝚢 𝙵𝚘𝚛 *𝙶𝚛𝚘𝚞𝚙*!',
        admin: '*🔰️ 𝚃𝚑𝚒𝚜 𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝙸𝚜 𝙾𝚗𝚕𝚢 𝙵𝚘𝚛 𝙶𝚛𝚘𝚞𝚙 *𝙰𝚍𝚖𝚒𝚗𝚜!*',
        botadmin: '*𝚂𝚘𝚛𝚛𝚢😔️, 𝙸 𝙰𝚖 𝙽𝚘𝚝 𝙰𝚗 𝙰𝚍𝚖𝚒𝚗 𝙼𝚊𝚔𝚎 𝙰𝚍𝚖𝚒𝚗 𝚃𝚘 𝚄𝚜𝚎 𝚃𝚑𝚒𝚜 𝙲𝚘𝚖𝚖𝚊𝚗𝚍!.*',
        botAdmin: '*𝚂𝚘𝚛𝚛𝚢😔️, 𝙸 𝙰𝚖 𝙽𝚘𝚝 𝙰𝚗 𝙰𝚍𝚖𝚒𝚗 𝙼𝚊𝚔𝚎 𝙰𝚍𝚖𝚒𝚗 𝚃𝚘 𝚄𝚜𝚎 𝚃𝚑𝚒𝚜 𝙲𝚘𝚖𝚖𝚊𝚗𝚍!.*',
        banned: '*❌️ 𝚈𝚘𝚞 𝙰𝚛𝚎 *𝙱𝚊𝚗𝚗𝚎𝚍* 𝙵𝚛𝚘𝚖 𝚄𝚜𝚒𝚗𝚐 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜!',
        bangc: '*❌️ 𝚃𝚑𝚒𝚜 𝙶𝚛𝚘𝚞𝚙 𝙸𝚜 *𝙱𝚊𝚗𝚗𝚎𝚍* 𝙵𝚛𝚘𝚖 𝚄𝚜𝚒𝚗𝚐 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜!',
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
