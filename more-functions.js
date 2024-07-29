// function displayMailingLabel(name, address, city, state, zip) {
// 	console.log(name);
// 	console.log(address);
// 	console.log(city + ", ", state, zip);
// }

// displayMailingLabel("Emily Morgan", "1234 ABCD Street", "New York", "NY", "12345");

function addNumbers(totalDue, amtPaid) {
	let remainingBalance = totalDue + amtPaid;
	return remainingBalance;
}
function displayReceicpt() {
	let changeDue = addNumbers(400, -600);
	if (changeDue < 0) {
		return console.log(`
               Amt due: ${totalDue}
               Amt paid: ${addNumbers.amtPaid}
               Change due: ${changeDue}`);
	     }
     else {
          return console.log(`
          Amt due: ${addNumbers.totalDue}
          Amt paid: ${addNumbers.amtPaid}
          Remaining balance: ${changeDue}`);
          }
    }

displayReceicpt();

// function formatMailingLabel(name, address, city, state, zip) {
// 	return `
//           ${name}
//           ${address}
//           ${city}, ${state}, ${zip}
//      `;
// }

// let mailingLabel = formatMailingLabel("Emily Morgan", "1234 ABCD Street", "New York", "NY", "12345");
// console.log(mailingLabel);
