require("@nomiclabs/hardhat-waffle");
require('dotenv').config({ path: '.env' });

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;
const goerli_PRIVATE_KEY = process.env.goerli_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [goerli_PRIVATE_KEY],
    },
  }
};
