const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.channel.send("HONK HONK!");

    let autvideo = [
        "https://youtu.be/wMGEVE1zeRE",
        "https://youtu.be/vrsKPK90DGE",
        "https://youtu.be/c3vONDqvayo",
        "https://youtu.be/dVmr3IaIXJc",
        "https://youtu.be/Mq0WJ8HrR64",
        "https://youtu.be/r_xeqt9l5FQ",
        "https://youtu.be/ILwojChp2VU",
        "https://youtu.be/2sIKYlxDxwE"
    ];
    let selectvideo = autvideo[Math.floor(Math.random() * autvideo.length)];
    message.channel.send(selectvideo);

}

module.exports.help = {
    name: "honk"
}