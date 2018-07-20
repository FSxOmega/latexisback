const Discord = require('discord.js');
const client = new Discord.Client();
//This is the Bot-Prefix
const prefix = ':';

//Bot on Ready
client.on('ready', () => {
    console.log('Bot Launched!:D');
});

//Command +info
client.on('message', message => {
    if (message.content === prefix + 'info') {

        message.channel.send({embed: {
  color: 3447003,
 
  description: "I am Back - Prefix: + // Bug Fixes // Bot Creator:FSxOmega!"
}});
      }  
});

//Command +help
client.on('message', message => {
    if (message.content === prefix + 'help') {

        message.channel.send({embed: {
  color: 3447003,
  
  description: "damn... here you got them - :info // :yt // :invite // :donate // :support // More Commands will come soon!"

}});
      }  
});

//Command +yt
client.on('message', message => {
    if (message.content === prefix + 'yt') {

        message.channel.send({embed: {
  color: 3447003,
 
  description: "YouTube : https://m.youtube.com/channel/UCTJQkBj3dhkgA1TXnpZGkhw"
}});
      }  
});

//Command +invite
client.on('message', message => {
    if (message.content === prefix + 'invite') {
        message.channel.send({embed: {
  color: 3447003,

  description: "Wanna invite me to your Server? - https://discordapp.com/oauth2/authorize?client_id=469517178757185546&permissions=8&scope=bot"
}});

      }  
});

//Command +donate
client.on('message', message => {
    if (message.content === prefix + 'donate') {

        message.channel.send({embed: {
  color: 3447003,
  
  description: "If you wanna Donate for faster Coding - paypal.me/fsxalpha"
}});
      }
});

//Command +support
client.on('message', message => {
    if (message.content === prefix + 'support') {

        message.channel.send({embed: {
  color: 3447003,
 
  description: "Wanna join my Support Discord Server? - https://discord.gg/mvwaBr4'"
}});
      }
});

client.login(process.env.BOT_TOKEN);
