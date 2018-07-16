function changeMe(arr) {
  let result = {};
  let a = arr[0];
  let b = arr[1];

  console.log(a);


  console.log(result);
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982],['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
//changeMe([]); // ""