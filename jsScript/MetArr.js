 //Array Methods
 //Unshift 
// Adding element at the beginning of an array 
// Declaring and initializing arrays 
var number_arr = [ 20, 30, 40 ]; 
var string_arr = [ "amit", "sumit" ]; 
  
// unshift() 
// number_arr contains 
// [10, 20, 20, 30, 40] 
number_arr.unshift(10, 20); 
  
// string_arr contains 
// ["sunil", "anil", "amit", "sumit"] 
string_arr.unshift("sunil", "anil"); 
  
// Printing both the array after performing unshift operation 
console.log("After unshift op " + number_arr); 
console.log("After unshift op " + string_arr); 


//shift()


// Removing element from the beginning of an array 
// Declaring and initializing arrays 
var number_arr = [ 20, 30, 40, 50, 60 ]; 
var string_arr = [ "amit", "sumit", "anil", "prateek" ]; 
  
// shift() 
// number_arr contains 
//  [30, 40, 50, 60]; 
number_arr.shift(); 
  
// string_arr contains 
// ["sumit", "anil", "prateek"] 
string_arr.shift(); 
  
// Printing both the array after performing shifts operation 
console.log("After shift op " + number_arr); 
console.log("After shift op " + string_arr); 


//splice()


// Removing an adding element at a particular location 
// in an array 
// Declaring and initializing arrays 
var number_arr = [ 20, 30, 40, 50, 60 ]; 
var string_arr = [ "amit", "sumit", "anil", "prateek" ]; 
  
// splice() 
// deletes 3 elements starting from 1 
// number array contains [20, 60] 
number_arr.splice(1, 3); 
  
// doesn't delete but inserts 3, 4, 5 
// at starting location 1 
number_arr.splice(1, 0, 3, 4, 5); 
  
// deletes two elements starting from index 1 
// and add three elements. 
// It contains  ["amit", "xyz", "geek 1", "geek 2", "prateek"]; 
string_arr.splice(1, 2, "xyz", "geek 1", "geek 2"); 
  
// Printing both the array after performing splice operation 
console.log("After splice op " + number_arr); 
console.log("After splice op " + string_arr); 
