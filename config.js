const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "IK~H4sIAAAAAAAAA5VUy5KjRhb9lYncinKBQDwU0RGDKJCQUOmFno5epCBBKfESJM8OLWY9O9tyRy807YVj5vf0CTaqKlct7HYNGzLyce659557PoEgxAkaoBK0P4EoxhkkqF6SMkKgDTqp46AYUMCGBII2UB+FaCL5HnGT7uOGPCbOfRfuNWUgwL1ruLpRWN0u8zjWNfcDOFEgSrcetr4BiCtVCK3S5jQxNllzFGzkGUQ5Wu5GrtTVWgZD9zL/qLJl+AGcakSIYxy4arRDPoqhN0DlGOL4ffRDtekbmjRX4tZctnvTbM8GM3Y+Qger6CvisDUonf2ibB21/H30oZBoZkhnYuV12eNca1VQ5NfxcLGEA2b9MDH2xnrUN3ioJE/0E+wGyNZtFBBMynfX3dVVi0wsf4MFtYO4PLPVvLEr84WH+/2F3kgnVVU6CkQr633EXf1h7wvDobe0HsixN/MsezWUtbxaT+VusbJWwUJPuWxtPIRviY/jF60c/p+6u+NiI5NJ3sFQLGnn3lypxYb3c/SwG5vNfb+kD9vIXBaOmryPftAXppGdK0KFOrk2zmarKdc4dGaNZrUL+Fn6mAal1y+jlr9+pQ9JGn+L5bHHPlT0BnNdZarlxOOY2BDokZMuDLcqJjIs9lrpanPF8+Q9aiyY8ZwpNQ5FfaZrPfayQnGaVqlWrBtOZ8XDMl/uRdn9cMvogErdBm3mRIEYuTghMSQ4DG57NEsBaGczZMWI3MoLIJvzu3w9Hd2XUrWO4T3S0xbXI10I8X03m/BoucsarjiFhw+AAlEcWihJkN3DCQnjcoiSBLooAe3vP1IgQAV5alwdjmUo4OA4IfMgjbwQ2i9dfTmElhWmAZmVgaXUCxSDNv26jQjBgZvUdUwDGFs7nCFlB0kC2g70EnSigI0ybKEaD8idJtTYHZzII3gcuo4ybx4Vuaa8C4OnK0hkLcdqbu9ExHN3nCXCu21Lat7ZjMU2ISfxLZsGFMDPM1O/+csWeo1MtndQX7GRYQT2YIcETUjLo1oMb214qj2KkQ3aJE4RBbbQOqSRGR5Q8A1cfaj0Yk9Ri2Y2ofcEF1P1XlnxXDyev8F96ilof3r1KSW0a7xBT340VaUHKODfJIjrzJs8K7AiR7NNutVmpH8m3+V1IWEUfRcgAigQwPo2uF4+f71ePn++Xj7/7x/Xy/lf18v5l+vl/Ov1cv5yvZz/e72cf7hezv958//x6c7XL3fXy/nf18v55+vl/FP9AFDAu4VnRInnOIlmBJ5hRK5mUB+c/uh1TdRGBGIvAW2g6IHIT8MJNwxGRb5edxRZHshyrb8XbbwM2ZOI0WLYIS2r4chmtOjTsOjGjlO1Mj6QeA/TD2O6cjPJzMbV+s9Afk88SjU9GelqbqjHKd44W5lo/lCNi/kyDfaTfSLOjaR7mCx7UlJ2EldjpjgMNkW/2B9bfrwMzAZ2ysFAMrnp1OaZno7FTj2RLxp9G2ySI47bbefBuCi0Weq3yDDONceXXFvisGR6meYMEkx0peH4A2s8aqz81OsIjCZt1uZmMR6beyNQSbjYG90h7IYoyGX5afxv9uM92z6+DeanZ0U7GN1c9LnXf6uJ1+GiT9QbjGdf/gsBd1aeKW/RahzkKr+Y2d1kemRZsbFtRPcoWhO5koaccT8XKrEJTqePFIg8SJww9kEbJP4WAgrEYVqPvh444TciKfJcV57T9mBC5Fc7MbGPEgL9CLQZgacFSZCaLQr4pRxFMwLJiwsBuf5GdgxOvwEc52u0oQgAAA==",
// add your Session Id
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY LEADER-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/7svy43.jpeg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || "+",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "LEADER-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "LEADER-MDX",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "263738403205",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝚂𝙸𝚕𝙴𝙽𝚃-𝙻𝙳𝚃",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ https://youtube.com/@joshuamambo1*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/7svy43.jpeg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> *© Don't forget to Subscribe to https://youtube.com/@joshuamambo1* Hun Yar *KHAN-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "263738403205",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
