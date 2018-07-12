const { CommandoClient } = require("discord.js-commando");
const path = require("path");

const config = require("./config.js");

const client = new CommandoClient({
    commandPrefix: "->",
    owner: "195865303710695424",
    disableEveryone: true
});

client.on("ready", () => {
    console.log("Ghosty v1.0 | Written by k1nzy\nDiscord.JS-Commando bot project");
    client.user.setActivity(`->help | serving ${client.guilds.size} guilds!`);
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ["misc", "View a list of all misc commands"]
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, "cmds"));

client.login(config.token);