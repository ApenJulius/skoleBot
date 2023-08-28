const { ActionRowBuilder, ButtonBuilder } = require("discord.js");

const initRowTop = new ActionRowBuilder() // max 5 per row
.addComponents(
  new ButtonBuilder()
    .setCustomId("typescript")
    .setLabel("TypeScript")
    .setEmoji("<:ts:1143984035513761944>")
    .setStyle("Secondary"),
  new ButtonBuilder()
    .setCustomId("python")
    .setLabel("Python \u200b \u200b \u200b \u200b \u200b \u200b \u200b") // space then  0 width space to trick discord into resizing the button width
    .setEmoji("<:py:1143979302313005157>")
    .setStyle("Secondary"),
  new ButtonBuilder()
    .setCustomId("unity")
    .setLabel("Unity")
    .setEmoji("<:unity:1143979416586825870>")
    .setStyle("Secondary"),
    
)

const initRowMid = new ActionRowBuilder() // Split into 3 rows with 3 buttons to look better than 5 buttons top 1 button bot.
.addComponents(
  new ButtonBuilder()
    .setCustomId("javascript")
    .setLabel("JavaScript")
    .setEmoji("<:js:1143979228304510976>")
    .setStyle("Secondary"),
    new ButtonBuilder()
    .setCustomId("serverdrift")
    .setLabel("Serverdrift")
    .setEmoji("<:serverdrift:1143982220860739645>")
    .setStyle("Secondary"),
  new ButtonBuilder()
    .setCustomId("cs")
    .setLabel("C# \u200b \u200b \u200b \u200b \u200b")
    .setEmoji("<:cs:1143979259992486010> ")
    .setStyle("Secondary"),
)

const initRowBot = new ActionRowBuilder() // max 5 per row
.addComponents(
  new ButtonBuilder()
    .setCustomId("hardware")
    .setLabel("Hardware \u200b \u200b")
    .setEmoji("<:hardware:1145624318487822387>")
    .setStyle("Secondary"),
  new ButtonBuilder()
    .setCustomId("linux")
    .setLabel("Linux \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b") // space then  0 width space to trick discord into resizing the button width
    .setEmoji("<:linux:1145624307322601572>")
    .setStyle("Secondary"),
  new ButtonBuilder()
    .setCustomId("excel")
    .setLabel("Excel ")
    .setEmoji("<:excel:1145624079446057020>")
    .setStyle("Secondary"),
    
)

module.exports = {initRowBot, initRowTop, initRowMid}