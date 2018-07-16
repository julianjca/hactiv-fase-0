function groupAnimals(animals) {
  let result = [];
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let counter = 0;

  while(counter<alphabet.length){
    let sementara =[];
    let ada = 0;
    for(let i = 0; i< animals.length;i++){
      if(animals[i][0]===alphabet[counter]){
        sementara.push(animals[i]);
        ada = 1;
      }
    }
    if(ada===1){
      result.push(sementara);
    }
    counter++;
  }
  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]