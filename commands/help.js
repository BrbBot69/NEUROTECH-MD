const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╔═══════════════════╗
   *🤖 ${settings.botName || 'BALLAS𝗑ᴾᴿᴼ'}*  
   Version: *${settings.version || '2.0.5'}*
   by ${settings.botOwner || '♤𝗑ᴾᴿᴼ♧'}
   YT : ${global.ytch}
╚═══════════════════╝

*Available Commands:*

╔═══════════════════╗
🌐 *General Commands*:
║ ➤ .help or .menu
║ ➤ .ping
║ ➤ .alive
║ ➤ .tts 
║ ➤ .owner
║ ➤ .joke
║ ➤ .quote
║ ➤ .fact
║ ➤ .weather 
║ ➤ .news
║ ➤ .attp 
║ ➤ .lyrics 
║ ➤ .8ball 
║ ➤ .groupinfo
║ ➤ .staff or .admins 
║ ➤ .vv
║ ➤ .trt 
║ ➤ .ss 
║ ➤ .jid
╚═══════════════════╝ 

╔═══════════════════╗
👮‍♂️ *Group Commands*:
║ ➤ .ban 
║ ➤ .promote 
║ ➤ .demote 
║ ➤ .mute 
║ ➤ .unmute
║ ➤ .delete or .del
║ ➤ .kick 
║ ➤ .warnings 
║ ➤ .warn 
║ ➤ .antilink
║ ➤ .antibadword
║ ➤ .clear
║ ➤ .tag 
║ ➤ .tagall
║ ➤ .chatbot
║ ➤ .resetlink
║ ➤ .welcome 
║ ➤ .goodbye 
╚═══════════════════╝

╔═══════════════════╗
🔒 *Owner Commands*:
║ ➤ .mode
║ ➤ .autostatus
║ ➤ .clearsession
║ ➤ .antidelete
║ ➤ .cleartmp
║ ➤ .setpp 
║ ➤ .autoreact
╚═══════════════════╝

╔═══════════════════╗
🎨 *Image/Sticker Commands*:
║ ➤ .blur 
║ ➤ .simage 
║ ➤ .sticker 
║ ➤ .tgsticker 
║ ➤ .meme
║ ➤ .take  
║ ➤ .emojimix 
╚═══════════════════╝  

╔═══════════════════╗
🎮 *Game Commands*:
║ ➤ .tictactoe 
║ ➤ .hangman
║ ➤ .guess 
║ ➤ .trivia
║ ➤ .answer 
║ ➤ .truth
║ ➤ .dare
╚═══════════════════╝

╔═══════════════════╗
🤖 *AI Commands*:
║ ➤ .gpt 
║ ➤ .gemini 
║ ➤ .imagine 
║ ➤ .flux 
╚═══════════════════╝

╔═══════════════════╗
🎯 *Fun Commands*:
║ ➤ .compliment 
║ ➤ .insult 
║ ➤ .flirt 
║ ➤ .shayari
║ ➤ .goodnight
║ ➤ .roseday
║ ➤ .character 
║ ➤ .wasted 
║ ➤ .ship 
║ ➤ .simp 
║ ➤ .stupid 
╚═══════════════════╝

╔═══════════════════╗
🔤 *Textmaker*:
║ ➤ .metallic 
║ ➤ .ice 
║ ➤ .snow 
║ ➤ .impressive 
║ ➤ .matrix 
║ ➤ .light 
║ ➤ .neon 
║ ➤ .devil 
║ ➤ .purple 
║ ➤ .thunder 
║ ➤ .leaves 
║ ➤ .1917 
║ ➤ .arena 
║ ➤ .hacker 
║ ➤ .sand 
║ ➤ .blackpink 
║ ➤ .glitch 
║ ➤ .fire 
╚═══════════════════╝

╔═══════════════════╗
📥 *Downloader*:
║ ➤ .play 
║ ➤ .song 
║ ➤ .instagram 
║ ➤ .facebook 
║ ➤ .tiktok 
║ ➤ .video 
║ ➤ .ytmp4 
╚═══════════════════╝

╔═══════════════════╗
💻 *Github Commands:*
║ ➤ .git
║ ➤ .github
║ ➤ .sc
║ ➤ .script
║ ➤ .repo
╚═══════════════════╝

POWERED BY ♤𝗑ᴾᴿᴼ♧:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: false,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '0029VbAGDcU2f3ETH93NUd3o@newsletter',
                        newsletterName: '♤𝗑ᴾᴿᴼ♧',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: false,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '0029VbAGDcU2f3ETH93NUd3o@newsletter',
                        newsletterName: 'NEUROTECH MD by Official Allamano',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
