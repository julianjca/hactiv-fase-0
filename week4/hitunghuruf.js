function hitungHuruf(kata) {
  let word = kata.split(" ");
  const resultWord = [];
  let result = '';
  let max = 0;

  for(let i = 0; i<word.length;i++){
    let charMap = [];
    for(let j of word[i]){
      charMap[j] = charMap[j]+1 || 1;
    }
    resultWord.push(charMap);
  }

  console.log(resultWord);

  for(let i = 0 ; i<resultWord.length;i++){
    let counter = 0;
    for(let j in resultWord[i]){
      if(resultWord[i][j]>1){
        counter+=resultWord[i][j];
      }
    }
    if(counter>max){
      max = counter;
      result = word[i];
    }
  }
  return result;
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau