require("@nomicfoundation/hardhat-toolbox");

require('dotenv').config();

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY]
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY]
    },
    
  },
  // etherscan: {
  //   apiKey: process.env.POLYGONSCAN_API_KEY
  // },
  solidity: {
    compilers: [
      {
        version: "0.8.0"
      }
    ]
  }
};