const help1 = (prefix) => {

	return `
╔═════🍁〘 𝐆𝐑𝐔𝐏𝐎 〙🍁═════
║➣ 𝐒𝐎 𝐀𝐃𝐌𝐈𝐍'𝐒 𝐏𝐎𝐃𝐄𝐌 𝐔𝐒𝐀𝐑
║
╠➣ 𝐂𝐎𝐌𝐀𝐍𝐃𝐎: ${prefix}𝖺𝖽𝖽
╠➣ 𝐃𝐄𝐒𝐂: 𝖠𝖽𝗂𝖼𝗂𝗈𝗇𝖺𝗋 𝗆𝖾𝗆𝖻𝗋𝗈 𝖺𝗈 𝗀𝗋𝗎𝗉𝗈
╠➣ 𝐔𝐒𝐎: ${prefix}add 55𝗑𝗑𝗑𝗑𝗑𝗑𝗑𝗑𝗑𝗑
╠➣ 𝐍𝐎𝐓𝐀: 𝖠 𝖻𝗈𝗍 𝗉𝗋𝖾𝖼𝗂𝗌𝖺 𝗌𝖾𝗋 𝖺𝖽𝗆𝗂𝗇\n
║
╠➣ 𝐂𝐎𝐌𝐀𝐍𝐃𝐎: ${prefix}𝗄𝗂𝖼𝗄
╠➣ 𝐃𝐄𝐒𝐂: Banir membros do grupo
╠➣ 𝐔𝐒𝐎: ${prefix}kick @𝗍𝖺𝗀 𝖽𝗈 𝗆𝖾𝗆𝖻𝗋𝗈
╠➣ 𝐍𝐎𝐓𝐀: 𝖠 𝖻𝗈𝗍 𝗉𝗋𝖾𝖼𝗂𝗌𝖺 𝗌𝖾𝗋 𝖺𝖽𝗆𝗂𝗇
║➣ OBS: 𝖭𝖺̃𝗈 𝖿𝖺𝖼̧𝖺 𝖺 𝖻𝗈𝗍 𝗋𝖾𝗆𝗈𝗏𝖾𝗋 𝖽𝗎𝖺𝗌 𝗉𝖾𝗌𝗌𝗈𝖺𝗌 𝖺𝗈 𝗆𝖾𝗌𝗆𝗈 𝗍𝖾𝗆𝗉𝗈\n
║
╠➣ 𝐂𝐎𝐌𝐀𝐍𝐃𝐎: ${prefix}𝗉𝗋𝗈𝗆𝗈𝗍𝖾
╠➣ 𝐃𝐄𝐒𝐂: Promove um membro a ser admin
╠➣ 𝐔𝐒𝐎: ${prefix}𝗉𝗋𝗈𝗆𝗈𝗍𝖾 @𝗍𝖺𝗀 𝖽𝗈 𝗆𝖾𝗆𝖻𝗋𝗈
╠➣ 𝐍𝐎𝐓𝐀: 𝖠 𝖻𝗈𝗍 𝗉𝗋𝖾𝖼𝗂𝗌𝖺 𝗌𝖾𝗋 𝖺𝖽𝗆𝗂𝗇\n
║
╠➣ 𝐂𝐎𝐌𝐀𝐍𝐃𝐎: ${prefix}demote
╠➣ 𝐃𝐄𝐒𝐂: Promove um admin a ser membro comum
╠➣ 𝐔𝐒𝐎: ${prefix}demote @tag do admin
╠➣ 𝐍𝐎𝐓𝐀: 𝖠 𝖻𝗈𝗍 𝗉𝗋𝖾𝖼𝗂𝗌𝖺 𝗌𝖾𝗋 𝖺𝖽𝗆𝗂𝗇\n
║
╠➣ 𝐂𝐎𝐌𝐀𝐍𝐃𝐎: ${prefix}linkgroup
╠➣ 𝐃𝐄𝐒𝐂: Obtenha o link do grupo
╠➣ 𝐔𝐒𝐎: 𝖲𝗈́ 𝖾𝗇𝗏𝗂𝖺𝗋 𝗈 𝖼𝗈𝗆𝖺𝗇𝖽𝗈 
╠➣ 𝐍𝐎𝐓𝐀: 𝖠 𝖻𝗈𝗍 𝗉𝗋𝖾𝖼𝗂𝗌𝖺 𝗌𝖾𝗋 𝖺𝖽𝗆𝗂𝗇\n
║
╠➣ 𝐂𝐎𝐌𝐀𝐍𝐃𝐎: ${prefix}tagall
╠➣ 𝐃𝐄𝐒𝐂: Marca todos os membros do grupo
╠➣ 𝐔𝐒𝐎: 𝖲𝗈́ 𝖾𝗇𝗏𝗂𝖺𝗋 𝗈 𝖼𝗈𝗆𝖺𝗇𝖽𝗈 
╠➣ 𝐍𝐎𝐓𝐀: Você precisa ser um admin!\n
║
╠➣ 𝐂𝐎𝐌𝐀𝐍𝐃𝐎: ${prefix}simih
╠➣ 𝐃𝐄𝐒𝐂: Ative o modo simi no grupo
╠➣ ATIVAR: ${prefix}simih 1 para ativar 
╠➣ DESATIVAR: ${prefix}simih 0 para desativar 
╠➣ 𝐍𝐎𝐓𝐀: Você precisa ser um admin\n
║
╠════════════════════
║🍁 𝐃𝐎𝐍𝐀 𝐃𝐄𝐒𝐓𝐀 𝐆𝐈𝐓: 𝐂𝐀𝐁𝐔-𝐂𝐇𝐀𝐍 🍁
║🍁 𝐂𝐎𝐍𝐓𝐀𝐓𝐎: Wa.me/+553592244025 🍁
║🍁 𝐁𝐀𝐒𝐄 𝐃𝐄𝐒𝐓𝐄 𝐌𝐄𝐍𝐔: 𝐆𝐑𝐈𝐍𝐆𝐎 𝐌𝐎𝐃𝐃𝐄𝐑 🍁
║🍁 𝐂𝐎𝐍𝐓𝐀𝐓𝐎: Wa.me/+556696770734 🍁
╚════════════════════`

}
exports.help1 = help1

