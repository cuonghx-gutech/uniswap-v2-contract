const ethers = require('ethers')
const {abi: factory_abi} = require('../artifacts/contracts/v2-core/contracts/UniswapV2Factory.sol/UniswapV2Factory.json');
const { getSigner, options } = require('./config');

const factory_address = "0x0F052319229B2b1827e0AD68F32a8e965b8a2CbA"




exports.allPairsLength = async function () {
  try {
    const signer = await getSigner();
    const uniswapV2FactoryContract = new ethers.Contract(factory_address, factory_abi, signer);

    let result = await uniswapV2FactoryContract.allPairsLength();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

exports.getPair = async function (token0, token1) {
  try {
    const signer = await getSigner();
    const uniswapV2FactoryContract = new ethers.Contract(factory_address, factory_abi, signer);

    let result = await uniswapV2FactoryContract.getPair(token0, token1);
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

exports.createPair = async function (token0, token1) {
  try {
    const signer = await getSigner();
    const uniswapV2FactoryContract = new ethers.Contract(factory_address, factory_abi, signer);

    const transaction = await uniswapV2FactoryContract
      .createPair(token0, token1, options)
    console.log(transaction)
    return transaction;
  } catch (err) {
    console.log(err);
    throw err;
  }
};