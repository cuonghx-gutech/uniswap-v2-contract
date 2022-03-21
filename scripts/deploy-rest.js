// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  const factory_address = '0x0F052319229B2b1827e0AD68F32a8e965b8a2CbA'

  // We get the contract to deploy
  const Muticall = await hre.ethers.getContractFactory("Multicall");
  const muticall = await Muticall.deploy();
  console.log("Muticall address:", muticall.address);

  const WETH = await hre.ethers.getContractFactory("contracts/weth/WETH.sol:WETH9");
  const weth = await WETH.deploy();
  console.log("weth address:", weth.address);

  const Router = await hre.ethers.getContractFactory("UniswapV2Router02");
  const router = await Router.deploy(factory_address,  weth.address);
  console.log("router address:", router.address);

  const TOKEN1 = await hre.ethers.getContractFactory("TOKEN1");
  const token1 = await TOKEN1.deploy();
  console.log("token1 address:", token1.address);

  const TOKEN2 = await hre.ethers.getContractFactory("TOKEN2");
  const token2 = await TOKEN2.deploy();
  console.log("token2 address:", token2.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });