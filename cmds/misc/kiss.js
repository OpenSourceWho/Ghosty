const { Command } = require("discord.js-commando");
const { RichEmbed } = require('discord.js');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: "kiss",
            group: "misc",
            memberName: "kiss",
            description: "kiss a user virtually :joy:",
            examples: ["->kiss <username_or_mention>"],
            args: [
                {
                    key: "text",
                    prompt: "Please provide a mention or username",
                    type: "string"
                }
            ]
        });
    }
    run(msg, {text}) {
        const embed = new RichEmbed()
        .setDescription(`${msg.author.username} Kissed ${text}`)
        .setColor(0x00AE86)
        .setTimestamp();
        return msg.say(embed);
    }
};