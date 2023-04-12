// Define the function raisedToTheThird and take an array as input
const raisedToTheThird = (arr) => {

  // Create an empty array to hold the cubed numbers
  const numPowThird = [];

  // Iterate through each number in the input array
  arr.forEach((number) => {

    // Calculate the cube of the current number using Math.pow(), and push it to the new array
    numPowThird.push(Math.pow(number, 3));
  });

  // Return the new array with the cubed numbers
  return numPowThird;
}




// Define the function addOne and take an array as input
const addOne = (arr) => {

  // Use the map() method to create a new array based on the input array
  const newArr = arr.map((number) => {

    // For each number in the input array, add 1 and return the new value
    return number + 1;
  });

  // Return the new array with all values incremented by 1
  return newArr;
};



// Define the function addQuestion and take an array of strings as input
const addQuestion = (arr) => {

  // Use the map() method to create a new array based on the input array
  const newArr = arr.map((string) => {

    // For each string in the input array, add a question mark to the end and return the new value
    return string + '?';
  });

  // Return the new array with all strings having a question mark added to the end
  return newArr;
};




// Define the function forLoopTwoToThe and take an array as input
const forLoopTwoToThe = (arr) => {

  // Create an empty array to hold the results
  const numPowTwo = [];

  // Iterate through each number in the input array
  for (const number of arr) {

    // Calculate the result of 2 raised to the power of the current number using Math.pow(), and push it to the new array
    numPowTwo.push(Math.pow(2, number));
  }

  // Return the new array with the results of 2 raised to each number in the input array
  return numPowTwo;
};




// Define the function forEachTwoToThe and take an array as input
const forEachTwoToThe = (arr) => {

  // Create an empty array to hold the results
  const numPowTwo = [];

  // Use the forEach() method to iterate through each number in the input array
  arr.forEach((number) => {

    // Calculate the result of 2 raised to the power of the current number using Math.pow(), and push it to the new array
    numPowTwo.push(Math.pow(2, number));
  });

  // Return the new array with the results of 2 raised to each number in the input array
  return numPowTwo;
};


// This is a function called mapTwoToThe that takes an array as an argument
const mapTwoToThe = (arr) => {
  // The function returns a new array created by calling the map method on the input array
  return arr.map((number) => Math.pow(2, number));
  // For each number in the input array, the map method applies the function Math.pow(2, number)
  // This function raises 2 to the power of the input number, effectively calculating 2^number
  // The resulting array contains the values 2^number for each number in the input array
};


const mapTwoToThe = (arr) => {
  const mapArr = arr.map((number) => Math.pow(2, number));
  return mapArr;
};
