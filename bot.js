const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : RAMI`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : RAMI' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` ON ${client.guilds.size} Servers  -help`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '88h2unssmsss00sq') {
    msg.reply('omsomwiun2df');
  }
});
client.on("message", message => {
    var prefix = "-";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith("-clear")) {
                if (!message.member.hasPermission("MANGE_MESSAGES"))  return;
 if (!args[1]) {
                                let embed3 = new Discord.RichEmbed()
                                .setDescription(".clear <number>")
                                .setColor("RANDOM")
                                message.channel.sendEmbed(embed3);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let embed4 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(embed4);
                            }
                          }
});
client.on('message', message => {
     if (message.author.bot) return;
    if (message.content.startsWith("-link")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription(" تم أرسال الرابط برسالة خاصة ")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription(" مدة الرابط : ساعه  عدد استخدامات الرابط : 1 ")
      message.author.sendEmbed(Embed11)
    }
});
client.on('message', message => {
     if (message.content === "-bot") {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
     let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("**اسم السيرفر**", message.guild.name)
  .addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
  .addField("**المستخدمين:**", client.users.size)
  .addField("**قنوات:**", client.channels.size)
message.channel.sendEmbed(embed);
    }
});
   client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('-ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
                    });
					client.on('message', message => {

       if(message.content ==="-mutec") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
              });
                }
//FIRE BOT
    if(message.content === "*unmutec") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__:white_check_mark:**")
              });
                }
                
         
       
});
	client.on('message', message => {
if (message.content === "-server") {
if(!message.channel.guild) return;
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();

const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 سيـرفر ايــدي**", "**"+message.guild.id+"**",true)
.addField("**👑 سيــرفر اونـر**", "**"+message.guild.owner+"**" ,true)
.addField("**✅ الشــات الاســاســي**" , "**"+message.guild.DefaultChannel+"**" ,true)
.addField("**🌍 المـوقع**" , "**"+message.guild.region+"**",true)
.addField('**💬 عدد الرومــات الكتابيــة**',`**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`,true)
.addField("**📣 عدد الرومــات الصوتــية**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `,true)
.addField("**🤔 عدد ايــام انشــاء السيــرفر**", ` ** [ ${days.toFixed(0)} ] ** Day ` ,true)
.addField("**👔 الــرتــب**",`**[${message.guild.roles.size}]** Role `,true)
.addField("**💠 مســتوى حمــاية الســيرفر**", ` ** [ ${verificationLevels[message.guild.verificationLevel]} ] ** `,true)

