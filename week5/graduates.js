function graduates (students) {
  if(students.length===0){
    return {};
  } else{
    let namaKelas = [];
    let namaKelas1 = [];
    for(let i = 0;i<students.length;i++){
        namaKelas.push(students[i].class);
    }
    namaKelas1 = namaKelas.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);

    let finalMatrix = [];

    for(let i=0;i<namaKelas1.length;i++){
      let simpanKelas = [];
      for(let j =0;j<students.length;j++){
        if(students[j].class===namaKelas1[i]){
          simpanKelas.push(students[j]);
        }
      }
      finalMatrix.push(simpanKelas);
    }

    let resultFinal = {};

    for(let i = 0; i<finalMatrix.length;i++){
      let resultSimpan = [];
      for(let j = 0;j<finalMatrix[i].length;j++){
        let resultSimpan2 = {};
        if(finalMatrix[i][j].score > 75){
          resultSimpan2.name = finalMatrix[i][j].name;
          resultSimpan2.score = finalMatrix[i][j].score;
          resultSimpan.push(resultSimpan2);
        }
      }
      resultFinal[finalMatrix[i][0].class] = resultSimpan;
    }

    return resultFinal;
    }
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}