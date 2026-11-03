const { cmd } = require('../command');
const { askSohaib } = require('../lib/sohaib-ai');

cmd({
    on: "body",
    dontAddCommandList: true
}, async (conn, mek, m, { from, body, isCmd, userConfig, reply }) => {
    try {
        if (userConfig?.CHATBOT !== 'true') return;
        if (isCmd) return;
        const text = (body || '').trim();
        if (!text) return;
        if (mek?.key?.fromMe) return;
        if (from === 'status@broadcast' || (from && from.endsWith('@newsletter'))) return;
        const ans = await askSohaib(text);
        if (ans) await reply(ans);
    } catch (e) {
        console.error('Chatbot error:', e.message);
    }
});
