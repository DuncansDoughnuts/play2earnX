require("@nomicfoundation/hardhat-toolbox");

const bitfinityPrivateKey = process.env.BITFINITY_PRIVATE_KEY;

module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    hardhat: {},
    localhost: {
      url: process.env.LOCAL_RPC_URL || 'http://127.0.0.1:8545',
    },
    bitfinity: {
      url: process.env.BITFINITY_RPC_URL || 'https://testnet.bitfinity.network',
      accounts: bitfinityPrivateKey ? [bitfinityPrivateKey] : [],
      chainId: 355113,
      timeout: 120000,
    },
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
};
