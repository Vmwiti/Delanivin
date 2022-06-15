 function bankAccount(name, initialDeposit){
     this.name = name;
     this.initialDeposit;
     }
function addNewMember() {
let nameClient = document.querySelector("#Name").value;
let display = document.getElementById("nameShow")
let initialDeposit = document.querySelector("#initial").value;
let new_member = new bankAccount(newClient, initialDeposit)
display.innerHTML = $(new_member.name)
}

let transact = document.querySelector("#btn").value;
transact.addEventLisner("click", (e) => {
e.preventDefault()
addNewMember();


})
