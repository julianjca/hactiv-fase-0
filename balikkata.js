function balikKata(kata) {
  /* var panjang = kata.length;
  let balik='';

  for(let i = panjang-1;i>=0;i--){
    balik+=kata[i];
  }
  return balik; */

  return kata.split('').reverse().join('');

}


// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS