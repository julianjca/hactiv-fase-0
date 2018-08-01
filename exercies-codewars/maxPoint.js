/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. */


function high(x){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let newArr = x.split(' ');
  let resultArr = [];


  for(let i in newArr){
    let point = 0;
    for(let k = 0;k<newArr[i].length;k++){
    for(let j = 0;j<alphabet.length;j++){
      if(newArr[i][k]==alphabet[j]){
        point+= j+1;
      }
    }
    }
    resultArr.push(point);
  }

  let max = 0;
  let kata = '';
  console.log(resultArr);

  for(let i in resultArr){
  console.log(i);
    if(resultArr[i]>max){
      max = resultArr[i];
      kata = newArr[i];
    }
  }

  return kata;
}