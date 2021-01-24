const db = require('quick.db')
const { Command } = require('discord.js-akago');
const moment = require('moment')

module.exports = class BegCommand extends Command {
    constructor() {
        super('beg', {
            description: 'Beg for money to buy some stuff!',
            category: 'Economy',

        });
    }

    async execute(message) {
        const users = [
            'Cammy',
            'Diamond',
            'Ara',
            'Mikio',
            'Kip',
            'RoastedToast',
            'Knight',
            'Shinu',
            'Jadiel',
            'Ray',
            'E Diety',
            'Taiga Aisaka',
            'ZeroTwo',
            'Asuna Yuuki'
        ]
        const user = users[Math.floor(Math.random() * users.length)]
        const profiles = new db.table(`profiles`);
        const memberProfile = profiles.get(`profiles_${message.author.id}`)
        if(!memberProfile) return message.channel.send(`Baka! You don't have a profile! Get one with the \`start\` command!`)
        const begCmd = profiles.get(`profiles_${message.author.id}.begCmd`)
        if (Date.now() > begCmd || begCmd === undefined){
            profiles.set(`profiles_${message.author.id}.begCmd`, Date.now() + 300000)
            
        
        
        const resesLose = [
            `Haha! You lost it all, try again next time, kiddo!`,
            `Bruh, you lost, thats fun right?`,
            `WOW! Jackpot! You earned 900M, but sadly the cops realised and took it all, sucks to suck.`,
            `You held a cup with so-called-held-head and you got nothing, nub.`
        ]
        const resLose = resesLose[Math.floor(Math.random() * resesLose.length)]
    
   
    let oneTwo; 
    oneTwo = [
        1, //win
        2, //win
        3, //win
        4, //win
        5, //win
        6,//win
        7, //win
        8, //win, again
        9, //lose
        10 //lose
    ]
    const oneOrTwo = oneTwo[Math.floor(Math.random() * oneTwo.length)]
    
    

    if(oneOrTwo === 9) { return message.channel.send(resLose) }
    else if(oneOrTwo === 10) { return message.channel.send(resLose) }
    else{
        let amount = Math.floor(Math.random() * 100) + 15;
        const resesWin = [
           `**${user}:** Hello! Here take \`${amount}$\`, hope it helps!`,
           `Listen I'm **${user}**! Do you have any idea who I am? Anyways, my mom is watching so I have to pay, here take ${amount}$ and go commit suicide!`,
           `O-Oh you creatures again, here take \`${amount}$\``,
           `I have to pay for drugs myself idiot! Whatever, take \`${amount}$\` never come back though!`,
           `Here take \`${amount}$\` but remember to come back here and pass me some cocain!`
        ]
        const resWin = resesWin[Math.floor(Math.random() * resesWin.length)]
        
        profiles.add(`profiles_${message.author.id}.money`, amount)
       return message.channel.send(resWin)
       
        
        } 
        


    }else{
        return message.channel.send(`You are on a cooldown! Come back ${moment(begCmd).fromNow()}!`)
    }
    


  

    }
};