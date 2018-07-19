// Perpangkatan
function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}
console.log(power(3, 3)); // 3 ** 3 = 27

// Number Sum
function numberSum(num) {
  if(num == 1) {
    return 1;
  }
  else {
    return num + numberSum(num - 1);
  }
}

console.log(numberSum(5)); // 5 + 4 + 3 + 2 + 1 = 15

function faktorial(num){
  if(num===1){
    return 1;
  } else{
    return num*faktorial(num-1);
  }
}

console.log(faktorial(5));

function hitungVokal(str){
  let vocal = 'AIUEO';
  let hurufDepan = str[0];
  let hurufSisa = str.slice(1);

  console.log(hurufDepan);
  console.log(hurufSisa);

  if(hurufSisa.length===0){
    return 0;
  }

  for(let i = 0;i<vocal.length;i++){
    if(vocal[i]===hurufDepan){
      return 1+ hitungVokal(hurufSisa);
    }
  }

  return 0+hitungVokal(hurufSisa);
}

console.log(hitungVokal("VICTO"));