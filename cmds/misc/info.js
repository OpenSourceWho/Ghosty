const { Command } = require("discord.js-commando");
const { RichEmbed } = require('discord.js');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: "info",
            group: "misc",
            memberName: "info",
            description: "get information about the bot",
            examples: ["->info"],
        });
    }
    run(msg) {
        const embed = new RichEmbed()
        .setDescription("information about the bot")
        .addField("Library", "Discord.JS-Commando")
        .addField("Developers", "0101010_jellybean")
        .addField("Github", "Coming Soon")
        .setColor(0x00AE86)
        .setTimestamp();
        return msg.say(embed);
    }
};