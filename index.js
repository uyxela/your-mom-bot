const Discord = require('discord.js');
const { token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log("Ready!");
});

client.login(token);

client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;

    if (message.content === 'your mom') {

        message.channel.send("ha h  a hha ahh a  h   h a   ah   ha");

        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();

            // Create a dispatcher
            const dispatcher = connection.play('your_mom.mp3');

            dispatcher.on('start', () => {
                console.log('audio.mp3 is now playing!');
            });

            dispatcher.on('finish', () => {
                console.log('audio.mp3 has finished playing!');
                connection.disconnect();
            });

            // Always remember to handle errors appropriately!
            dispatcher.on('error', console.error);

        }
    }
});