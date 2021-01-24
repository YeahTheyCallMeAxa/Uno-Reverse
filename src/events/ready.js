const { Listener } = require('discord.js-akago');

module.exports = class Ready extends Listener {
  constructor() {
    super('ready', {
      once: false,
    })
  }

  async execute() {
     console.log('im on' + this.client.user.tag)
     this.client.user.setActivity(`Uno Reverse | e!help`, { type: 'WATCHING' })
      
      

    
  }
};


