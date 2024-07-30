class Cookie {
	hasSprinkles;
	cookieFlavor;
	icingFlavor;
	size;

	constructor(hasSprinkles, cookieFlavor, icingFlavor, size) {
		this.hasSprinkles = hasSprinkles;
		this.cookieFlavor = cookieFlavor;
		this.icingFlavor = icingFlavor;
		this.size = size;
	}
}

let cookie = new Cookie(true, "sugar", "chocolate", "small");

if (cookie.hasSprinkles === true) {
	cookie.hasSprinkles = "has sprinkles";
	console.log(
		`This ${cookie.size} cookie ${cookie.hasSprinkles}, is a ${cookie.cookieFlavor} cookie and has ${cookie.icingFlavor} icing.`
	);
}
