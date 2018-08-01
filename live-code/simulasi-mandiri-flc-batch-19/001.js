/**
Missing Numbers
-------------------
Implementasikan function `missingNumbers` untuk mencari
angka yang hilang dari array `numbers`.
Contoh:
  - Input: [9, 4, 2, 8]
    Output: [1, 3, 5, 6, 7]
  - Input: [8, 3, 2, 1, 7, 5, 6]
    Output: [4]
  - Input: [4, 2, 3, 1]
    Output: []

RULES:
--------
- WAJIB MENGGUNAKAN ALGORITMA/PSEUDOCODE
- Dilarang menggunakan built-in function:
  - .max()
  - .min()
  - .sort()
- Dilarang menggunakan spread operator ( abaikan jika tidak tahu ini apa, belum penting untuk sekarang :) )

*/

function missingNumbers (numbers) {
  let newArr = [];
  for(let i = 0;i<numbers.length;i++){
    let simpan = 0;
    for(let j = i;j<numbers.length;j++){
      if(numbers[i]>numbers[j]){
        simpan = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = simpan;
      }
    }
  }

  let max = numbers[numbers.length-1];
  let min = numbers[0];
  if(numbers[1]-numbers[0]!==1){
    for(let i = min;i<=max;i++){
      newArr.push(i);
    }
  }

  let result = [];
  for(let i of newArr){
    let counter = 0;
    for(let j of numbers){
      if(i===j){
        counter++;
      }
    }
    if(counter===0){
      result.push(i);
    }
  }

  return result;
}

console.log(missingNumbers([1, 5, 10, 7, 6])); // [2, 3, 4, 8, 9]
console.log(missingNumbers([10, 1])); // [2, 3, 4, 5, 6, 7, 8, 9]
console.log(missingNumbers([90, 92, 91])); // []
console.log(missingNumbers([60, 54, 50])); // [51, 52, 53, 55, 56, 57, 58, 59]
console.log(missingNumbers([])); // []
