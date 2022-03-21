const ethers = require('ethers')

const { abi: erc20_abi } = require('../artifacts/contracts/erc20/Token1.sol/TOKEN1.json');
const {abi: router_abi} = require('../artifacts/contracts/v2-periphery/contracts/UniswapV2Router02.sol/UniswapV2Router02.json');
const { getSigner, options } = require('./config');

const UniswapV2Router02Address = '0xC68eaAff3A401D8ad2F143B91cDdf6bEc84f82fd';
const owner_addr = '0xf4ca4e78329226247ebb08e90f05d5e456eaa108'

const amountTokenDesired = (500 * 10 ** 18).toString()
const amountToken =  (300 * 10 ** 18).toString()
exports.approve = async function (tokenAddress) {
  try {
    const signer = await getSigner();
		const ERC20Contract = new ethers.Contract(tokenAddress, erc20_abi, signer);
		let result =  await ERC20Contract.approve(UniswapV2Router02Address, amountTokenDesired, options)

		console.log(result);
	} catch (err) {
		console.log(err);
		throw err;
	}
};

exports.addLiquidity = async function (
  token1,
  token2,
) {
	try {
		await this.approve(token1);
    await this.approve(token2);

    const signer = await getSigner();
    const UniswapV2Router02Contract = new ethers.Contract(UniswapV2Router02Address, router_abi, signer);

    const transaction = await UniswapV2Router02Contract.addLiquidity(token1, token2,amountTokenDesired, amountTokenDesired, amountToken, amountToken, owner_addr,'2000000000', options)
		console.log(transaction);
		return transaction;
	} catch (err) {
		console.log(err);
		throw err;
	}
};