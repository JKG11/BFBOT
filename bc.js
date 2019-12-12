const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";
client.on("message", message => {

            if (message.content.startsWith(prefix + "JB")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : AJK`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : AJK ' `);
    console.log(`tez samir betefta7`);
	console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity(`$JB | for broadcasting`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});



client.login("NjU0NzA0NDU1NTM0NzcyMjM1.XfJbMA._y5xSMrqKZNnDTn3-SYoMtO9VN4")