.addField("👥عدد الاعضــاء",`
**${message.guild.memberCount}**`)
.setThumbnail(message.guild.iconURL)
.setColor('RANDOM')
message.channel.sendEmbed(embed)

}
});			
client.on("message", message => {
    var prefix = "-";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith("-clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحية لمسح الشات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم مسح الشات",
        color: 0x06DF00,
        description: "تم مسح الرسائل ",
        footer: {
          text: "! Rasta#9764"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
client.on('message', message => {
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith('-id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});
client.on('message' , message => { 
     if (message.content === "-bot") {

if(!message.channel.guild) return;
  if(message.content < 1023) return
  const Embed11 = new Discord.RichEmbed()
.setAuthor(client.user.username,client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setDescription(`***مجموع السيرفرات ${client.guilds.size} \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join('\n')}***`)
         message.channel.sendEmbed(Embed11)
    }
});
client.on("message", message => {
 if (message.content === "-help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`

	  
("═════ஜ۩۞۩ஜ══════════ஜ۩۞۩ஜ═════")
	  
***__وصف عن البوت__***
**
....
متعدد الميزات و الاوامر فيه اوامر جميله يحتوي على اجمل الاوامر مثل  مانع الاسبام و الترحيب 
وبعد اوامر مع التحديثات القادمه

سرعه اتصال ممتازه
سهل الاستخدام
صيانه كل يوم
مجاني بل كامل 
بوت عربي وسيتم اضافه اللغه الاجنبيه قريبا

**

        ***__General orders__***
**
『uptime /يروك بوت كم ساعه شغال
『id / معلومات عن حسابك』
『server / معلومات عن السيرفر』
『avatar / يعرض صورتك او صوره شخص』
『date / يعرض لك التاريخ』
『dt / يعرض الوقت في الامارات و مكه المكرمه و مصر و التاريخ』
**

        ***__Administrative Orders__***
**
『kick / كيك』
『ban / بان』
『mute /ميوت』
『unmute /فك الميوت』
『mutechannel /قفل الشات』
『unmutechannel /فتح الشات』
『clear / مسح بعدد』
『ct /انشاء روم كتابي』
『cv /انشاء روم صوتي』
『dc / لي حذف روم صوتي او كتابي』
『bc /برودكاست』
『v10 / عمل روم مده 10 دقائق』
『active /للتفعيل يجب عليك انت تقوم بوضع رتبه باسم Active وبس』
『delete /يمسح رسائل بدون رقم』
『clear/يمسح شات بعدد الي تبغى』
『autorole/سوي رتبه باسم Member وراح ياخذ عضو جديد الرتبه』
『roleid /لمعرفه ايدي الرتبه』

**

 

("═════ஜ۩۞۩ஜ══════════ஜ۩۞۩ஜ═════")
         
**  
        
`)


message.author.sendEmbed(embed)

}
}); 






client.on("message", message => {
 if (message.content === "*help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
**

        ***__Bot orders__***
**
『ping / يعرض لك سرعه اتصال البوت』
『uptime / يعرض لك صار للبوت كم شغال』
『support / سيرفر الدعم القني و المساعده』
『invite / اضافه البوت』
『bot / معلومات عن البوت』

**

message.author.sendEmbed(embed)

}
}); 
client.on('message', message => {
    var prefix = "-"
    if (message.content === prefix + "date") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }

});
  var coinflip =["https://i.imgur.com/ounEiyN.png", "https://i.imgur.com/xUwvSde.png"]
     client.on('message', message => {
         var args = message.content.split(" ").slice(1);         
     if(message.content.startsWith(prefix + 'coinflip')) {
          var embed = new Discord.RichEmbed()
 .setImage(coinflip[Math.floor(Math.random() * coinflip.length)])
 message.channel.sendEmbed(embed);
     }
 });
client.on('message', message => {
         if (message.content === "-dt") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }


            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "「التاريخ  والوقت」")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('الامارات',
                "「"+ hours + ":" + minutes +":"+ seconds + "」")
                 .addField('مكه المكرمه',
                "「"+ hours2 + ":" + minutes +":"+ seconds  + "」") 
                .addField('مصر',
                "「"+ hours3 + ":" + minutes +":"+ seconds  + "」") 
                
                .addField('Date',
                "「"+ Day + "-" + Month + "-" + Year +  "」")

                 message.channel.sendEmbed(Date15);
        }
    });
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
Welcome To Server   مرحبا بك في السيرفر يا عمري 





هل عجبك البوت???
قم باضافه افضل بوت عربي من خلال الرابط

https://discordapp.com/oauth2/authorize?client_id=425971519735463936&permissions=2097176631&scope=bot


**`) 
}).catch(console.error)
})
client.on('message', message => {
    if (message.content.startsWith("-invite")) {

    message.guild.fetchInvites()
    .then(invites => message.channel.send(` انت جبت     [${invites.find(invite => invite.inviter.id === message.author.id).uses}]      عضو للسيرفر   `))
         
    }
});
client.on("message", message => {
 if (message.content === "-support") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  اهلا بك عزيز مستخدم يسرنا تواجدك معا في سيرفر سبروت
	  
	  رابط:(https://discord.gg/AcZGuyU)
	  `)


message.author.sendEmbed(embed)

}
}); 
client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "Member");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
     
})
client.on('message', message => {
var prefix = "-"
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "ban") {
   if(!message.channel.guild) return message.reply('** This command only for servers**');
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("** You Dont Have Permission **");
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("** You Dont Have Permission **");
var user = message.mentions.users.first();
  var reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user).banable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BAN!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  user.send(reason).then(()=>{
message.guild.member(user).kick();
  })
}
});
client.on('message', message => {
    var prefix = "-"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("** You Dont Have Permission **");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("** You Dont Have Permission **");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});
client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "-mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** You Dont Have Permission **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** You Dont Have Permission **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
     return message.reply("** تم اعطاء العضو المحدد ميوت  **").catch(console.error);
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      return message.reply("** تم اعطاء العضو المحدد ميوت كتابي .. **").catch(console.error);
    });
  }

};

});
client.on("message", message => {
  if (message.author.bot) return;
 
  let command = message.content.split(" ")[0];
 
  if (command === "-unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** You Dont Have Permission **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
 
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** You Dont Have Permission **').catch(console.error);
 
  if (message.guild.member(user).removeRole(muteRole.id)) {
      return message.reply("** تم فك الميوت عن الشخص المحدد  .. **").catch(console.error);
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      return message.reply("** تم فك الميوت عن الشخص المحدد .. **").catch(console.error);
    });
  }
 
};
 
});
client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**  bc <message>* **");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});
client.on("message", (message) => {
if (message.content.startsWith("-ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});
client.on("message", (message) => {
if (message.content.startsWith("-cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});
client.on("message", (message) => {
    if (message.content.startsWith('-dc')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**لا يوجد روم بهذا الاسم**').catch(console.error);
        channel.delete()
    }
});
client.on('message', message => {
if(message.content == '-adminbot') {
         if(!message.author.id === '331383478719479809') return;
var gimg;
var gname;
var gmemb;
var gbots;
var groles;
var servers = client.guilds;
servers.forEach((g)=>{
gname = g.name;
gimg = g.iconURL;
gmemb = g.members.size;
gbots = g.members.filter(m=>m.bot).size;
groles = g.roles.map(r=> {return r.name});
let serv = new Discord.RichEmbed()
.setAuthor(gname,gimg)
.setThumbnail(gimg)
.addField('Server bots',gbots)
.addField('Server Member Count',gmemb = g.members.size)
.setColor('RANDOM')
message.channel.send(`
Server Name : **${gname}**
Server MemberCount : **${gmemb} **
        
        `);
      message.channel.sendEmbed(serv);
}) 
}
});
client.on('message', message => {
     if (message.content === "-help") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription('تم الارسال في الخاص :white_check_mark: ')
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
        if (message.content.startsWith("-uptime")) {
    let ms = client.uptime;
    let cd = 24 * 60 * 60 * 1000; // Calc days
    let ch = 60 * 60 * 1000; // Calc hours
    let cm = 60 * 1000; // Calc minutes
    let cs = 1000; // Calc seconds
    let days = Math.floor(ms / cd);
    let dms = days * cd; // Days, in ms
    let hours = Math.floor((ms - dms) / ch);
    let hms = hours * ch; // Hours, in ms
    let minutes = Math.floor((ms - dms - hms) / cm);
    let mms = minutes * cm; // Minutes, in ms
    let seconds = Math.round((ms - dms - hms - mms) / cs);
    if (seconds === 60) {
        minutes++; // Increase by 1
        seconds = 0;
    }
    if (minutes === 60) {
        hours++; // Inc by 1
        minutes = 0;
    }
    if (hours === 24) {
        days++; // Increase by 1
        hours = 0;
    }
    let dateStrings = [];

    if (days === 1) {
        dateStrings.push('**1** day');
    } else if (days > 1) {
        dateStrings.push('**' + String(days) + '** days');
    }

    if (hours === 1) {
        dateStrings.push('**1** hour');
    } else if (hours > 1) {
        dateStrings.push('**' + String(hours) + '** hours');
    }

    if (minutes === 1) {
        dateStrings.push('**1** minute');
    } else if (minutes > 1) {
        dateStrings.push('**' + String(minutes) + '** minutes');
    }

    if (seconds === 1) {
        dateStrings.push('**1** second');
    } else if (seconds > 1) {
        dateStrings.push('**' + String(seconds) + '** seconds');
    }

    let dateString = '';
    for (let i = 0; i < dateStrings.length - 1; i++) {
        dateString += dateStrings[i];
        dateString += ', ';
    }
    if (dateStrings.length >= 2) {
        dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
        dateString += 'and ';
    }
    dateString += dateStrings[dateStrings.length - 1];
    message.channel.send(dateString);
}
});
client.login(process.env.BOT_TOKEN);
