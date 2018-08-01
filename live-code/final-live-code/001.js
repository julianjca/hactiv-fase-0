/*
================
Format Uang (KBBI)
================

[INSTRUCTIONS]

formatUang adalah sebuah function yang menerima satu parameter berupa number.
function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
Rp1.500,00

[RULE]
- Wajib menggunakan Pseudocode/Algoritma
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
formatUang(2000)

output: Rp2.000,00
*/


//Pseudocode
/*
SET input as number
SET result equals to 'Rp'
SET str equals to number as a String
IF number less than 1000
  result = result + number + ',00'
IF number more than or equal to 1000 and less than 10000
  FOR i = 0 to i < the length of str
    IF i equals to 0
      result = result + str[i] + '.'
    ELSE
      result = result + str[i]
  result = result + ",00"
IF number more than or equal to 10000 and less than 100000
  FOR i = 0 to i < the length of str
    IF i equals to 1
      result = result + str[i] + '.'
    ELSE
      result = result + str[i]
  result = result + ",00"
IF number more than or equal to 100000 and less than 1000000
  FOR i = 0 to i < the length of str
    IF i equals to 2
      result = result + str[i] + '.'
    ELSE
      result = result + str[i]
  result = result + ",00"
IF number more than or equal to 1000000 and less than 10000000
  FOR i = 0 to i < the length of str
    IF i equals to 0 or 3
      result = result + str[i] + '.'
    ELSE
      result = result + str[i]
  result = result + ",00"
PRINT result

*/
function formatUang(number) {
  let result = 'Rp';
  let str = number.toString();
  if(number<1000){
    result+= number+',00';
  } if(number>=1000&&number<10000){
    for(let i =0;i<str.length;i++){
      if(i===0){
        result+= str[i]+".";
      } else{
        result+= str[i];
      }
    }
    result+=',00';
  } if(number>=10000&&number<100000){
    for(let i =0;i<str.length;i++){
      if(i===1){
        result+= `${str[i]}.`;
      } else{
        result+= str[i];
      }
    }
    result+=',00';
  } if(number>=100000&&number<1000000){
    for(let i =0;i<str.length;i++){
      if(i===2){
        result+= `${str[i]}.`;
      } else{
        result+= str[i];
      }
    }
    result+=',00';
  }

  if(number>=1000000&&number<10000000){
    for(let i =0;i<str.length;i++){
      if(i===0||i===3){
        result+= `${str[i]}.`;
      } else{
        result+= str[i];
      }
    }
    result+=',00';
  }

  return result;

}

console.log(formatUang(7500)); // Rp7.500,00
console.log(formatUang(250)); // Rp250,00
console.log(formatUang(100000)); // Rp100.000,00
console.log(formatUang(1000000)); // Rp1.000.000,00
console.log(formatUang(4999999)); // Rp4.999.999,00
console.log(formatUang(10000)); // Rp4.999.999,00
