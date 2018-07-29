/*
di data structure, yang harus student achieve:
- forming sebuah array berisikan object
- bisa mengakses isi terdalam dari array berisikan object
- bisa melakukan operasi filtering / grouping data
*/

/*
---------------
Students Report
---------------
PROBLEM
=======
Diberikan sebuah function bernama getReport.
Function akan menerima sebuah parameter array of object dengan format:
[
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  ...
]
Data di atas merupakan campuran seluruh nilai student dari kelas manapun.
Function akan memproses array of object tersebut untuk membuat sebuah report dalam bentuk array of object dengan format:
[
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  ...
]
Data yang diharapkan merupakan akumulasi student yang lulus dan tidak dari setiap kelas.
Standard kelulusan adalah minimum 70.
*/

function getReport(studentGrades) {
  let result = [];
  let simpanA = [];
  let simpanB = [];
  let simpanC = [];


  for(let i = 0;i<studentGrades.length;i++){
    let simpan = {};
    if(studentGrades[i].classCode==="A"){
      simpan.name = studentGrades[i].name;
      simpan.score = studentGrades[i].score;
      simpan.classCode = studentGrades[i].classCode;
      simpanA.push(simpan);
    }
    if(studentGrades[i].classCode==="B"){
      simpan.name = studentGrades[i].name;
      simpan.score = studentGrades[i].score;
      simpan.classCode = studentGrades[i].classCode;
      simpanB.push(simpan);
    }
    if(studentGrades[i].classCode==="C"){
      simpan.name = studentGrades[i].name;
      simpan.score = studentGrades[i].score;
      simpan.classCode = studentGrades[i].classCode;
      simpanC.push(simpan);
    }
  }
  let newArr = [];
  newArr.push(simpanA,simpanB,simpanC);
  console.log(newArr);

  let simpanRes;
  for(let i = 0;i<newArr.length;i++){
    let simpanPassed = [];
    let simpanFailed = [];
    simpanRes = {classCode: '', passed: [], failed: []};
    simpanRes.classCode = newArr[i][0].classCode;
    for(let j = 0;j<newArr[i].length;j++){
      console.log(newArr[i][j].score);
      if(newArr[i][j].score>=70){
        simpanPassed.push(newArr[i][j].name);
        simpanRes.passed = simpanPassed;
      } if(newArr[i][j].score<70){
        simpanFailed.push(newArr[i][j].name);
        simpanRes.failed = simpanFailed;
      }
    }
    result.push(simpanRes);
  }

  return result;
}

var grades1 = [
  { name: 'John', score: 80, classCode: 'A' },
  { name: 'Mike', score: 60, classCode: 'B' },
  { name: 'Budi', score: 70, classCode: 'C' },
  { name: 'Siti', score: 50, classCode: 'A' },
  { name: 'Aaron', score: 10, classCode: 'A' },
  { name: 'Arthur', score: 10, classCode: 'C' },
  { name: 'Osass', score: 10, classCode: 'B' },
  { name: 'Yolo', score: 90, classCode: 'C' },
];

console.log(getReport(grades1));

/*
[
  { classCode: 'A', passed: [ 'John' ], failed: [ 'Siti', 'Aaron' ] },
  { classCode: 'B', passed: [], failed: [ 'Mike', 'Osass' ] },
  { classCode: 'C', passed: [ 'Budi', 'Yolo' ], failed: [ 'Arthur' ] },
]
*/