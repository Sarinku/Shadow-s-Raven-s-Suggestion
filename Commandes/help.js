const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botIcon = bot.user.displayAvatarURL;
        
        let helpEmbed = new Discord.RichEmbed()
        .addField("__**Liste des commandes :**__",
            "Menu d'aide du Bot ! Apprenez toutes les commandes :"
        )

        .addField("__**Infos**__",
            "`.suggestion` : Permet de faire voter une suggestion !\n"+
            "`.ping` : Affiche la latence du bot !\n"          
        )
        
        .setFooter(`Fait par Sir Link | Demandé par ${message.author.username}`)
        .setThumbnail(botIcon)
        .setColor("#dc143c");

    return message.channel.send(helpEmbed);
}

module.exports.help = {
    name: "help"
}