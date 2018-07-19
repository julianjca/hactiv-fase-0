function changeMe(arr) {
  let result = {
  };

  for(let i = 0;i<arr.length;i++){
    console.log(`${i+1}. ${arr[i][0]} ${arr[i][1]}`);
    result.firstName = arr[i][0];
    result.lastName = arr[i][1];
    result.gender = arr[i][2];
    result.age = arr[i][3];
    if(result.age===undefined){
      result.age = 'invalid birth year';
    }
    console.log(result);

  }

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