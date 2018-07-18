function changeVocals (str) {
  const alphabet = 'bjvfpBJVFP';
  const vocal = 'aiueoAIUEO';
  let result = '';

  for(let i of str){
    let counter = 0;

    for(let j = 0;j<vocal.length;j++){
      if(i===vocal[j]){
        result += alphabet[j];
        counter=1;
      }
    }
    if(counter===0){
      result+=i;

    }
  }

  return result;
}


function reverseWord (str) {
  return str.split('').reverse().join('');
}

function setLowerUpperCase (str) {
  let result = '';

  for(let i = 0; i<str.length;i++){
    if (str[i] === str[i].toLowerCase()){
      result+= str[i].toUpperCase();

    }else{
      result+= str[i].toLowerCase();

    }
  }
  return result;
}

function removeSpaces (str) {
  return str.replace(/\s/g, '');

}

function passwordGenerator (name) {
  let change = changeVocals(name);
  let reverse = reverseWord(change);
  let lower = setLowerUpperCase(reverse);


  if(name.length<5){
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  } else{
    return removeSpaces(lower);

  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'