const { Command } = require("discord.js-commando");
const { RichEmbed } = require('discord.js');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: "argurment",
            group: "misc",
            memberName: "argurment",
            description: "Reads your own argurment",
            examples: ["->test <argurment>"],
            args: [
                {
                    key: "text",
                    prompt: "Please provide a argurment",
                    type: "string"
                }
            ]
        });
    }
    run(msg, { text }) {
        const embed = new RichEmbed()
        .addField("You Said", text)
        .addField("Length", text.length)
        .addField("Channel", msg.channel)
        .setColor(0x00AE86)
        .setTimestamp();
        return msg.say(embed);
    }
};