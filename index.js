// Creating a scooter object constructor
function Scooter(year, color, model) {
  this.year = year;
  this.color = color;
  this.model = model;
}



// Creating a Driver object constructor
function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}


// Creating PickupLocation object constructor
function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}

// Creating a new instance of Scooter
const scooter = new Scooter(2015, 'red', 'swoosh');

// Creating a new instance of Driver
const driver = new Driver('Allison', 16, '2 years');

// Creating a new instance of PickupLocation
const pickupLocation = new PickupLocation('123 Broadway', 'New York City');


// Logging objects on console
// console.log(scooter);
// console.log(driver);
// console.log(pickupLocation);

