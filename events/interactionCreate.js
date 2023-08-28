require("dotenv").config();

module.exports = {
  name: 'interactionCreate',
  once: false,
  async execute(interaction) {
    if (interaction.isCommand()) {
      await slashCommandHandler(interaction) // slashCommandHandler() NOT NATIVE FUNCTION
      return
    }
    if (interaction.isButton()) {
      await addRoleToUser(interaction, interaction.member)
    }
  }
};

async function addRoleToUser(interaction, member) {
  const roleId = turnPresetToId(interaction.customId)
  if(roleId == null) {
    await interaction.reply({content:"Role error ! Role was not part of preset!", ephemeral:true}); 
    return;
  }
  if(member.roles.cache.has(roleId)) {
    await member.roles.remove(roleId)
    await interaction.reply({content:`Removed: <@&${roleId}>`, ephemeral:true})
    return;
  }
  else {
    await member.roles.add(roleId)
    await interaction.reply({content:`Added: <@&${roleId}>`, ephemeral:true})
    return;
  }
}

async function slashCommandHandler(interaction) { // NEEDS TO DO THIS FOR COMMANDS BUILT WITH THIS FILE SYSTEM
  const command = interaction.client.commands.get(interaction.commandName);
  if (command) {
      try {
          await command.execute(interaction);
        return
      }
      catch (error) {
          console.error(error);
          await interaction.reply({ content: `${error}`, ephemeral: true });
          return
      }
  }
}

function turnPresetToId(customId) {
  let roleId = "unset"
  switch(customId) {
    case "typescript":
      roleId = "1143896475504484393"
      break;
    case "python":
      roleId = "1143976545598308455"
      break;
    case "unity":
      roleId = "1143896553715675228"
      break;
    case "javascript":
      roleId = "1143977095530291280"
      break;
    case "serverdrift":
      roleId = "1143896373293502545"
      break;
    case "cs":
      roleId = "1143976850830405702"
      break;
    case "hardware":
      roleId = "1144593434095657000"
      break;
    case "linux":
      roleId = "1143997194127540264"
      break;
    case "excel":
      roleId = "1143997054658556147"
      break;
    default:
      roleId == null
  }
  return roleId
}