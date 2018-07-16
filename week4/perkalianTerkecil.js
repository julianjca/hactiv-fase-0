function digitPerkalianMinimum(angka) {
  let result = [];
  let min = 99999;

  for(let i = 1;i<angka;i++){
    let pasangan = [];
    let ada =0;
    if(angka%i===0){
      pasangan.push(i,(angka/i));
      ada = 1;
    }

    if(ada===1){
      result.push(pasangan);
    }
  }

  for(let i =0;i<result.length;i++){
    let hasilKali = '';
    hasilKali = result[i][0].toString()+result[i][1].toString();
    if(hasilKali.length<min){
      min = hasilKali.length;
    }
  }
    //console.log(result);
    if(angka===1){
      return 2;
    }else{
      return min;

    }

}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2