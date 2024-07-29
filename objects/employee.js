let employee = {
	//this indicates an object, these are like boxes with items in there.
	firstName: "Emily",
	lastName: "Morgan",
	printName: function (firstName, lastName) {
		//you can have a function within objects.
		return `${lastName}, ${firstName}`;
	},
};

console.log(employee.printName(employee.firstName, employee.lastName));

//will continue this with loops, looping through object properties.

let truck = {
	type: "Flatbed",
	size: "40x34ft",
	Id: "fsk",
	color: "black",
	wheelSize: "45in",
	displayTruck: function () {
		return console.log(`
               Truck Size: ${truck.size}
               Truck ID: ${truck.Id}
               Truck Type: ${truck.type}`);
	},
};

truck.displayTruck();
