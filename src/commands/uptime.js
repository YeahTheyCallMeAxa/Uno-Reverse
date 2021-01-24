const { Command } = require('discord.js-akago');

module.exports = class UptimeCommand extends Command {
    constructor() {
        super('uptime', {
            description: 'Check for how long I have been online!',
            category: 'Misc',

        });
    }

    async execute(message) {
        const msg = await message.channel.send('Hold up...');
        const ms = require('pretty-ms')
        msg.edit(`__**Uptime**__\n${ms(this.client.uptime)}`);
    }
}; 