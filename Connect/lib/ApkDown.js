/*
   ██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗      ███╗   ███╗██████╗ 
  ██╔═══██╗██║   ██║██╔════╝██╔════╝████╗  ██║      ████╗ ████║██╔══██╗
  ██║   ██║██║   ██║█████╗  █████╗  ██╔██╗ ██║█████╗██╔████╔██║██║  ██║
  ██║▄▄ ██║██║   ██║██╔══╝  ██╔══╝  ██║╚██╗██║╚════╝██║╚██╔╝██║██║  ██║   
  ╚██████╔╝╚██████╔╝███████╗███████╗██║ ╚████║      ██║ ╚═╝ ██║██████╔╝   
   ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═══╝      ╚═╝     ╚═╝╚═════╝   
  
══════════════════════════════════════════════════════════════════════════
                            ( OWNER  DETAILS )
══════════════════════════════════════════════════════════════════════════
✅ ABHISHEK-SER Multi-device Whatsapp Bot
✅ Coded By AbhishekSuresh
══════════════════════════════════════════════════════════════════════════
                              ( CONTACT ME )
══════════════════════════════════════════════════════════════════════════
✅ Telegram: https://t.me/AbhishekSuresh
✅ Whatsapp: https://wa.//+919074692450
✅ Instagram:https://msng.link/o/?abhishek_ser=ig
✅ Youtube: https://youtube.com/c/ComedyMelodyCH                                                                                                      
══════════════════════════════════════════════════════════════════════════
                             ( PROJECT DETAILS )
══════════════════════════════════════════════════════════════════════════
✅ @project_name ABHISHEK-SER-MD [WA Multi-device]
✅ @author DarkWinzo <https://github.com/BOSS444HACKER>
✅ @description A WhatsApp based 3ʳᵈ party application that provide many 
   services with a real-time automated conversational experience
✅ @link <https://github.com/BOSS444HACKER/ABHISHEK-SER-MD>
✅ @version 0.0.1
══════════════════════════════════════════════════════════════════════════
                             ( PROJECT RULES )
══════════════════════════════════════════════════════════════════════════
✅ If you want to recode, reupload
   or copy the codes/script,
   please Contact me;
✅ If the recoded/reupload or copy script? "i will take action immediately"
✅ © 2023 ABHISHEK-SER Bot Inc.Technical Hacker Team
✅ God Bless You, Family and Myself
══════════════════════════════════════════════════════════════════════════
*/

const axios = require('axios')
const cheerio = require('cheerio')

const ApkDown = async (url) => {
const res = await axios.get(url) 
const $ = cheerio.load(res.data)
const total = []
$(`div.entry-inner`).each(function(e,hasil){
let desc = $(hasil).find('p').text()

let title = $('div.post-inner.group').find('h1.post-title').text()

let size = $('div#dlbox1').find('ul > li > span').text().split('size: ')[1].split('Update')[0]

let vers = $('div#dlbox1').find('ul > li > span').text().split('Version: ')[1].split('File')[0]

let up = $('div#dlbox1').find('ul > li > span').text().split('Update: ')[1]

let link = $('div#dlbox12').find('li > a').attr('href')

let thumb = $('div#dlbox').find('img').attr('data-src')

total.push({title,size,vers,up,link,thumb,desc})
console.log(total)
})
return (total)
}


module.exports = { ApkDown }
