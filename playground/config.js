const ethers = require('ethers')

const rpc_url = 'http://localhost:10000';
const private_key = "c6bfc2d4951051da4cc08a15b672114592af10e2259f67a33c71513ec10275c6"
const provider = new ethers.providers.JsonRpcProvider(rpc_url);

const getSigner = () => new ethers.Wallet(private_key, provider);

const options = {
  gasLimit: '1000000',
  gasPrice: '1000000000'
}
module.exports = {getSigner, options}