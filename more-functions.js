function displayMailingLabel(name, address, city, state, zip) {
     console.log(name /n + address /n + city + state + zip);
}

function addNumbers(num1, num2) {
     let sum = num1 + num2;
     return console.log(sum);

}

function displayReceicpt(totalDue, amtPaid) {

     let changeDue = totalDue - amtPaid;
     if(changeDue < 0) {
          return console.log("Change due:" + changeDue);

     }

     return console.log("Remaining balance:" + changeDue);
}



