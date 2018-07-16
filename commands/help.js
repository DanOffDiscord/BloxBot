const Discord = require("discord.js");

module.exports = async(client, msg, suffix) => {
	const embed = new Discord.RichEmbed();
	const DMs = new Discord.RichEmbed();
	embed.setTitle("BloxBot Help Menu")
		.setDescription("Here is a list of commands that BloxBot has.")
		.addField("ping", "Tests the ping connection of the bot with a milliseconds value.", true)
		.addField("help", "DMs you this list of commands.", true)
		.addField("getrole", "Gets the role of a particular user in any Roblox group.", true)
		.addField("interview", "Allows you to store basic information about an interview.", true)
		.addField("eval", "Allows you to evaluate JavaScript code. **Developers Only**", true)
		.setColor("#00BFFF")
		.setThumbnail(client.user.avatarURL);
	msg.author.send({ embed });

	DMs.setDescription("Check your DMs. 📩")
		.setColor("#00BFFF");
	msg.channel.send({ embed: DMs });
};
