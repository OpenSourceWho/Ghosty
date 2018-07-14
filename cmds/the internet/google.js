const { Command } = require("discord.js-commando");
const { RichEmbed } = require('discord.js');
const google = require("google");

google.resultsPerPage = 3
const nextCounter = 0

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: "google",
            group: "misc",
            memberName: "google",
            description: "Google or in my words search whatever you want!",
            examples: ["->google <thing_you_want_to_search_for>"],
            args: [
                {
                    key: "text",
                    prompt: "Please provide something for me to search",
                    type: "string"
                }
            ]
        });
    }
    run(msg, { text }) {
        google(`${text}`, function (err, res){
            if (err) console.error(err)
           
            for (var i = 0; i < res.links.length; ++i) {
              var link = res.links[i];
              const embed = new RichEmbed()
              .setTitle(`Search information for ${text}`)
              .addField("Title & Link", link.title + " - " + link.href)
              .addField("Description", link.description + "\n")
              .setColor(0x00AE86)
              .setTimestamp();
              return msg.say(embed);
            }
           
            if (nextCounter < 4) {
              nextCounter += 1
              if (res.next) res.next()
            }
        });
    }
};