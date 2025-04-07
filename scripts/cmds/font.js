const axios = require("axios");
const fs = require("fs");

const fontMaps = [
  {
    name: '1',
    map: {
      ' ': ' ',
      'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑟', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ',
      'i': '𝑖', 'j': '𝑗', 'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜', 'p': '𝑝', 'q': '𝑞',
      'r': '𝑟', 's': '𝑠', 't': '𝑡', 'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦', 'z': '𝑧',
      'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺', 'H': '𝐻',
      'I': '𝐼', 'J': '𝐽', 'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂', 'P': '𝑃', 'Q': '𝑄',
      'R': '𝑅', 'S': '𝑆', 'T': '𝑇', 'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌', 'Z': '𝑍',
    },
  },
{
  name: '2',
  map: {
    ' ': ' ',
    'a': '𝒂', 'b': '𝒃', 'c': '𝒄', 'd': '𝒅', 'e': '𝒆', 'f': '𝒇', 'g': '𝒈', 'h': '𝒉',
    'i': '𝒊', 'j': '𝒋', 'k': '𝒌', 'l': '𝒍', 'm': '𝒎', 'n': '𝒏', 'o': '𝒐', 'p': '𝒑', 'q': '𝒒',
    'r': '𝒓', 's': '𝒔', 't': '𝒕', 'u': '𝒖', 'v': '𝒗', 'w': '𝒘', 'x': '𝒙', 'y': '𝒚', 'z': '𝒛',
    'A': '𝑨', 'B': '𝑩', 'C': '𝑪', 'D': '𝑫', 'E': '𝑬', 'F': '𝑭', 'G': '𝑮', 'H': '𝑯', 'I': '𝑰',
    'J': '𝑱', 'K': '𝑲', 'L': '𝑳', 'M': '𝑴', 'N': '𝑵', 'O': '𝑶', 'P': '𝑷', 'Q': '𝑸', 'R': '𝑹',
    'S': '𝑺', 'T': '𝑻', 'U': '𝑼', 'V': '𝑽', 'W': '𝑾', 'X': '𝑿', 'Y': '𝒀', 'Z': '𝒁',
  },
},
{
    name: '3',
    map: {
      ' ': ' ',
      'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡',
      'i': '𝐢', 'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪',
      'r': '𝐫', 's': '𝐬', 't': '𝐭', 'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳',
      'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇',
      'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐',
      'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙',
    },
  },
{
	name: '4',
	  map: {
       ' ': ' ',
    'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎', 'f': '𝚏', 'g': '𝚐', 'h': '𝚑',
    'i': '𝚒', 'j': '𝚓', 'k': '𝚔', 'l': '𝚕', 'm': '𝚖', 'n': '𝚗', 'o': '𝚘', 'p': '𝚙', 'q': '𝚚',
    'r': '𝚛', 's': '𝚜', 't': '𝚝', 'u': '𝚞', 'v': '𝚟', 'w': '𝚠', 'x': '𝚡', 'y': '𝚢', 'z': '𝚣',
    'A': '𝙰', 'B': '𝙱', 'C': '𝙲', 'D': '𝙳', 'E': '𝙴', 'F': '𝙵', 'G': '𝙶', 'H': '𝙷',
    'I': '𝙸', 'J': '𝙹', 'K': '𝙺', 'L': '𝙻', 'M': '𝙼', 'N': '𝙽', 'O': '𝙾', 'P': '𝙿', 'Q': '𝚀',
    'R': '𝚁', 'S': '𝚂', 'T': '𝚃', 'U': '𝚄', 'V': '𝚅', 'W': '𝚆', 'X': '𝚇', 'Y': '𝚈', 'Z': '𝚉',
  },
},

  {
    name: '5',
    map: {
      ' ': ' ',
      'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨', 'h': '𝘩',
      'i': '𝘪', 'j': '𝘫', 'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯', 'o': '𝘰', 'p': '𝘱', 'q': '𝘲',
      'r': '𝘳', 's': '𝘴', 't': '𝘵', 'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘹',
      'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎', 'H': '𝘏',
      'I': '𝘐', 'J': '𝘑', 'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕', 'O': '𝘖', 'P': '𝘗', 'Q': '𝘘',
      'R': '𝘙', 'S': '𝘚', 'T': '𝘛', 'U': '𝘜', 'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡',
    },
  },
{
  name: '6',
  map: {
    ' ': ' ',
    'a': '𝙖', 'b': '𝙗', 'c': '𝙘', 'd': '𝙙', 'e': '𝙚', 'f': '𝙛', 'g': '𝙜', 'h': '𝙝',
    'i': '𝙞', 'j': '𝙟', 'k': '𝙠', 'l': '𝙡', 'm': '𝙢', 'n': '𝙣', 'o': '𝙤', 'p': '𝙥', 'q': '𝙦',
    'r': '𝙧', 's': '𝙨', 't': '𝙩', 'u': '𝙪', 'v': '𝙫', 'w': '𝙬', 'x': '𝙭', 'y': '𝙮', 'z': '𝙯',
    'A': '𝘼', 'B': '𝘽', 'C': '𝘾', 'D': '𝘿', 'E': '𝙀', 'F': '𝙁', 'G': '𝙂', 'H': '𝙃',
    'I': '𝙄', 'J': '𝙅', 'K': '𝙆', 'L': '𝙇', 'M': '𝙈', 'N': '𝙉', 'O': '𝙊', 'P': '𝙋', 'Q': '𝙌',
    'R': '𝙍', 'S': '𝙎', 'T': '𝙏', 'U': '𝙐', 'V': '𝙑', 'W': '𝙒', 'X': '𝙓', 'Y': '𝙔', 'Z': '𝙕',
  },
},
{
  name: '7',
  map: {
    ' ': ' ',
    'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵',
    'i': '𝗶', 'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽', 'q': '𝗾',
    'r': '𝗿', 's': '𝘀', 't': '𝘁', 'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇',
    'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛',
    'I': '𝗜', 'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣', 'Q': '𝗤',
    'R': '𝗥', 'S': '𝗦', 'T': '𝗧', 'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭',
  },
},
{
  name: '8',
  map: {
    ' ': ' ',
    'a': 'a⃠', 'b': 'b⃠', 'c': 'c⃠', 'd': 'd⃠', 'e': 'e⃠', 'f': 'f⃠', 'g': 'g⃠', 'h': 'h⃠',
    'i': 'i⃠', 'j': 'j⃠', 'k': 'k⃠', 'l': 'l⃠', 'm': 'm⃠', 'n': 'n⃠', 'o': 'o⃠', 'p': 'p⃠', 'q': 'q⃠',
    'r': 'r⃠', 's': 's⃠', 't': 't⃠', 'u': 'u⃠', 'v': 'v⃠', 'w': 'w⃠', 'x': 'x⃠', 'y': 'y⃠', 'z': 'z⃠',
    'A': 'A⃠', 'B': 'B⃠', 'C': 'C⃠', 'D': 'D⃠', 'E': 'E⃠', 'F': 'F⃠', 'G': 'G⃠', 'H': 'H⃠',
    'I': 'I⃠', 'J': 'J⃠', 'K': 'K⃠', 'L': 'L⃠', 'M': 'M⃠', 'N': 'N⃠', 'O': 'O⃠', 'P': 'P⃠', 'Q': 'Q⃠',
    'R': 'R⃠', 'S': 's⃠', 'T': 'T⃠', 'U': 'U⃠', 'V': 'V⃠', 'W': 'W⃠', 'X': 'X⃠', 'Y': 'Y⃠', 'Z': 'z⃠',
  },
},
  {
  name: '9',
  map: {
    ' ': ' ',
    'a': '🇦 ', 'b': '🇧 ', 'c': '🇨 ', 'd': '🇩 ', 'e': '🇪 ', 'f': '🇫 ', 'g': '🇬 ', 'h': '🇭 ',
    'i': '🇮 ', 'j': '🇯 ', 'k': '🇰 ', 'l': '🇱 ', 'm': '🇲 ', 'n': '🇳 ', 'o': '🇴 ', 'p': '🇵 ', 'q': '🇶 ',
    'r': '🇷 ', 's': '🇸 ', 't': '🇹 ', 'u': '🇺 ', 'v': '🇻 ', 'w': '🇼 ', 'x': '🇽 ', 'y': '🇾 ', 'z': '🇿 ',
    'A': '🇦 ', 'B': '🇧 ', 'C': '🇨 ', 'D': '🇩 ', 'E': '🇪 ', 'F': '🇫 ', 'G': '🇬 ', 'H': '🇭 ',
    'I': '🇰 ', 'J': '🇯 ', 'K': '🇰 ', 'L': '🇱 ', 'M': '🇲 ', 'N': '🇳 ', 'O': '🇴 ', 'P': '🇵 ', 'Q': '🇶 ',
    'R': '🇷 ', 'S': '🇸 ', 'T': '🇹 ', 'U': '🇺 ', 'V': '🇻 ', 'W': '🇼 ', 'X': '🇽 ', 'Y': '🇾 ', 'Z': '🇿 ',
  },
},
];

