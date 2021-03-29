const Discord = require('discord.js');
const client = new Discord.Client();
const token = require("./token.js");


const prefix = '/';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.on('ready', () => {
    console.log('Bot online!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 
    if(command === 'telegram'){
        const Discord = require('discord.js');
        const Embed = new Discord.MessageEmbed()
        .setColor('#34aeeb')
        .setTitle('Telegram')
        .setURL('https://t.me/joinchat/Vj0dgURX6_riPKuw')
        .setImage('https://i.imgur.com/KuRUASH.png')
        .setAuthor('Guardians Staff')
        .setDescription('**clicca sul titolo per entrare nel nostro telegram**')
        .setThumbnail('https://web.telegram.org/img/logo_share.png')
        .setTimestamp()
        message.reply(Embed)
        
    } 
    if(command === 'instagram'){
        client.commands.get('instagram').execute(message, args);
    } 
    if(command === 'tiktok'){
        client.commands.get('tiktok').execute(message, args);
    } 
    if(command === 'twitch'){
        client.commands.get('twitch').execute(message, args);
    } 
    if(command.includes('vaffanculo')){
        client.commands.get('vaffanculo').execute(message, args);
    } 
    if(command.includes('prova')){
        
        const Discord = require('discord.js');
        const Embed = new Discord.MessageEmbed()
        .setColor('#8f00ff')
        .setTitle('Twitch stream')
        .setURL('https://www.twitch.tv/guardiansgaming_tv')
        .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2880px-Google_2015_logo.svg.png')
        .setAuthor('Guardians Staff')
        .setDescription('**clicca sul titolo per guardare**')
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2880px-Google_2015_logo.svg.png')
        .setTimestamp()
        message.channel.send(Embed)
    
    }
    if(command==='mich'){
        messagge.reply('!d bump')
        
    }
});


client.login(token);