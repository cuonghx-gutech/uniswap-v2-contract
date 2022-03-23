

const RPC_URL = 'https://b32b3f3b-c059-47f5-b171-1a3c952f61b7.4z9mdn90pg6rby7s7iqv9kjgg.ep.bccloud.net:8545/'

const FACTORY_ADDRESS = ''

const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
const signer = await new ethers.Wallet("c6bfc2d4951051da4cc08a15b672114592af10e2259f67a33c71513ec10275c6", provider);

const factory = new ethers.Contract(FACTORY_ADDRESS, dai_abi, provider)
