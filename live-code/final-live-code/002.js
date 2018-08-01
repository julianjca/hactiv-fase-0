/*
================
SENSOR SENTENCE
================
description: Sebuah fungsi yang akan mendeteksi apakah kalimat tersebut merupakan kalimat yang
tidak baik dan akan mengembalikan nilai kalimat yang telah di sensor

rules:
1. Wajib menggunakan Pseudocode/ Algoritma
2. tidak boleh menggunakan built in function .filter(), .map(), .split(), .findIndex(), indexOf(), .join()
3. tidak boleh menggunakan REGEX, seperti .match, .replace


examples:
JIKA INPUT KALIMAT = 'HAHAHA PAYAH LOOO' dan INPUT SENSOR = 'PAYAH'
MAKA OUTPUT = 'HAHAHA ***** LOOO'

*/


//Pseudocode
/*
SET new function stringDelimiter with input (input, delimiter)
  SET stringArray equals to [''];
  SET j equals to 0;
  FOR i = 0 to the length of input
      IF input[i] equals to delimiter
          j = j+1;
          add empty string to stringArray
       else
          stringArray[j] = stringArray[j]+input[i]
  PRINT stringArray

IF length of sentence equals to 0 or length of words equals to 0
  PRINT ''(empty string)
ELSE
  SET newArr equals to stringDelimiter with input sentence and " "(space)
  SET result equals to empty string
  FOR i as item in array newArr
    IF i equals to words
      FOR j equals to 0 to the length of i
        result = result + "*"
      result = result+ " "
    ELSE
      result = result+ i + " "
  PRINT result

*/
function stringDelimiter(input, delimiter) {
  var stringArray = [''];
  var j = 0;

  for (var i = 0; i < input.length; i++) {
      if (input.charAt(i) == delimiter) {
          j++;
          stringArray.push('');
      } else {
          stringArray[j] += input.charAt(i);
      }
  }
  return stringArray;
}

function sensorSentence ( sentence, words ) {
  if(sentence.length===0||words.length===0){
    return `''`;
  } else{
    let newArr = stringDelimiter(sentence," ");
    let result = "";
    for(let i of newArr){
      if(i===words){
        for(let j = 0;j<i.length;j++){
          result+= '*';
        }
        result+=" ";
      } else{
        result+=i+ " " ;
      }
    }
    return result;
  }
}




console.log(sensorSentence('Hey you are a murderer', 'murderer')) // Hey you are a ********

console.log(sensorSentence('I will kill you later, i swear', 'kill')) // I will **** you later, i swear

console.log(sensorSentence("Oh my god, holy cow! i can't believe it", "cow!")) // Oh my god, holy **** i can't believe it

console.log(sensorSentence("Aku ingin pindah ke meikartu", "meikartu")) // Aku ingin pindah ke ********

console.log(sensorSentence('HAHA HEHE HIHI HUHU HOHO', 'WEY')) // 'HAHA HEHE HIHI HUHU HOHO'

console.log(sensorSentence('', '')) // ''
