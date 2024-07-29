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
		console.log(`Change due: ${changeDue}`);
	} else console.log(`Remaining balance: ${changeDue}`);
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
