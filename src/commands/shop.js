const { Command } = require('discord.js-akago');
const db = require('quick.db')
const config = require('../config.json')
module.exports = class ShopCommand extends Command {
    constructor() {
        super('shop', {
            description: 'Check out the store to buy stuff!',
            category: 'Profile',
            aliases: ["market", "store"]

        });
    }

    async execute(message, args) {

        const { MessageEmbed } = require('discord.js')

        const { client } = this;
        

        const p = new db.table(`profiles`)
        const profile = new db.table(`profiles`)
        const gb = new db.table(`guild`)
        const memberProfile = p.get(`profiles_${message.author.id}`)
        if(!memberProfile) return message.channel.send(`Baka! You don't have a profile! Get one with the \`start\` command!`)
        const prefix = gb.get(`guild_${message.guild.id}.prefix`) || config.bot_prefix
       
        const member = message.member.id
        const money = p.get(`profiles_${member}.money`)
        const id = message.author.id;

       
        const hunting = p.get(`profiles_${id}.bought.hunting-rifle`)
        const fishing = p.get(`profiles_${id}.bought.fishing-pole`)
        const laptop = p.get(`profiles_${message.author.id}.bought.laptop`)
        const rose = 100 * profile.get(`profiles_${message.author.id}.bought.rose`) 
let tulip = 200 * profile.get(`profiles_${message.author.id}.bought.tulip`) 
let carnation = 300 * profile.get(`profiles_${message.author.id}.bought.carnation`) 
let chrysanthemum = 400 * profile.get(`profiles_${message.author.id}.bought.chrysanthemum`) 
let daisy = 500 * profile.get(`profiles_${message.author.id}.bought.daisy`)
let freesia = 1000 * profile.get(`profiles_${message.author.id}.bought.freesia`)
        


const embed1 = new MessageEmbed().setColor(config.embed_colour)
.setAuthor(`${client.user.username} - Shop`, client.user.displayAvatarURL())
.addField(`Hunting Rifle`, [`**Usage:** \`Can be used to hunt animals\``, `**Cost:** \`${(hunting * 5000 || 5000).toLocaleString()}$\``, `**ID:** \`hunting-rifle\``].join('\n'))
.addField(`Fishing Pole`, [`**Usage:** \`Can be used to hunt fishs\``, `**Cost:** \`${(fishing * 5000 || 5000).toLocaleString()}$\``, `**ID:** \`fishing-pole\``].join('\n'))
.addField(`Laptop`, [`**Usage:** \`Can be used to post memes with\``, `**Cost:** \`${(laptop * 5000 || 5000).toLocaleString()}$\``, `**ID:** \`laptop\``])
.addField(`Information:`, `Your balance: $${money.toLocaleString()}\nBuy something with: \`${prefix}buy <item ID>\``)

const DiscordPages = require("discord-pages");
const embed2 = new MessageEmbed().setColor(config.embed_colour)
.setAuthor(`${client.user.username} - Shop`, client.user.displayAvatarURL({ dyanmic: true }))
.addFields([
    {
        name: `Rose`,
        value: [`**Cost:** \`${(rose || 100).toLocaleString()}$\``, `**ID:** \`rose\``].join('\n'),
        inline: true
    },
    {
        name: `Tulip`,
        value: [`**Cost:** \`${(tulip || 200).toLocaleString()}$\``, `**ID:** \`tulip\``].join('\n'),
        inline: true
    },
    {
        name: `Carnation`,
        value: [`**Cost:** \`${(carnation || 300).toLocaleString()}$\``, `**ID:** \`carnation\``].join('\n'),
        inline: true
    },
    {
        name: `Chrysanthemum`,
        value: [`**Cost:** \`${(chrysanthemum || 400).toLocaleString()}\``, `**ID:** \`chrysanthemum\``].join('\n'),
        inline: true
    },
    {
        name: 'Daisy',
        value: [`**Cost:** \`${(daisy || 500).toLocaleString()}$\``, `**ID:** \`daisy\``].join('\n'),
        inline: true
    },
    {
        name: 'Freesia',
        value: [`**Cost:** \`${(freesia || 1000).toLocaleString()}$\``, `**ID:** \`freesia\``].join('\n'),
        inline: true
    }
])
.addField(`Information:`, `Your balance: $${money.toLocaleString()}\nBuy something with: \`${prefix}buy <item ID>\``)

 
// Create an array of embeds
const pages = [
    embed1,
    embed2
];
 
// Create a new embed page
// Pages param is an array of embeds
// Channel param is the TextChannel that you want to send the embed pages
const embedPages = new DiscordPages({ 
    pages: pages, 
    channel: message.channel, 
    restricted: (user) => user.id===message.author.id,
    duration: 10000
});
embedPages.createPages();



    }
};