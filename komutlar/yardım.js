const discord = require('discord.js');
const { MessageButton } = require("discord-buttons");

exports.run = async (client, message, args) => {
    let buton1 = new MessageButton()
    .setStyle("green")
    .setLabel("Ana sayfa")
    .setID("butonid1");
    let buton2 = new MessageButton()
    .setStyle("green")
    .setLabel("Bot özel")
    .setID("butonid2");
    let buton3 = new MessageButton()
    .setStyle("green")
    .setLabel("Moderasyon")
    .setID("butonid3");
    let buton4 = new MessageButton()
    .setStyle("green")
    .setLabel("Eğlence")
    .setID("butonid4");

const embed = new discord.MessageEmbed()
    .setTitle(`Rol Almak için aşağıdaki butonları kullanın`)

    const embed1 = new discord.MessageEmbed()
            .setTitle('Komutlar')
            .setDescription("Aşağıda botun sahip olduğu komutların bir listesi bulunmaktaıdır.")
            .addFields(
                {name: `⚙️Sunucu Komutları⚙️`, value:`**Aşağıda genel komutlar bulunmaktadır**`, inline: false},
                {name: `⚙️**!komut1**`, value:`>>> komut1 açıklama.`, inline: false},
                {name: `⚙️**!komut2**`, value:`>>> komut2 açıklama.`, inline: false},
                {name: `⚙️**!komut3**`, value:`>>> komut3 açıklama.`, inline: false}
                )
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))
    const embed2 = new discord.MessageEmbed()
            .setTitle('Komutlar')
            .setDescription("Aşağıda botun sahip olduğu komutların bir listesi bulunmaktaıdır.")
            .addFields(
                {name: `⚙️**!komut1**`, value:`>>> komut1 açıklama.`, inline: false},
                {name: `⚙️**!komut2**`, value:`>>> komut1 açıklama.`, inline: false},
                {name: `⚙️**!komut3**`, value:`>>> komut1 açıklama.`, inline: false}
                )
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))
    const embed3 = new discord.MessageEmbed()
            .setTitle('Komutlar')
            .setDescription("Aşağıda botun sahip olduğu komutların bir listesi bulunmaktaıdır.")
            .addFields(
                {name: `🎃Eğlence Komutları🎃`, value:`**Aşağıda eğlence komutları bulunmaktadır**`, inline: false},
                {name: `🎃**!komut1**`, value:`>>> komut1 açıklama.`, inline: false},
                {name: `🎃**!komut2**`, value:`>>> komut2 açıklama.`, inline: false},
                {name: `🎃**!komut3**`, value:`>>> komut3 açıklama.`, inline: false}
                )
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))

let msg = await message.channel.send({embed: embed , buttons: [ buton1, buton2, buton3, buton4 ]});
    
  client.on("clickButton", async button => {
button.reply.defer();
    if (button.id == "butonid1") { 
    msg.edit({ embed: embed })
}                                                                 
    if (button.id == "butonid2") { 
    msg.edit({ embed: embed1 })
}
   if (button.id == "butonid3") { 
    msg.edit({ embed: embed2 })
}
   if (button.id == "butonid4") { 
    msg.edit({ embed: embed3 })
}
 });
}
exports.conf = {
    enabled: true, //kullanıma açık mı değil mi
    guildOnly: true, //dmde kullanıma açık mı değil mi
    aliases: [], //kısayollar
    permLevel: 0 //perm level mainde karşıliklar yazar
  };
  
  exports.help = {
    name: "yardım", //komutu çalıştıracak olan kelime
    description: "",//açıklama (isteğe bağlı)
    usage: ""//kullanım (isteğe bağlı)
  };