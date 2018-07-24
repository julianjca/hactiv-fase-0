/* 1. Write a JavaScript program to calculate the factorial of a number. Go to the editor
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120  */
function factorial(num){
  if(num===0){
    return 1;
  } else{
    return num*factorial(num-1);
  }
}
console.log(factorial(5));

/* 2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers. Go to the editor
Click me to see the solution. */

function GCD(a, b){
  console.log(b);
  console.log(!b);
  if (!b) {
    return a;
}

  return GCD(b, a % b);
}

console.log(GCD(40,44));

/* 3. Write a JavaScript program to get the integers in range (x, y). Go to the editor
Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8] */

var range = function(start_num, end_num)
{
  if (end_num - start_num === 2)
  {
    return [start_num + 1];
  }
  else
  {
    var list = range(start_num, end_num - 1);
    list.push(end_num - 1);
    return list;
  }
};

console.log(range(2,9));

/* 4. Write a JavaScript program to compute the sum of an array of integers. Go to the editor
Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21
Click me to see the solution. */
var array_sum = function(my_array) {
  if (my_array.length === 1) {
    return my_array[0];
  }
  else {
    return my_array.pop() + array_sum(my_array);
  }
};

console.log(array_sum([1,2,3,4,5,6]));

/* Write a JavaScript program to compute the exponent of a number. Go to the editor
Note : The exponent of a number says how many times the base number is used as a factor.
82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent. */

function exponent(a,n){
  if(n===0){
    return 1;
  } else{
    return a*exponent(a,n-1);
  }
}

console.log(exponent(9,3));

// 9 * exponent(9, 2)
// 9 * 9 * exponent(9, 1)
// 9 * 9 * 9 * exponent(9,0)
// 9 * 9 * 9 * exponent(9,0)