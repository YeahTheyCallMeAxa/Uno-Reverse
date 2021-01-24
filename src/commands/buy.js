const { Command } = require('discord.js-akago');
const db = require('quick.db')
const { MessageEmbed } = require('discord.js')
const config = require('../config.json')

module.exports = class BuyCommand extends Command {
    constructor() {
        super('buy', {
            description: `Purchase an item! Usage:\n\`b!buy <item ID> [number]\` Find the items with the \`shop\` command!`,
            category: 'Profile',
           

        });
    }

    async execute(message, args) {

        try{
const profile = new db.table(`profiles`)
const memberProfile = profile.get(`profiles_${message.author.id}`)
if(!memberProfile) return message.channel.send(`Baka! You don't have a profile! Get one with the \`start\` command!`)


const prefix = config.bot_prefix


const items = []

items.push("hunting-rifle")
items.push("fishing-pole")
items.push("rose")
items.push("tulip")
items.push("carnation")
items.push("chrysanthemum")
items.push("daisy")
items.push("freesia")
items.push("laptop")

const laptop = profile.get(`profiles_${message.author.id}.bought.laptop`)
const fishing = profile.get(`profiles_${message.author.id}.bought.fishing-pole`)
const hunting = profile.get(`profiles_${message.author.id}.bought.hunting-rifle`)

var number;
if(args[0] === `fishing-pole`) number = 5000 * fishing || 5000
if(args[0] === `hunting-rifle`) number = 5000 * hunting || 5000
if(args[0] === `laptop`) number = 5000 * laptop || 5000
if(args[0] === `rose`) number = 100 * profile.get(`profiles_${message.author.id}.bought.rose`) || 100
if(args[0] === `tulip`) number = 200 * profile.get(`profiles_${message.author.id}.bought.tulip`) || 200
if(args[0] === `carnation`) number = 300 * profile.get(`profiles_${message.author.id}.bought.carnation`) || 300
if(args[0] === `chrysanthemum`) number = 400 * profile.get(`profiles_${message.author.id}.bought.chrysanthemum`) || 400
if(args[0] === `daisy`) number = 500 * profile.get(`profiles_${message.author.id}.bought.daisy`) || 500
if(args[0] === `freesia`) number = 1000 * profile.get(`profiles_${message.author.id}.bought.freesia`) || 1000


if(!items.includes(args[0]) || !args[0]){
    return message.channel.send(`:hamburger: || That is not an item to buy! Find a real item with \`${prefix}shop\``)
}

var cost = number 


if(!args[1]){
    const afterBal = profile.get(`profiles_${message.author.id}.money`) - cost
    if(afterBal > 0){
        profile.subtract(`profiles_${message.author.id}.money`, cost)
        profile.add(`profiles_${message.author.id}.bought.${args[0]}`, 1)
        return message.channel.send(`You bought a ${args[0]} for $${cost.toLocaleString()}`)
    } else {
        return message.channel.send(`You don't have enough money! You need $${cost.toLocaleString()} to buy this item!`)
    }

} 
 else if(args[0]){
    const bal = profile.get(`profiles_${message.author.id}.money`)

    if(isNaN(args[1])) return message.channel.send(`:hamburger: || That is not a valid amount!`)

    if(args[1] < 0) return message.channel.send(`:hamburger: || You can only buy more than 1 of **${args[0]}**`)


    const newCost = number * args[1]

    

    if(newCost > bal) return message.channel.send(`:hamburger: || You can't afford this!`)
    profile.subtract(`profiles_${message.author.id}.money`, newCost)
    profile.add(`profiles_${message.author.id}.bought.${args[0]}`, args[1])
    return message.channel.send(`:hamburger: || You successfully bought **${args[1]} ${args[0]}s** for **$${newCost.toLocaleString()}**`)

}
        } catch(err){
            await console.log(err)
            return message.channel.send(`Oopsie woopsie, I made a fucky-wucky, the error has been sent to my developers.`)
        }


//end points
    }
}

