
/*
===========================
Initial Grouping Descending
==========================

[INSTRUCTION]
Disediakan sebuah function initialGroupingDescending yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialGroupingDescending akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan huruf depan harus terurut dari paling besar/descending dan dipisahkan ke dalam
array dua dimensi.

[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Output:
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]

Kamu tidak perlu peduli dengan urutan alphabet nama siapa yang keluar terlebih dahulu!

RULES:
- Dilarang menggunakan sintaks Set atau Regex
- Dilarang menggunakan built in function sort

*/

function initialGroupingDescending(studentsArr) {
  for(let i = 0;i<studentsArr.length;i++){
    let simpan = '';
    for(let j = i;j<studentsArr.length;j++){
      if(studentsArr[i][0]<studentsArr[j][0]){
        simpan = studentsArr[i];
        studentsArr[i] = studentsArr[j];
        studentsArr[j] = simpan;
      }
    }
  }

  let result = [];
  for(let i = 0;i<studentsArr.length;i++){
    let hurufDepan = studentsArr[i][0];
    result.push(hurufDepan);
  }

  let result1 =  result.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]); //https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array

  let finalResult = [];
  for(let i of result1){
    let simpan = [];
    simpan.push(i);
    for(let j of studentsArr){
      if(i===j[0]){
        simpan.push(j);
      }
    }
    finalResult.push(simpan);

  }
  return finalResult;
}

console.log(initialGroupingDescending(['Budi', 'Badu', 'Joni', 'Jono']));
/*
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]
*/

console.log(initialGroupingDescending(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
[
  [ 'Y', 'Yusuf' ],
  [ 'M', 'Mickey' ],
  [ 'G', 'Gong' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ]
]
*/

console.log(initialGroupingDescending(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
[
  [ 'S', 'Stone', 'Sticker' ],
  [ 'R', 'Rock', 'Rocker' ],
  [ 'B', 'Brick' ]
]
*/
