const fs = require("fs-extra");
const { utils } = global;

module.exports = {
  config: {
    name: "prefix",
    version: "1.5",
    author: "𝗛𝗔𝗫𝗢𝗥 𝗦𝗢𝗛𝗔𝗡",
    countDown: 5,
    role: 0,
    shortDescription: "⚙️ Change bot prefix",
    longDescription: "Set custom prefix for your chat or globally (Admin only).",
    category: "⚙️ Config"
  },

  langs: {
    en: {
      reset: "✅ Prefix reset to: 『 %1 』",
      onlyAdmin: "⚠️ Only Admin can change global prefix!",
      confirmGlobal: "🔹 React to confirm global prefix change.",
      confirmThisThread: "🔹 React to confirm chat prefix change.",
    }
  },

  onStart: async function ({ message, role, args, event, threadsData, getLang }) {
    if (!args[0]) return message.SyntaxError();
    if (args[0] === 'reset') {
      await threadsData.set(event.threadID, null, "data.prefix");
      return message.reply(getLang("reset", global.GoatBot.config.prefix));
    }

    const newPrefix = args[0];
    const settings = {
      author: event.senderID,
      newPrefix,
      setGlobal: args[1] === "-g"
    };

    if (settings.setGlobal && role < 2)
      return message.reply(getLang("onlyAdmin"));

    return message.reply(
      getLang(settings.setGlobal ? "confirmGlobal" : "confirmThisThread"),
      (err, info) => {
        if (info) {
          global.GoatBot.onReaction.set(info.messageID, {
            ...settings,
            messageID: info.messageID,
            commandName: module.exports.config.name,
            type: "prefixConfirm"
          });
        }
      }
    );
  },

  onReaction: async function ({ message, threadsData, event, Reaction }) {
    const { author, newPrefix, setGlobal } = Reaction;
    if (event.userID !== author) return;

    const now = new Date().toLocaleString("en-GB", {
      timeZone: "Asia/Dhaka",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });

    const resultBox =
`╭━『 ✅ PREFIX UPDATED 』━╮
┃ 🔸 Prefix : 『 ${newPrefix} 』
┃ 🌐 Scope  : ${setGlobal ? "Global" : "Chat"}
┃ ⏰ Time   : ${now}
╰━━━━━━━━━━━━━━━━━━━╯`;

    const imgUrl = "http://remakeai-production.up.railway.app/Remake_Ai/Nyx_Remake_1744644705452.gif";

    if (setGlobal) {
      global.GoatBot.config.prefix = newPrefix;
      fs.writeFileSync(global.client.dirConfig, JSON.stringify(global.GoatBot.config, null, 2));
      return message.reply({
        body: resultBox,
        attachment: await global.utils.getStreamFromURL(imgUrl)
      });
    }

    await threadsData.set(event.threadID, newPrefix, "data.prefix");
    return message.reply({
      body: resultBox,
      attachment: await global.utils.getStreamFromURL(imgUrl)
    });
  },

  onChat: async function ({ event, message, usersData }) {
    if (event.body?.toLowerCase() !== "prefix") return;

    const { name } = await usersData.get(event.senderID);
    const sysPrefix = global.GoatBot.config.prefix;
    const currentPrefix = utils.getPrefix(event.threadID);

    const now = new Date().toLocaleString("en-GB", {
      timeZone: "Asia/Dhaka",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });

    const prefixBox =
`☻━━─[ 𝚈𝙾𝚄𝚁 𝚅𝙾𝙳𝚁𝙾 𝙱☺︎︎𝚃 ]─━━☻
𝚂𝚈𝚂𝚃𝙴𝙼 𝙿𝚁𝙴𝙵𝙸𝚇 ⚘͜${sysPrefix} 
𝚈𝙾𝚄𝚁 𝙶𝚁𝙾𝚄𝙿 𝙿𝚁𝙴𝙵𝙸𝚇 ⚘͜ ${currentPrefix}
𝚃𝙸𝙼𝙴 ⇆${now}
◈━━━━━━━━◈✙◈━━━━━━━━▷`;

    const imgUrl = "http://remakeai-production.up.railway.app/Remake_Ai/Nyx_Remake_1744644705452.gif";

    return message.reply({
      body: `🈷 ${name} 🈷\n${prefixBox}`,
      attachment: await global.utils.getStreamFromURL(imgUrl)
    });
  }
};
