require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.5.16",
      },
      {
        version: "0.4.18",
      },
      {
        version: "0.5.15",
      },
      {
        version: "0.7.0",
      },
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
    ],
  },
  networks: {
    gu_chain: {
      url: `https://b32b3f3b-c059-47f5-b171-1a3c952f61b7.4z9mdn90pg6rby7s7iqv9kjgg.ep.bccloud.net:8545/`,
      accounts: [`c6bfc2d4951051da4cc08a15b672114592af10e2259f67a33c71513ec10275c6`]
    },
    local: {
      url: "http://localhost:10000",
      accounts: ["c6bfc2d4951051da4cc08a15b672114592af10e2259f67a33c71513ec10275c6"]
    }

  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};