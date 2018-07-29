/**
Reverse Odd
Implementasikan function reverseOdd untuk membalikkan setiap elemen string dengan urutan genap
yang ada di dalamnya.
Contoh:
- input: ['awtian', 'raijin', 'thunderkeg']
  output: ['awtian', 'nijiar', 'thunderkeg']
- input: ['alisa', 'xiaoyu', 'nina', 'lili']
  output: ['alisa', 'uyoaix', 'nina', 'ilil']
- input: []
  output: []
Aturan coding:
WAJIB MENYERTAKAN ALGORITHMA ATAU PSEUDOCODE
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
- .reverse()
- .split()
- .join()
*/


//Pseudocode
/*
set arr
set counter equal to 0
set result equal to empty array

while counter is smaller than the length of arr
  if counter equals to 0 or counter mod 2 equals to zero
    insert arr[counter] to result
  else
    set reversed equals to empty string
    for i = 0 to the length of arr[counter]
      reversed = arr[counter][i]+ reversed
    insert reversed to result

  counter = counter + 1

print result array

*/
function reverseOdd (arr) {
  let counter = 0;
  let result = [];

  while(counter<arr.length){
    if(counter===0||counter%2===0){
      result.push(arr[counter]);

    } else{
      let reversed ="";
      for(let i = 0;i<arr[counter].length;i++){
        reversed = arr[counter][i]+reversed;
      }
      result.push(reversed);    }
    counter++;

  }
  return result;
}

console.log(reverseOdd(['clinkz', 'jahrakal', 'kael']));
// [ 'clinkz', 'lakarhaj', 'kael' ]

console.log(reverseOdd(['moonfang', 'nightshade', 'lightbringer', 'strygwyr']));
// [ 'moonfang', 'edahsthgin', 'lightbringer', 'rywgyrts' ]

console.log(reverseOdd([]));
// []
