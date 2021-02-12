const help = (prefix) => {
	return `
╔═══════🍁〘 𝐌𝐄𝐍𝐔 〙🍁════════
║ 
╠➣𝐂𝐎𝐌𝐀𝐍𝐃𝐎 : *${prefix}sticker* or *${prefix}stiker*
╠➣𝐃𝐄𝐒𝐂 : convert image/gif/video to sticker
║
╠➣𝐂𝐎𝐌𝐀𝐍𝐃𝐎 : *${prefix}sticker nobg* or *${prefix}stiker nobg*
╠➣𝐃𝐄𝐒𝐂 : convert image to sticker while removing the background
║
╠➣𝐂𝐎𝐌𝐀𝐍𝐃𝐎 : *${prefix}toimg*
╠➣𝐃𝐄𝐒𝐂 : convert sticker to image
║
╠➣𝐂𝐎𝐌𝐀𝐍𝐃𝐎 : *${prefix}tsticker* or *${prefix}tstiker*
╠➣𝐃𝐄𝐒𝐂 : convert text to sticker
║
╠═══════🍁〘 𝐌𝐄𝐌𝐄𝐒 〙🍁════════
║
╠➣𝐂𝐎𝐌𝐀𝐍𝐃𝐎 : *${prefix}meme*
╠➣𝐃𝐄𝐒𝐂 : random meme images [english]
║
╠➣𝐂𝐎𝐌𝐀𝐍𝐃𝐎 : *${prefix}memeindo*
╠➣𝐃𝐄𝐒𝐂 : random meme images [indo]
║
╠═══════🍁〘 𝐎𝐔𝐓𝐑𝐎𝐒 〙🍁════════
║
╠➣𝐂𝐎𝐌𝐀𝐍𝐃𝐎 : *${prefix}gtts*
╠➣𝐃𝐄𝐒𝐂 : convert text to speech/audio
╠➣example : *${prefix}gtts jja Oni-chan*
║
╠➣𝐂𝐎𝐌𝐀𝐍𝐃𝐎 : *${prefix}loli*
╠➣𝐃𝐄𝐒𝐂 : random loli images
║
╠➣𝐂𝐎𝐌𝐀𝐍𝐃𝐎 : *${prefix}nsfwloli*
╠➣𝐃𝐄𝐒𝐂 : random nsfw loli images
║
╠➣𝐂𝐎𝐌𝐀𝐍𝐃𝐎 : *${prefix}url2img*
╠➣𝐃𝐄𝐒𝐂 : take web screenshots
╠➣age : *${prefix}url2img [tipe] [url]*
║
╠➣𝐂𝐎𝐌𝐀𝐍𝐃𝐎 : *${prefix}simi*
╠➣𝐃𝐄𝐒𝐂 : your message will be replied to by simi
╠➣age : *${prefix}simi yourmessage*
║
╠➣𝐂𝐎𝐌𝐀𝐍𝐃𝐎 : *${prefix}ocr*
╠➣𝐃𝐄𝐒𝐂 : take the text in the picture
║
╠➣𝐂𝐎𝐌𝐀𝐍𝐃𝐎 : *${prefix}wait*
╠➣𝐃𝐄𝐒𝐂 : search anime with image [ What Anime Is This/That ]
║
╠➣𝐂𝐎𝐌𝐀𝐍𝐃𝐎 : *${prefix}setprefix*
╠➣𝐃𝐄𝐒𝐂 : replace prefix
╠➣example : *${prefix}setprefix ?*
║
╠═══════🍁〘 𝐆𝐑𝐔𝐏𝐎𝐒 〙🍁════════
║
╠➣𝐂𝐎𝐌𝐀𝐍𝐃𝐎 : *${prefix}add*
╠➣𝐃𝐄𝐒𝐂 : add member into group
║
╠➣𝐂𝐎𝐌𝐀𝐍𝐃𝐎 : *${prefix}kick*
╠➣𝐃𝐄𝐒𝐂 : kick members from group
║
╠➣𝐂𝐎𝐌𝐀𝐍𝐃𝐎 : *${prefix}promote*
╠➣𝐃𝐄𝐒𝐂 : make the group member as group admin
║
╠➣𝐂𝐎𝐌𝐀𝐍𝐃𝐎 : *${prefix}demote*
╠➣𝐃𝐄𝐒𝐂 : make the group admin as group member
║
╠➣𝐂𝐎𝐌𝐀𝐍𝐃𝐎 : *${prefix}linkgroup*
╠➣𝐃𝐄𝐒𝐂 : take the group link
║
╠➣𝐂𝐎𝐌𝐀𝐍𝐃𝐎 : *${prefix}leave*
╠➣𝐃𝐄𝐒𝐂 : Make bot leave the group
║
╠➣𝐂𝐎𝐌𝐀𝐍𝐃𝐎 : *${prefix}tagall*
╠➣𝐃𝐄𝐒𝐂 : tags all group members including admins too
║
╠➣𝐂𝐎𝐌𝐀𝐍𝐃𝐎 : *${prefix}simih*
╠➣𝐃𝐄𝐒𝐂 : activate simi mode in the group
╠➣age : *${prefix}simih 1* to activate simi mode and *${prefix}simih 0* to deactivate simi mode
╠➣note : This 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 can be used if you are a group admin
╚═════════════════════════════`
}

exports.help = help
