function highestScore (students) {
  if(students.length===0){
    return {};
  } else{
    let namaKelas = [];
    let namaKelas1 = [];
    for(let i = 0;i<students.length;i++){
        namaKelas.push(students[i].class);
    }

    console.log(namaKelas);
    namaKelas1 = namaKelas.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
    console.log(namaKelas1);

    let foxes = [];
    let wolves = [];
    let result = {};
    let resultSimpan = {};

    for(let i =0;i<students.length;i++){
      if(students[i].class==='foxes'){
        foxes.push(students[i]);
      } else{
        wolves.push(students[i]);
      }
    }

    console.log(foxes);
    console.log(wolves);
    let maxF = 0;
    for(let i = 0;i<foxes.length;i++){
      if(foxes[i].score>maxF){
        maxF = foxes[i].score;
        resultSimpan.name = foxes[i].name;
        resultSimpan.score = maxF;
      }
    }
    result.foxes = resultSimpan;
    resultSimpan = {};
    let maxW = 0;
    for(let i = 0;i<wolves.length;i++){
      if(wolves[i].score>maxW){
        maxW = wolves[i].score;
        resultSimpan.name = wolves[i].name;
        resultSimpan.score = maxW;
      }
    }
    result.wolves = resultSimpan;

    return result;
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