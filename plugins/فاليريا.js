let handler = async (m, { command, text }) => m.reply(`◞◈ مـمـلـكـة ڤـالـيـريـا الـعـظـمى 🐦‍🔥⛩️◜
✽ ━────━ ⊰🐦‍🔥⊱ ━────━ ✽

        ❖┆طـلـب انـضـمـام نـقـابـة┆❖

⎔ إسـم الـنـقـابـة┆📝
•‏ الاسم
⎔ معنى الإسـم┆‼️
•‏ معناه
⎔ الـقـائـد┆🛡️
* لقب
⎔ الـنـائـب┆⚔️
•‏ لقب
⎔ عـدد الـاعـضـاء┆🔢
•‏ عدد الاعضاء
⎔ مـتـوسـط الـتـفـاعـل┆🔥
•‏ عدد التفاعل الأسبوعي
✽ ━────━ ⊰🐦‍🔥⊱ ━────━ ✽
◞◈ ڤـالـيـريـا الـعـظـمـى┆ヴァ🐦‍🔥⛩️◜`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(الاستماره|22|استماره\استمارة)$/i

export default handler