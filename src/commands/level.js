const { Command } = require('discord.js-akago');

module.exports = class PingCommand extends Command {
    constructor() {
        super('level', {
            description: 'Check your or level or level up!',
            category: 'Profile',

        });
    }

    async execute(message, args) {
        const { table } = require('quick.db')
        const profiles = new table(`profiles`)
        const money = profiles.get(`profiles_${message.author.id}.money`)
        const level = profiles.get(`profiles_${message.author.id}.level`)

        const amount = level * 4500 || 4500
        const msg = args[0]
        if(!msg) return message.channel.send(level===0?`Haha! You are only level 0!`:`You are level \`${level}\`, nice!\nUse: \`${new table(`guild`).get(`guild_${message.guild.id}.prefix`) || require('../config.json').bot_prefix}level up\` if you want to level up!`)
       else if(msg === 'up') {
           if(money < amount) return message.channel.send(`Your stupidity triggers me! You need \`${amount}$\` to level! You only have \`${money}$\``)
        else{
           profiles.add(`profiles_${message.author.id}.level`, 1)
           return message.channel.send(`Congrats! You have leveled up to level \`${level + 1}\` with \`${amount}$\``)
       }
    }else return message.channel.send(`What is ${msg} suppose to mean? If you want to level, try doing \`level up\``)

    }
}; 