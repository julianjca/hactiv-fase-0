/* function ubahHuruf(kata) {
  let result = '';

  for(let i of kata){
    result += String.fromCharCode(i.charCodeAt(0) + 1);
  }

  return result;
} */

function ubahHuruf(kata) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for(let i of kata){
    for(let j = 0;j<alphabet.length;j++){
      if(i===alphabet[j]){
        result+=alphabet[j+1];
      }
    }
  }

  return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
