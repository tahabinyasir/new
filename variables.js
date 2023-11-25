const accountId = 1445533
let accountEmail = "tahadon@google.com"
var accountPassword = "12345"
accountCity = "DeraGhaziKhan"
let accountState;

//accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Lahore"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and fuctional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
