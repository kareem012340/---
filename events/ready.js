const { Client, ActivityType, Events } = require("discord.js");

module.exports = {
    name: Events.ClientReady,
    once: true,
    /**
     * @param {Client} client
     */
    execute(client) {
        client.user.setStatus("dnd");
        client.user.setActivity({
            name: 'by _2w1', 
            type: ActivityType.Playing, 
        });
        
        console.log(`Bot is now online as ${client.user.tag}`);
    },
};
// https://youtu.be/XdiWQyuDwqQ
