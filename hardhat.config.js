require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    hardhat:{
      forking: {
        url: process.env.URI,
        enabled: true,
      },
      chainId: 1,
    }
  }
};


// for forking mainnet accounts
// npx hardhat node --network hardhat