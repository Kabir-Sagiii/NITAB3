//Store the Information about Iphone 13

var appleBrand = {
  name: "Iphone 13",
  price: 120000,
  rating: 4.5, //5
  ram: "6gb",
};

console.log(appleBrand);

//Inserting new Property
appleBrand.brandName = "Apple"; // Registration Page
appleBrand.storage = "128gb";
console.log(appleBrand);

//Accessing Property from Object
console.log(appleBrand.price, appleBrand.name);

//updating the Property
appleBrand.rating = 5;
console.log(appleBrand);

// How to delete property from Object
