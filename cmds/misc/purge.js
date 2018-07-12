const { Command } = require("discord.js-commando");
const { RichEmbed } = require('discord.js');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: "purge",
            group: "misc",
            memberName: "purge",
            description: "Delete a list of messages",
            examples: ["->purge <number_of_messages_to_delete>"],
            clientPermissions: ['MANAGE_MESSAGES'],
            userPermissions: ['MANAGE_MESSAGES'],
            args: [
                {
                    key: "text",
                    prompt: "Please provide a number of messages to delete",
                    type: "string"
                }
            ]
        });
    }
    run(msg, { text }) {
        msg.channel.bulkDelete(text);
        const embed = new RichEmbed()
        .setDescription(`Deleted ${text} messages!`)
        .setColor(0x00AE86)
        .setTimestamp();
        return msg.say(embed);
    }
};