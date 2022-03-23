# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

npx hardhat run scripts/deploy.js --network <network-name>
npx hardhat run scripts/deploy-factory.js --network local
npx hardhat run scripts/deploy-rest.js --network local

# G.U.SANDBOX contract address:

- factory: 0xDf3A301BF405e65a40629f471311073e5927Db08
- init: 0x1892ee6b3b8f653471529d0b06a772bdc5588bb0b15607cb427c8148f70004a9
- mutical: 0x21df08b97D30Ba9c424E855579153dCA3c767153
- router: 0xA5972F1292a56737383D819B6beE0659e28D8CEF
- WETH: 0x46b5efc844C3c825339A76f0f5EfD7D461123E84
- DAI: 0xe320fF054Db7BcDC57143AD483eeA81DC7D94751
- USDT address: 0x16987102a05e21Afa1e065CdaEFc334f44706005
- fakeUSDC address: 0xE2Bc617C43f726ff2bfA3A6DDa0A0C306208738a
- DAI_WETH 0x80E57b1423802AAe1177dBa46b9CAf7D02f11FEa
- USDT_WETH 0x13b78Be549B3811f68bee12037736a444F13D303
- USDC_WETH 0xda74a2B9cbE674bFe6792f30CFF1F261b91F52eB
- blocklytics: 0x648bFa652F889c80F88919f2620489c101F82E25

# GANACHE

➜ uniswap-v2-contract git:(master) ✗ npx hardhat run scripts/deploy-factory.js --network local

Deploying contracts with the account: 0xF4CA4e78329226247EBB08E90F05d5e456eAa108
Factory address: 0x0F052319229B2b1827e0AD68F32a8e965b8a2CbA
INIT_CODE_HASH 0xcccb99982da3aae63a50c003351df0ac691e3ea57433ea88be7a26d47419dc7e
➜ uniswap-v2-contract git:(master) ✗ npx hardhat run scripts/deploy-factory.js --network local

➜ uniswap-v2-contract git:(master) ✗ npx hardhat run scripts/deploy-rest.js --network local

Deploying contracts with the account: 0xF4CA4e78329226247EBB08E90F05d5e456eAa108
Muticall address: 0x39dccAeD109eb1b993A9B691FABdBE38FDa5F977
weth address: 0x34E60f4adc2DF071046aE753f2ff4d7032A58938
router address: 0xC68eaAff3A401D8ad2F143B91cDdf6bEc84f82fd
token1 address: 0x7C604FCfd2C9E37681d63F46c806Ded635Ab25A4
token2 address: 0x49aF5270dDD957024AA09D60B66f3ca359cFC1C9
dai address: 0xDe59557FC2D8d44CbB92B66476f2637Cc209EA1d
USDT address: 0x660b4310312407F1b3e52fdC8D4d92026E9c914C
fakeUSDC address: 0x005bdd6C378cDafE36Cb61733442B52385560563
➜ uniswap-v2-contract git:(master) ✗
