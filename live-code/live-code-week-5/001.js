/*
Title Givers
==============
Name :_____________

[INSTRUCTIONS]
Title givers akan menerima dua parameter dimana parameter pertama merupakan array yang berisi nama.
Dan pada bagian kedua, adalah title yang akan di berikan kepada pemilik nama di array yang di berikan.
Jika title yang di berikan di mulai dengan koma `,` maka title akan di tuliskan.
Jika tidak, maka title akan di tuliskan di depan dan dipisahkan dengan spasi ` `.
Contoh ada pada test case.

[RULE]
- Wajib menyertakan pseudocode atau algorithma!
- Dilarang menggunakan sintaks .map()!
*/

//Pseudocode
/*
set newArr as an empty array
if title on index 0 equals to ','(comma)
  for i to the length of target array
  add targetArray[i]+title to newArr
else
  for i to the length of target array
  add title+ targetArray[i] to newArr
print newArray as a result
*/

function titleGivers (targetArr, title) {
  let newArr = [];
  if(title[0]===','){
    for(let i = 0;i<targetArr.length;i++){
      newArr.push(`${targetArr[i]}${title}`)
    }
  } else{
    for(let i = 0;i<targetArr.length;i++){
      newArr.push(`${title} ${targetArr[i]}`)
    }
  }

  return newArr;
}

console.log(titleGivers (['Awtian Akbar', 'Kobayakawa Sena', 'Yoichi Hiruma'], 'Mr.'));
// Output
// [ 'Mr. Awtian Akbar',
//   'Mr. Kobayakawa Sena',
//   'Mr. Yoichi Hiruma' ]
console.log(titleGivers (['Dre', 'Brock', 'Leorio'], 'Dr.'));
// Output
// [ 'Dr. Dre', 'Dr. Brock', 'Dr. Leorio' ]
console.log(titleGivers (['Boush', 'Squee', 'Spleen' , 'Spoon'], ', ST'));
// Output
// [ 'Boush, ST', 'Squee, ST', 'Spleen, ST', 'Spoon, ST' ]