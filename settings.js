
const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "96558857438"
global.ytname = "akshaypaul198@gmail.com"
global.socialm = "https://github.com/sparroo"
global.location = "India, Kerala"
global.xzn = 'sparrowofc' // https://xnz.wtf
global.ownernumber = '96558857438'  //creator number
global.ownername = '𝐉𝐈𝐍𝐍 𝐒𝐄𝐑' //owner name
global.botname = 'ᴊɪɴɴ ꜱᴇʀ' //name of the bot

//sticker details
global.packname = '\n\n𐄁⊰᯽⊱┈❊ɪᴛᴢ ᴍᴇ 𑇇 ᴀᴋsʜᴀʏ❊┈⊰᯽⊱𐄁\n\n'
global.author = ''

//console view/theme
global.themeemoji = '🌹'
global.wm = "sparrowofc™"

//theme link
global.link = 'https://github.com/sparroo'
global.thumburl = 'https://i.imgur.com/RsESIea.jpeg'
//custom prefix
global.prefa = ['!','.','#','&']

//false=disable and true=enable
global.autoreply = true // Auto reply
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = true //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoread_status = false //auto view status/story

global.my = {
	yt: 'https://github.com/sparroo',
	gh: 'https://github.com/sparroo',
	gc: 'https://chat.whatsapp.com/HUAXvlTOwWpGdPpaKCisLD',
	ch: '120363305011798496@newsletter',
}
//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v2'

//reply messages
global.mess = {
    done: 'Done ✅',
    prem: 'This feature is specifically for PREMIUM USERS❕',
    admin: 'This feature is specifically for Admins❕',
    botAdmin: 'Bot should be an admin to process this command❕',
    owner: 'This feature is specifically for the Owner❕',
    group: 'This feature is specifically for Groups❕',
    private: 'This feature is specifically for Private Chat❕',
    wait: 'processing......⏳',    
    error: 'An unknown error occured❗',
}

global.thumb = fs.readFileSync('./Media/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
