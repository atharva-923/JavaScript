const accountId = 1234
let accountEmail = `atharva@gmail.com`
var accountPassword = `12345`// prefer not to use this variable due to issue in the block and fucntion scope
accountCity = `Virar`

// accountId = 567 <--- const
accountEmail = `athaa@gmail.com`
accountPassword = `6789`
accountCity = `Mumbai`

// console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity])