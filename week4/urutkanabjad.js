function urutkanAbjad(str) {
  //return str.split('').sort().join('');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result ='';
    for(let i = 0 ; i < alphabet.length;i++){
      for(let j = 0 ; j < str.length;j++){
        if(alphabet[i] === str[j]){
          result+=alphabet[i];
        }
      }
    }

    return result;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'