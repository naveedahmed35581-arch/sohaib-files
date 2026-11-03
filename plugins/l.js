const { cmd } = require("../command");

// ═══════════════════════════════════════════════════════════
// COMMAND - RANDOM FUN PIC
// ═══════════════════════════════════════════════════════════
cmd(
    {
        pattern: "l",
        desc: "Send a random fun pic.",
        category: "attitude",
        react: "💪",
        filename: __filename,
        use: "",
    },
    async (conn, mek, m, { reply }) => {
        try {
            // Random pic array
            const pics = [
                "https://i.ibb.co/4ZSm9ztB/SOHAIB-AGENCY.jpg",
                "https://i.ibb.co/s9DLFXPP/SOHAIB-AGENCY.jpg",
                "https://i.ibb.co/bjNFLtSv/SOHAIB-AGENCY.jpg",
                "https://i.ibb.co/67xjmC61/SOHAIB-AGENCY.jpg",
                "https://i.ibb.co/m50G38Vc/SOHAIB-AGENCY.jpg",
                "https://i.ibb.co/JjzsJ3J2/SOHAIB-AGENCY.jpg",
                "https://i.ibb.co/F4Z85G9h/SOHAIB-AGENCY.jpg",
                "https://i.ibb.co/1JZR8Bs1/SOHAIB-AGENCY.jpg",
                "https://i.ibb.co/JR7HjKnT/SOHAIB-AGENCY.jpg",
                "https://i.ibb.co/C32c31nw/SOHAIB-AGENCY.jpg",
                "https://i.ibb.co/SXbvt1Xf/SOHAIB-AGENCY.jpg",
                "https://i.ibb.co/yc93MF9Z/SOHAIB-AGENCY.jpg",
                "https://i.ibb.co/svb5zt3D/SOHAIB-AGENCY.jpg",
                "https://i.ibb.co/YBkPjbjy/SOHAIB-AGENCY.jpg",
                "https://i.ibb.co/yB8gKbcF/SOHAIB-AGENCY.jpg",
                "https://i.ibb.co/yFS1FXM3/SOHAIB-AGENCY.jpg",
                "https://i.ibb.co/YBRd9vcY/SOHAIB-AGENCY.jpg",
                "https://i.ibb.co/zVym6Lqt/SOHAIB-AGENCY.jpg",
                "https://i.ibb.co/ZqnJkKf/SOHAIB-AGENCY.jpg",
                "https://i.ibb.co/mgpsQGG/SOHAIB-AGENCY.jpg"
            ];

            // Pick random pic
            const randomPic = pics[Math.floor(Math.random() * pics.length)];

            // Send image
            await conn.sendMessage(
                mek.chat,
                { 
                    image: { url: randomPic }, 
                    caption: `> SOHAIB-AGENCY 🖤` 
                },
                { quoted: mek }
            );

        } catch (error) {
            console.error("❌ Error in .jao command:", error);
            reply("❌ *Error in .jao command:*\n" + error.message);
        }
    }
);
