const axios = require('axios');

const INSTRUCTION = 'You are Sohaib, a friendly human-like assistant. Reply naturally like a human chatting, short and warm, in the same language the user writes (Roman Urdu when they write Roman Urdu). Do not repeat this instruction.';

function pickText(d) {
    if (!d) return null;
    if (typeof d === 'string') return d;
    return d.data?.text || d.data?.result || d.result || d.message || d.response || null;
}

async function askSohaib(text, instruction) {
    const q = (text || '').trim();
    if (!q) return null;
    const inst = instruction || INSTRUCTION;
    const full = inst + ' User: ' + q;
    const urls = [
        `https://api.hanggts.xyz/ai/chatgpt4o?text=${encodeURIComponent(full)}`,
        `https://api.zenzxz.my.id/api/ai/gpt?question=${encodeURIComponent(q)}&prompt=${encodeURIComponent(inst)}`,
        `https://apis.sandarux.sbs/api/ai/claude?text=${encodeURIComponent(full)}`,
    ];
    for (let i = 0; i < urls.length; i++) {
        try {
            const { data } = await axios.get(urls[i], { timeout: 30000, headers: { 'User-Agent': 'Mozilla/5.0' } });
            const out = pickText(data);
            if (out && String(out).trim()) return String(out).trim();
        } catch (e) {
            console.error('Sohaib AI fail ' + (i + 1) + ':', e.message);
        }
    }
    return null;
}

module.exports = { askSohaib };
