function totalDigitRekursif(angka) {
  let firstDigit = angka.toString()[0];
  let lastDigit = angka.toString().slice(1);

  if(lastDigit.length===0){
    return parseInt(firstDigit);
  } else{
    return parseInt(firstDigit) + totalDigitRekursif(parseInt(lastDigit));
  }

}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5