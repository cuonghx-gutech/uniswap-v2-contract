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
  const [deployer] = await ethers.getSigners();
  console.log('Deploying contracts with the account: ' + deployer.address);


  // const factory_address = '0xEC32E4A112Fa188740a69312f592f8a6B153c923'

  // // We get the contract to deploy
  // const Muticall = await hre.ethers.getContractFactory("Multicall");
  // const muticall = await Muticall.deploy();
  // console.log("Muticall address:", muticall.address);

  // const WETH = await hre.ethers.getContractFactory("contracts/weth/WETH.sol:WETH9");
  // const weth = await WETH.deploy();
  // console.log("weth address:", weth.address);

  // const Router = await hre.ethers.getContractFactory("UniswapV2Router02");
  // const router = await Router.deploy(factory_address,  weth.address);
  // console.log("router address:", router.address);

  // const TOKEN1 = await hre.ethers.getContractFactory("TOKEN1");
  // const token1 = await TOKEN1.deploy();
  // console.log("token1 address:", token1.address);

  // const TOKEN2 = await hre.ethers.getContractFactory("TOKEN2");
  // const token2 = await TOKEN2.deploy();
  // console.log("token2 address:", token2.address);

  const Dai = await hre.ethers.getContractFactory("Dai");
  const dai = await Dai.deploy(hre.network.config.chainId);
  console.log("dai address:", dai.address);

  const TetherToken = await hre.ethers.getContractFactory("TetherToken");
  const tetherToken = await TetherToken.deploy(100000000000, "Tether USD", "USDT", 6);
  console.log("USDT address:", tetherToken.address);

    const FakeUSDC = await hre.ethers.getContractFactory("FakeUSDC");
    const fakeUSDC = await FakeUSDC.deploy();
    console.log("fakeUSDC address:", fakeUSDC.address);


  
  // const FiatTokenV1 = await hre.ethers.getContractFactory("FiatTokenV1");
  // const fiatTokenV1 = await FiatTokenV1.deploy();
  // console.log("fiatTokenV1 address:", fiatTokenV1.address);

  // const FiatTokenProxy = await hre.ethers.getContractFactory("FiatTokenProxy");
  // const fiatTokenProxy = await FiatTokenProxy.deploy(fiatTokenV1.address, { gasLimit: 100000 });
  // console.log("USDC address:", fiatTokenProxy.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });