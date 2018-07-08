function pasanganTerbesar(num) {
  var newNum = num.toString();
  let besar = 0;
  for(let i = 0 ; i < newNum.length-1;i++){
    if(parseInt(newNum[i]+newNum[i+1])>besar){
      besar = parseInt(newNum[i]+newNum[i+1]);
    }
  }
  return besar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99