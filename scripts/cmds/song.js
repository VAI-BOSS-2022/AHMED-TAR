const { GoatWrapper } = require("fca-liane-utils");
const axios = require('axios');
const config = {
  name:'song',
  author:'Romim',
  category:'MUSIC'
}
const onStart = async ({args,api,message,event}) => {
  const data = args.join(' ')
  try {
    const req = await axios.get(`https://www.noobz-api.rf.gd/api/SoundCloudsearch?query=${data}`)
    api.setMessageReaction("⏳", event.messageID, () => {}, true);
    const item1 = req.data[0];
    const title = item1.title;
    const url = item1.permalink_url;
    const downloadRequest = await axios.get(`https://www.noobz-api.rf.gd/api/soundcloud?url=${url}`)
    const url2 = downloadRequest.data.cloudinary_url;
    message.reply({
        body: `♲︎︎︎| 𝐏𝐥𝐚𝐲𝐢𝐧𝐠 𝐀𝐮𝐝𝐢𝐨...⌨︎
   \n\n☹︎━━━━━━━━━━━━━━━━━☹︎\n ♲︎︎︎| 𝐀𝐮𝐝𝐢𝐨 𝐔𝐫𝐋...${title}`,
        attachment: await global.utils.getStreamFromUrl(url2),
      });
      api.setMessageReaction("✅", event.messageID, () => {}, true);
  } catch (e) {
    message.reply(e.message)
  }
}
module.exports = {
  config,
  onStart
}
const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: true });
