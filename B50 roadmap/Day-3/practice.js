
// 3.Sum of all numbers in an array   
// 4.Return all the palindromes in an array 
// let strarray = ["convert", "all", "strings", "title"];

//     let Array = strarray.map(function(str) {
//       return str.charAt(0).toUpperCase() + str.slice(1);
//       });

//     console.log(Array);

    
    
// var arr = [12, 13, 14, 15, 16];
// var result = [];
// function odd(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(odd(arr));



function toTitleCase(strArray) {
    // Create an empty array to store the title-cased strings
    let Array = [];
  
    // Iterate through each string in the input array
    for (let i = 0; i < strArray.length; i++) {
      let currentStr = strArray[i];
      let titleCasedStr = "";
  
      // Convert the first character to uppercase
      titleCasedStr += currentStr.charAt(0).toUpperCase();
  
      // Convert the rest of the characters to lowercase
      titleCasedStr += currentStr.slice(1).toLowerCase();
  
      // Add the title-cased string to the new array
      Array.push(titleCasedStr);
    }
  
    // Return the array with title-cased strings
    return Array;
  }
  
  // Test the function with an example array
  const inputArray = ["hello", "WORLD", "JavaScript"];
  const Array = toTitleCase(inputArray);
  console.log(Array); // Output: ["Hello", "World", "Javascript"]
  