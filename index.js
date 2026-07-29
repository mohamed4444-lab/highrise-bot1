require("dotenv").config();

const { Bot } = require("highrise-js-sdk");

const bot = new Bot({
  token: process.env.BOT_TOKEN,
  room: process.env.ROOM_ID
});

bot.on("ready", () => {
  console.log("✅ Bot Connected!");
});

bot.on("playerJoin", (player) => {
  console.log(`${player.username} joined`);
});

bot.on("chat", (player, message) => {
  console.log(`${player.username}: ${message}`);
});

bot.login();
