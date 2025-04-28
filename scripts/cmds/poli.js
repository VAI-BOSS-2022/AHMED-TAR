const axios = require('axios');

module.exports = {
  config: {
    name: 'poli',
    version: '1.0',
    author: 'OtinXSandip',
    countDown: 0,
    role: 0,
    description: {
      en: 'Text to Image'
    },
    category: 'IMAGE',
    guide: {
      en: `{pn} prompt`
    }
  },

  onStart: async function ({ message, api, args, event }) {
    const prompt = args.join(' ');
    
    if (!prompt) {
      return message.reply("Soraty e");
    }
    
   
    const baseURL = `https://rubish-apihub.onrender.com/rubish//imagine?prompt=${prompt}&apikey=rubish69`;
    
    
    message.reply("✅| Generating please wait.", async (err, info) => {
      message.reply({ 
body: `✅`,
        attachment: await global.utils.getStreamFromURL(baseURL)
      });
      let ui = info.messageID;
      message.unsend(ui);
      
    });
  }
};
