const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "NTKhang",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "INFORM",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const authorName = "亗 𝐌𝐑_𝐀𝐑𝐀𝐅𝐀𝐓 亗";
		const ownAge = "｢16+｣";
		const messenger = "https://m.me/your.arafat.404";
		const authorFB = "https://www.facebook.com/your.arafat.404";
		const authorNumber = "01615796682";
		const Status = "𝐄𝐫𝐫𝐨𝐫 <👨🏿‍🌾";
		const urls = [
			"https://i.imgur.com/ShEH30R.jpeg",
			"https://i.imgur.com/l1k94bj.jpeg",
			"https://i.imgur.com/8a6M5Ii.gif",
			"https://i.imgur.com/fO1d0Nb.jpeg"
		];
		const link = urls[Math.floor(Math.random() * urls.length)];
		
		const now = moment().tz('Asia/Dhaka');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `╭━𒀵 𝙱𝙾𝚃 𝙾𝚆𝙽𝙴𝚁 𝙸𝙽𝙵𝙾𝚁𝙼𒀵━☻
╭━─[  𝚈𝙾𝚄𝚁 𝚅𝙾𝙳𝚁𝙾 𝙱☺︎︎𝚃  ]─━☻
╰‣｢🤖｣ 𝙱𝚘𝚝𝙽𝚒𝚌𝚔: ${global.GoatBot.config.nickNameBot}
｢🌐｣ 𝙿𝚁𝙴𝙵𝙸𝚇 : ${global.GoatBot.config.prefix}
｢👑｣ 𝙾𝚆𝙽𝙴𝚁 : ${authorName}
｢🗓️｣ 𝙰𝚐𝚎 : ${ownAge}
｢🗿｣ 𝚁𝚎𝚕𝚊𝚝𝚒𝚘𝚗𝚜𝚑𝚒𝚙 : ${Status}
｢📲｣ 𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙 : ${authorNumber}
｢🔗｣ 𝙵𝙱𝙻𝙸𝙽𝙺 : ${authorFB}
｢📅｣ 𝙳𝚊𝚝𝚎 : ${date}
｢⏰｣ 𝚃𝚒𝚖𝚎 : ${time}
｢📥｣ 𝙲𝚘𝚗𝚝𝚎𝚗𝚝 𝙼𝚎𝚜𝚜𝚎𝚗𝚐𝚎𝚛 : ${messenger}
｢🚀｣ 𝚄𝚙𝚝𝚒𝚖𝚎 : ${uptimeString}
╭─[｢☎️｣𝚃𝚕𝚐: Ewr_Arafat_404
╰‣｢🛰️｣𝙸𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖: 𝐄𝐫𝐫𝐨𝐫 <👨🏿‍🌾
｢📽️｣ 𝙲𝚊𝚙𝙲𝚞𝚝 : 𝐄𝐫𝐫𝐨𝐫 <👨🏿‍🌾
｢📱｣ 𝚃𝚒𝚔𝚃𝚘𝚔 : tiktok.com/@ewr_arafat_404
｢🗃️｣ 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 : 𝐄𝐫𝐫𝐨𝐫 <👨🏿‍🌾`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
