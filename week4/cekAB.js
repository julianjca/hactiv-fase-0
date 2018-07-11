function checkAB(num) {
  let cekA = 0;
  let cekB = 0;
  let hitung = 0;

  for(let i=0;i<num.length;i++){
    if(num[i]==='a'){
      cekA = i;
    }
    if(num[i]==='b'){
      cekB = i;
    }
  }
  hitung = cekB-cekA;

  return hitung===4||hitung===-4;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false