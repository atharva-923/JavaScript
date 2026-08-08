const accountId = 1234 // we use const because we don't want to change the value of this variable 
let accountEmail = `atharva@gmail.com`
var accountPassword = `12345`// prefer not to use this variable due to issue in the block and fucntion scope
accountCity = `Virar`

//accountId = 567 <--- const value assigned variable cannot be changed.
accountEmail = `athaa@gmail.com`
accountPassword = `6789`
accountCity = `Mumbai`

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity])