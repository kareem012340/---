module.exports = {
  token: process.env.DISCORD_TOKEN, // يتم أخذ التوكن من الـ Secrets
  prefix: "!",
  owners: [process.env.OWNER_ONE, process.env.OWNER_TWO, process.env.OWNER_THREE]
};
