const { Command } = require("discord.js-commando");
const { RichEmbed } = require('discord.js');
const snekfetch = require("snekfetch");

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: "githubuser",
            group: "misc",
            memberName: "githubuser",
            description: "Get Information about a user on github.com",
            examples: ["->github <username>"],
            args: [
                {
                    key: "text",
                    prompt: "Please provide a registered user on github.com",
                    type: "string"
                }
            ]
        });
    }
    run(msg, { text }) {
        snekfetch.get(`https://api.github.com/users/${text}`).then(r => {
            const embed = new RichEmbed()
            .setTitle(`Information for ${text}`)
            .addField("Username", r.body.login)
            .addField("ID", r.body.id)
            .addField("Description/Bio", r.body.bio)
            .addBlankField(true)
            .addField("Followers", r.body.followers)
            .addField("Following", r.body.following)
            .addBlankField(true)
            .addField("Joined", r.body.created_at)
            .setColor(0x00AE86)
            .setTimestamp();
            return msg.say(embed);
        });
    }
};