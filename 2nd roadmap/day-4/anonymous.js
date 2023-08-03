//Do the below programs in anonymous function & IIFE

//1.print odd numbers in an array:
    let oddarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    oddarray.forEach(function(num) {
    if (num % 2 !== 0) {
    console.log(num);
    }
    });

//2. convert all the strings to title caps in a string array:
    let strarray = ["convert", "all", "strings", "title"];

    let Array = strarray.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
      });

    console.log(Array);

//3. Sum of all numbers in an array:
    let array = [4, 6, 8, 10, 12];
    let sum =0;
    for (let i=0; i<array.length; i++) {
      sum += array[i];
    }
    console.log(sum);

//4. Return all the prime numbers in an array:
    let primearray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    

