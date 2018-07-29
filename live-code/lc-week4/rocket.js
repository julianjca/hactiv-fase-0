/*
==================================
Array Mastery: Fish Filter
==================================
[INSTRUKSI]
Fish Filter merupakan fungsi untuk menyaring data kumpulan spesies laut dan akan mengembalikan spesies
yang berisi kumpulan ikan dalam bentuk string
[CONTOH]
input: ['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng']
output: ikan indosiar, dan ikan bandeng
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .splice, .slice, .filter, dan .reduce!
*/

function fishFilter(students) {
  let result = [];
  let counter = 0;
  let print = '';
  let counterPrint = 0;

  for(let i = 0; i<students.length;i++){
    if(students[i][0]+students[i][1]+students[i][2]+students[i][3]==='ikan'){
      result.push(students[i]);
      counter++;
    }
  }

  while(counterPrint<result.length){
    if(counterPrint!==result.length-1){
      print+= `${result[counterPrint]},`;
    } if(counterPrint===result.length-1){
      print+= `dan ${result[counterPrint]}`;
    }
    counterPrint++;
  }

  if(counter===0){
    return "tidak ada data";
  } if(counter>0){
    return print;
  }
}

// TEST CASES
console.log(fishFilter(['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng'])); // ikan indosiar, dan ikan bandeng
console.log(fishFilter(['gurita', 'ikan kerapu', 'ikan hiu'])); // ikan kerapu, dan Ikan hiu
console.log(fishFilter(['bintang laut', 'spongebob', 'patrick', 'ikan paus', 'ikan hiu', 'ikan tongkol'])); // ikan paus, ikan hiu, dan ikan tongkol
console.log(fishFilter(['gurita', 'udang'])); // tidak ada data

console.log(fishFilter(['bintang laut', 'spongebob', 'patrick', 'ikan paus', 'ikan hiu', 'ikan tongkol', 'ikan ayam', 'ikan salmon', 'ikan tuna'])); // ikan paus, ikan hiu, dan ikan tongkol