module.exports = {
  config: {
    name: 'font',
   aliases: ["style"],
    version: '1.0',
    author: 'Arafat',
    countDown: 0,
    role: 0, // Set role to 0 for public access
    shortDescription: 'Convert text to different fonts',
    longDescription:
      'Choose from various font styles like bold, italic, cursive, etc. and transform your text into a unique visual format.',
    category: 'STYLE',
    guide: '-font <font type> <text>',
  },
  onStart: async ({ event, api, args }) => {
    if (args.length === 1 && args[0].toLowerCase() === 'list') {
      const exampleText = 'Arafat';
      const header = '		📒 𝗙𝗼𝗻𝘁 𝗟𝗶𝘀𝘁 \n◈━━━━━━━━◈✙◈━━━━━━━━▷\n';

      // Calculate the maximum length of the font names
      const maxFontNameLength = Math.max(...fontMaps.map(fontMap => fontMap.name.length));

      // Create the font list with perfect vertical alignment
      const availableFontsList = fontMaps.map((fontMap) => {
        const exampleChar = exampleText.split('')
          .map((char) => fontMap.map[char] || char)
          .join('');

        // Adjust the padding for font names
        const formattedFontName = `❯ ${fontMap.name.padEnd(maxFontNameLength)}𓊉`;

        // Calculate the padding for perfect vertical alignment
        const padding = ' '.repeat(maxFontNameLength - fontMap.name.length);

        return `${formattedFontName}${padding}  ${exampleChar}`;
      }).join('\n');

      return api.sendMessage(
        `${header}\n${availableFontsList}`,
        event.threadID,
        event.messageID
      );
    }

    if (args.length < 2) {
      return api.sendMessage(
        "|｡_｡| Invalid Usage: Please use the command with a font type and text.\n\nExample: -font bold i love you \n\nChat -𝘧𝘰𝘯𝘵 𝘭𝘪𝘴𝘵 to see more! •ᴗ•",
        event.threadID,
        event.messageID
      );
    }

    const command = args[0].toLowerCase();
    if (command === 'list') {
      const availableFonts = fontMaps.map((fontMap) => `★ ${fontMap.name}`).join('\n');
      return api.sendMessage(`Available fonts:\n${availableFonts}`, event.threadID, event.messageID);
    }

    const fontType = args.shift();
    const inputText = args.join(' ');

    const chosenFontMap = fontMaps.find(
      (fontMap) => fontMap.name === fontType.toLowerCase()
    );

    if (!chosenFontMap) {
      const availableFonts = fontMaps.map((fontMap) => `★ ${fontMap.name}`).join('\n');
      return api.sendMessage(
        `|｡_｡| Invalid Font Type: Available fonts:\n${availableFonts}\n\nExample: -font bold Hello! •ᴗ•`,
        event.threadID,
        event.messageID
      );
    }

    const outputText = inputText
      .split('')
      .map((char) => chosenFontMap.map[char] || char)
      .join('');

    return api.sendMessage(outputText, event.threadID, event.messageID);
  },
};
