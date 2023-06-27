// Crie um objeto Twitch.Player. Isso será renderizado dentro do espaço reservado div
const config = {
    // width: 854,
    // height: 480,
    allowfullscreen: true,
    autoplay: false,
    channel: "sharxera",
    // parent: ["embed.example.com", "othersite.example.com"]
}
new Twitch.Embed("twitch-embed",config);


// function update(){
//     //https://dev.twitch.tv/docs/embed/video-and-clips/
//     var options = {
//         // width: <width>,
//         // height: <height>,
//         channel: "<CHANNEL ID>",
//         video: "<VIDEO ID>",
//         // collection: "<collection ID>",
//         // only needed if your site is also embedded on embed.example.com and othersite.example.com
//         // parent: ["embed.example.com", "othersite.example.com"]
//       };
//       var player = new Twitch.Player("teste", options);
//       player.setVolume(0.5);
// }