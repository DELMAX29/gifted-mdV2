const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="admin@giftedtechnexus.co.ke"
global.location="Eldoret,Kenya."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/Giftedmaurice/gifted-mdV2";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/54efddccf41281ad7ec51.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254728782591" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263717672068";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254728782591,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254728782591,254xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://qr-scan.giftedtechnexus.co.ke";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Gifted-Tech Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.2.0.0",
  caption : process.env.CAPTION || "©k29promax" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ©²⁰²⁴ ɢɪғᴛᴇᴅ ᴍᴅ ᵛ² 』```", //*『sᴜʙsᴄʀɪʙᴇ • ɢɪғᴛᴇᴅ ᴛᴇᴄʜ』*\n youtube.com/@giftedtechnexus"),
 
  author : process.env.PACK_AUTHER|| "SUHAIL_05_20_08_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDcyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTExLFxuICAgICAgICA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDQsXG4gICAgICAgIDQxLFxuICAgICAgICAzMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDcwLFxuICAgICAgICAyNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNixcbiAgICAgICAgOTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA5MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNixcbiAgICAgICAgNzEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NixcbiAgICAgICAgMjEzLFxuICAgICAgICA5NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA1NixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDc0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc1LFxuICAgICAgICA5MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxODksXG4gICAgICAgIDM2LFxuICAgICAgICAyLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3OSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU3LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDY3LFxuICAgICAgICA0NixcbiAgICAgICAgNDcsXG4gICAgICAgIDEyLFxuICAgICAgICA3MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDg2LFxuICAgICAgICA2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDQzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA3NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVK1BCbUZ5YXRKdm1Hd0lIakIzVmF1TzRFYW8zTzZMQitqdXBDUXh3ZW5RPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHV3F4YmlydFNIQ2FMQUlrTE9BZmFnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhjZWEzODBkLWNiMzctNDU0My1iOTYxLWU4MzgxMTc1N2ExMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NCxcbiAgICAgIDIwNSxcbiAgICAgIDE0LFxuICAgICAgMjA2LFxuICAgICAgNTcsXG4gICAgICAxMDksXG4gICAgICAyMyxcbiAgICAgIDExMSxcbiAgICAgIDIwMixcbiAgICAgIDIyNixcbiAgICAgIDg5LFxuICAgICAgNTEsXG4gICAgICAyLFxuICAgICAgMjUwLFxuICAgICAgNTQsXG4gICAgICAyMTgsXG4gICAgICA5NCxcbiAgICAgIDc2LFxuICAgICAgMjMxLFxuICAgICAgODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAzLFxuICAgICAgODAsXG4gICAgICAyMTUsXG4gICAgICA1NixcbiAgICAgIDQ2LFxuICAgICAgOTgsXG4gICAgICA0NixcbiAgICAgIDI5LFxuICAgICAgMTIsXG4gICAgICAyMDcsXG4gICAgICAxNzIsXG4gICAgICAxOCxcbiAgICAgIDE4NCxcbiAgICAgIDEwMyxcbiAgICAgIDIyOSxcbiAgICAgIDI1LFxuICAgICAgMTMzLFxuICAgICAgODEsXG4gICAgICAxNDksXG4gICAgICAxNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVRYRzY2SFFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4NzM4Mjg1MjozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIksyOXByb21heFwiLFxuICAgIFwibGlkXCI6IFwiMzgzNjI5ODM0ODU1MDU6MzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWZwOHZNRkVJMmc5clVHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZK2JoYytGZHhpdFRyK0ltVURRM3NDQmhONllSL2tUaUxUdVg5TlBZYVQwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjVubmZUa3Uvc2RzNXpTRXUyeGVzRXdJV2RpaTFWL3gzQkFacWhFWVZsMEdITGhSazZITEZTeWppdHBDamFXVnFUU01GK1ZlUXdqZjVYK3RZK0F1UURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkVEUDF2NFFkTithRjZCS3ozeFl5aVF5UllYUmV1UGRrQjJEQ1ZoaExtdmliZ1J1Y0huWENrbDB3TjZSdWhkNXFnQmpkUjFSdzBkTHRLdjNCTytlYkRRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4NzM4Mjg1MjozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzNjk5MjE2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQmtYXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCa1guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqVzNQTFJWdENIb0hlMEZuWVovYVlNYStoT2dSY051R0pVVHFyeTUwMlVVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1ODUyMzA5ODMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMzE5Mjc1ODk2NVwifSIKfQ==",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "k29promax",
  ownername:process.env.OWNER_NAME|| "It's k29promax",

  sessionName:process.env.SESSION_ID || "Gifted~Cs1sG0cK",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "GIFTED",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 5,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "true",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
