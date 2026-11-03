// config.js - Centralized configuration 
require('dotenv').config();

const config = {
    // MongoDB Configuration (only this is from process.env)
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://jawadmd:irfanmd@cluster0.cqcxhti.mongodb.net/?appName=Cluster0',
    
    // Fixed Database Name
    DB_NAME: process.env.DB_NAME || 'Sohaib Md',
    
    // Collections Configuration
    COLLECTIONS: {
        SESSIONS: 'whatsapp_sessions',
        NUMBERS: 'active_numbers',
        CONFIGS: 'bot_configs'
    },
    
    // Bot Configuration
    AUTO_VIEW_STATUS: 'true',
    AUTO_STATUS_REACT: 'false',
    AUTO_STATUS_REPLY: 'false',
    STATUS_REPLY_MSG: '*_Your status viewed successfully by SOHAIB AGENCY 🤖_*',
    AUTO_RECORDING: 'false',
    AUTO_REACT: 'false',
    CHATBOT: 'false',
    AUTO_TYPING: 'false',
    ALWAYS_ONLINE: 'false',
    VERSION: '4.0.0 Bᴇᴛᴀ',
    DESCRIPTION: '*🧡 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴏʜᴀɪʙ ᴍᴅ ᴍɪɴɪ ʙᴏᴛ ✨*',
    ANTI_DELETE_PATH: 'inbox',
    ANTI_DELETE: 'false',
    ANTI_EDIT_PATH: 'inbox',
    ANTI_EDIT: 'false',
    STICKER_NAME: 'SOHAIB-MD',
    ANTI_LINK: 'true',
    ANTI_LINK_ACTION: 'warn',
    WELCOME: 'false',
    GOODBYE: 'false',
    WELCOME_MESSAGE: '*_@user joined the group, welcome! 🎉_*',
    GOODBYE_MESSAGE: '*_@user has left the group, we will miss them! 👋_*',
    ADMIN_ACTION: 'false',
    MODE: 'public',
    PREFIX: '.',
    ANTI_CALL: 'false',
    REJECT_MSG: '*Call Rejected Automatically 📵*',
    READ_MESSAGE: 'false',
    AUTO_STATUS_SEEN: 'true',
    OWNER_REACT: 'false',
    CUSTOM_REACT: 'false',
    HEART_REACT: 'false',
    CUSTOM_EMOJIS: ['😊', '👍', '🚀', '💻', '🎉', '🔥'],
    HEART_EMOJIS: ['❤️', '💖', '💝', '💗', '💓', '💞', '💕', '💟', '♥️', '❤️‍🔥', '❤️‍🩹'],
    OWNER_EMOJIS: ['❤️', '🧡', '💛', '💚', '🩵', '💙', '💜', '🩷', '🤎', '🖤', '🩶', '🤍', '❤️‍🔥', '❤️‍🩹', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥️'],
    REACT_EMOJIS: [
'❤️','🔥','👏','😮','😢','👍','🎉','🙏','😍','😊','🥰','💕','🤩','✨','😎','🥳','🙌',
'💖','💗','💓','💞','💘','💝','💟','❣️','♥️','❤️‍🔥','❤️‍🩹',
'🧡','💛','💚','🩵','💙','💜','🩷','🤍','🤎','🖤','🩶',
'🌹','🌺','🌸','💐','🌷','🪷','🌻','🌼',
'⭐','🌟','💫','✨','⚡','☀️','🌈','☄️',
'👑','💎','🏆','🥇','🎖️','🏅',
'🎁','🎀','🧸','🍫','🍭','🍬',
'🦋','🕊️','🦢','🦚','🦜','🐬','🐳','🐠',
'🍓','🍒','🍑','🍍','🥭','🍉','🍇',
'🎵','🎶','🎤','🎧','🎸','🎹',
'🚀','🛸','🌍','🌎','🌏','🌙','⭐',
'💯','✔️','✅','☑️','💥','💫','🫶','🤝','💪',
'🏖️','🌊','⛱️','🏝️','🌅','🌄',
'🎇','🎆','🎊','🎈','🎂','🍰','🧁',
'💌','📩','📨','💍','💐','🪄',
'🔮','🪙','💠','🔷','🔹','🔸','🔶',
'🕯️','🪔','🏵️','🎗️','🌠','🌌',
'🫰','🤲','🙌','🙏','💐','💝',
'♾️','☘️','🍀','🌿','🌱','🌴','🎋',
'🧿','🪬','💎','👑','🏰','🗝️'
] ,
    
    // Bot Identity
    BOT_NAME: '🧡 𝐒𝐎𝐇𝐀𝐈𝐁 𝐀𝐆𝐄𝐍𝐂𝐘 🧡',
    OWNER_NAME: '𝐒𝐎𝐇𝐀𝐈𝐁 𝐀𝐆𝐄𝐍𝐂𝐘 𝐇𝐔𝐁 𝐁𝐎𝐓',
    OWNER_NUMBER: '923069120355',
    DEV: '923069120355',
    IK_IMAGE_PATH: './lib/love.jpg',
    BOT_IMAGE: 'https://d.uguu.se/OPbZQCVr.jpg',
    
    // System Configuration
    MAX_RETRIES: 50,
    OTP_EXPIRY: 300000,
    BANNED: [],
    SUDO: ["923069120355@s.whatsapp.net"],
    
    // Default Settings Template
    DEFAULT_SETTINGS: { 
        // Status & View Settings
        AUTO_VIEW_STATUS: 'true',
        AUTO_STATUS_SEEN: 'true',
        AUTO_STATUS_REACT: 'false',
        AUTO_STATUS_REPLY: 'false',
        STATUS_REPLY_MSG: '*_Your status viewed successfully by SOHAIB AGENCY 🤖_*',
        READ_MESSAGE: 'false',
        
        // Auto Actions
        AUTO_RECORDING: 'false',
        AUTO_REACT: 'false',
        CHATBOT: 'false',
        AUTO_TYPING: 'false',
        ALWAYS_ONLINE: 'false',
        OWNER_REACT: 'false',
        CUSTOM_REACT: 'false',
        HEART_REACT: 'false',
        CUSTOM_EMOJIS: ['😊', '👍', '🚀', '💻', '🎉', '🔥'],
        HEART_EMOJIS: ['❤️', '💖', '💝', '💗', '💓', '💞', '💕', '💟', '♥️', '❤️‍🔥', '❤️‍🩹'],
        
        // Anti Features
        ANTI_DELETE: 'false',
        ANTI_DELETE_PATH: 'inbox',
        ANTI_EDIT: 'false',
        ANTI_EDIT_PATH: 'inbox',
        ANTI_CALL: 'false',
        ANTI_LINK: 'true',
        ANTI_LINK_ACTION: 'warn',
        
        // Group Events
        WELCOME: 'false',
        GOODBYE: 'false',
        ADMIN_ACTION: 'false',
        
        // Message Templates
        WELCOME_MESSAGE: '*_@user joined the group, welcome! 🎉_*',
        GOODBYE_MESSAGE: '*_@user has left the group, we will miss them! 👋_*',
        REJECT_MSG: '*Call Rejected Automatically 📵*',
        // Bot Identity
        VERSION: '4.0.0 Bᴇᴛᴀ',
        OWNER_NAME: '𝐒𝐎𝐇𝐀𝐈𝐁 𝐀𝐆𝐄𝐍𝐂𝐘 𝐇𝐔𝐁 𝐁𝐎𝐓',
        OWNER_NUMBER: '923069120355',
        DEV: '923069120355',
        DESCRIPTION: '*🧡 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴏʜᴀɪʙ ᴍᴅ ᴍɪɴɪ ʙᴏᴛ ✨*',
        STICKER_NAME: 'SOHAIB AGENCY',
        MODE: 'public',
        PREFIX: '.',
        BOT_NAME: '🧡 𝐒𝐎𝐇𝐀𝐈𝐁 𝐀𝐆𝐄𝐍𝐂𝐘 🧡',
        BOT_IMAGE: 'https://d.uguu.se/OPbZQCVr.jpg',
        
        REACT_EMOJIS: ['😂', '❤️', '🔥', '👏', '😮', '😢', '🤣', '👍', '🎉', '🤔', '🙏', '😍', '😊', '🥰', '💕', '🤩', '✨', '😎', '🥳', '🙌'],
        OWNER_EMOJIS: ['❤️', '🔥', '👑', '⭐', '💎'],
        
        // Lists
        BANNED: [],
        SUDO: ["923069120355@s.whatsapp.net"]
    }
};

module.exports = config;
