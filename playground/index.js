const factory = require('./factory');
const router = require('./router');

const token1_addr = '0x7C604FCfd2C9E37681d63F46c806Ded635Ab25A4'
const token2_addr = '0x49aF5270dDD957024AA09D60B66f3ca359cFC1C9'

async function main() {
  await factory.allPairsLength()
  await factory.getPair(token1_addr, token2_addr)
  await router.addLiquidity(token1_addr, token2_addr)
}


main().then(() => {
  console.log('migrate success');
  process.exit()
}).catch(error => {
  console.log(error)
})