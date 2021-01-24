const { Command } = require('discord.js-akago');
const os = require('os');
module.exports = class StatsCommand extends Command {
    constructor() {
        super('stats', {
            description: 'Check out information about me!',
            category: 'Misc',

        });
    }

    async execute(message) {
       const ms = require('pretty-ms');
       const uptime = ms(this.client.uptime);
       const { MessageEmbed } = require('discord.js');
       const users = this.client.users.cache.size;
       let channelscount = this.client.channels.cache.size;
       let arch = os.arch();
       let platform = os.platform();
       let shard = this.client.ws.shards.size;
       let NodeVersion = process.version;
       let cores = os.cpus().length;
       //from ZeroDiscord i was too tired lmfao...
       const embed = new MessageEmbed().setColor(require('../hexcode'))
       .setAuthor(this.client.user.username + ' - Stats', this.client.user.displayAvatarURL())
       .addFields([
           {
               name: 'Basic Stats',
               value: `User count: \`${users}\`\nChannel count: \`${channelscount}\``
           },
           {
               name: 'Arch',
               value: arch
           },
           {
               name: 'Platform',
               value: platform
           },
           {
               name: 'Shard',
               value: shard
           },
           {
               name: 'Cores',
               value: cores
           },
           {
               name: 'Language',
               value: `JavaScript, Node.js ${NodeVersion}`
           },
           {
               name: 'Library',
               value: `Discord.js v${require('discord.js').version}`
           },
           {
               name: 'Links:',
               value: `[Coded by Axa](https://discord.gg/gJFxTNJ)\n[Github](https://YeahTheyCallMeAxa/Economybot)`
           }
       ])
       .setFooter(`Thank you for your support!`, message.author.displayAvatarURL({ dynamic: true }))
message.channel.send(embed)
    }
}; 