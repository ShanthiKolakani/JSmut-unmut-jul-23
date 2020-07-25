

//MUTABLE
var car = {
    color: 'red',
    tyres: '4'
}

var anotherCar = car; //here we assign the value of car to anotherCar. 

car.color = 'blue'; //we alter a value in the original object

console.log(anotherCar.color); //this shows blue because it is referencing the memory location of the car object. 
console.log(car === anotherCar) //true (because comparison is by reference)


// example 2
let food = {
    apple: "fruit",
    banana: "fruit",
    tomato: "vegetable"
  };
  
  // Here we update tomato to be a "fruit" (which really is a fruit haha)
  food.tomato = 'fruit';
  
  // { apple: "fruit", banana: "fruit", tomato: "fruit" }



//UNMUTABLE


var aString = "This is a string";
var bString = aString;
//now we alter aString
aString = "The string has changed";

console.log(aString); //The string has changed
console.log(bString); //This is a string
console.log(aString === bString); //false


//example 2
let food = {
    apple: "fruit",
    banana: "fruit",
    tomato: "vegetable"
  };
  
  // Here we create a new object with the updated properties.
  const { tomato, ..rest } = food;
  const updatedFood = {
    tomato: 'fruit',
    ...rest
  };
  
  // { apple: "fruit", banana: "fruit", tomato: "fruit" }
  