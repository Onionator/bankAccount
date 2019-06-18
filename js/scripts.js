var currentBalance = 0;

function Account(name, initialBalance) {
  this.name = name,
  this.balance = initialBalance
}
Account.prototype.deposit = function(depositAmount) {
  account.balance = this.balance + depositAmount;
}
Account.prototype.withdraw = function(withdrawAmmount) {
  this.balance -= withdrawAmmount;
}
var account = new Account();



$(document).ready(function(){
  $("form.account").submit(function(event){
    event.preventDefault();
    console.log("here");
    var user = $("input:text[name=name]").val();
    var initial = parseFloat($("#initial").val());
    console.log(initial)
    //create an instance of the account
    account = new Account(user, initial);
    //output
    console.log(user);
    $(".balance h3").text(account.name);
    $(".balance p").text("$" + account.balance.toFixed(2));
  })
  $("form.deposit").submit(function(event) {
    event.preventDefault();
    var deposit = parseFloat($("#deposited").val());
    var withdraw = parseFloat($("#withdraw").val());
    if (deposit && withdraw) {
      account.deposit(deposit);
      account.withdraw(withdraw);
    }
     else if (deposit) {
      console.log(deposit);
      account.deposit(deposit);
    }
    else if (withdraw) {
      console.log(withdraw);
      account.withdraw(withdraw);
    }

    //output
    $(".balance p").text("$" + account.balance.toFixed(2));
  })
})
