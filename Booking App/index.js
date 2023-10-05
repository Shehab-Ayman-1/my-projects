class Vehicle {
	counter = 0;

	constructor(name, price, createdAt) {
		this.name = name;
		this.price = price;
		this.createdAt = createdAt;
		this.counter += 1;
	}
}

const vehicle1 = new Vehicle("car", 3000, 2020);
const vehicle2 = new Vehicle("car", 3000, 2020);
const vehicle3 = new Vehicle("car", 3000, 2020);
const vehicle4 = new Vehicle("car", 3000, 2020);
const vehicle5 = new Vehicle("car", 3000, 2020);
console.log(vehicle5);
