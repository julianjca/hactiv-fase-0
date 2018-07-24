function highestScore (students) {
  if(students.length===0){
    return {};
  } else{
    let namaKelas = [];
    let namaKelas1 = [];
    for(let i = 0;i<students.length;i++){
        namaKelas.push(students[i].class);
    }
    namaKelas1 = namaKelas.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);

    let result = {};
    let resultSimpan = {};
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
      let resultSimpan = {};
      let max = 0;
      for(let j = 0;j<finalMatrix[i].length;j++){
        if(finalMatrix[i][j].score>max){
          max = finalMatrix[i][j].score;
          resultSimpan.name = finalMatrix[i][j].name;
          resultSimpan.score = max;
        }
      }
      resultFinal[finalMatrix[i][0].class] = resultSimpan;
    }

    return resultFinal;
    }
  }



// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}