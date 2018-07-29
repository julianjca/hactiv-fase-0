/*

Diberikan sebuah function angka terbesar yang menerima satu parameter berupa array.
fungsi ini akan mengembalikan atau me return nilai berupa angka terbesar dari array.
Jika array kosong maka akan mengembalikan nilai -1

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter

*/

function angkaTerbesar(sentence) {
  let angka = sentence.sort().reverse();
  console.log(angka);
  let max = angka[0];
  if(angka.length===0){
    return -1;
  }
  if(angka.length===1){
    return max;
  } else{
    angka.length -= 1;
    return angkaTerbesar(angka);
  }
}

// TEST CASES
console.log(angkaTerbesar([2, 3, 7, 6, 5])) // 7
console.log(angkaTerbesar([9, 3, 7, 4, 1])) // 9
console.log(angkaTerbesar([2, 1, 7, 2, 8])) // 7
console.log(angkaTerbesar([])) // -1


//https://stackoverflow.com/questions/33534790/finding-maximum-value-in-array-recursively
function max(numArray){
  if(numArray.length===0){
    return -1;
  } else{
    // copy the given array
    nums = numArray.slice();

    // base case: if we're at the last number, return it
    if (nums.length == 1) { return nums[0]; }

    // check the first two numbers in the array and remove the lesser
    if (nums[0] < nums[1]) { nums.splice(0,1); }
    else { nums.splice(1,1); }

    // with one less number in the array, call the same function
    return max(nums);
  }

}

console.log(max([2, 3, 7, 6, 5])) // 7
console.log(max([9, 3, 7, 4, 1])) // 9
console.log(max([2, 1, 7, 2, 8])) // 7
console.log(max([])) // -1