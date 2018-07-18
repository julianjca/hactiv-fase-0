function kaliTerusRekursif(angka) {
  let newAngka = angka.toString();

  if(newAngka.length === 1){
    return parseInt(newAngka);
  } else{
    let angkaNum = 1;
    for(let i = 0;i<newAngka.length;i++){
      angkaNum *= parseInt(newAngka[i]);
    }
    return kaliTerusRekursif(angkaNum);
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6