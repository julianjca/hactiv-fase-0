/*
================
MISSING NUMBER
================

description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT =
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' ']
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/

function missingNum ( arr ) {
  if(arr.length === 0){
    return [];
  } else{
    let newArr = [];
  for(let i = 0 ;i<arr.length;i++){
    for(let j = 0 ;j<arr[i].length;j++){
      if(arr[i][j]!==' '){
        newArr.push(arr[i][j]);
      }
    }
  }

  for(let i = 0;i<newArr.length;i++){
    let temp = 0;
    for(let j = i+1;j<newArr.length;j++){
      if(newArr[i]>newArr[j]){
        temp = newArr[i];
        newArr[i]=newArr[j];
        newArr[j]=temp;
      }
    }
  }

  let newArr1 = [];
  let max = newArr[newArr.length-1];
  let min = newArr[0];

  if(newArr[1]-newArr[0]!==1){
    for(let i = min;i<=max;i++){
      newArr1.push(i);
    }
  }

  let result = [];
  for(let i of newArr1){
    let counter = 0;
    for(let j of newArr){
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
}


console.log(missingNum([[3,' ', 5], [1,' ', 7], [9,' ',' ']])) // [ 2, 4, 6, 8 ]
console.log(missingNum([[ 2,' '], [' ',5]])) // [ 3, 4 ]
console.log(missingNum([[11,' ', 13], [17,' ', 19], [' ',16,' ']])) // [ 12, 14, 15, 18 ]
console.log(missingNum([[3,' ', 5, 15], [1,' ', 7, 13], [9,' ',' ', 12], [' ', 16,' ',' ']])) // [ 2, 4, 6, 8, 10, 11, 14 ]
console.log(missingNum([])); //[]