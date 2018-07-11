function xo(str) {
  var counterX=0;
  var counterO=0;

  for(let i = 0;i<str.length;i++){
    if(str[i]==='o'){
      counterO++;
    }
    if(str[i]==='x'){
      counterX++;
    }
  }

  if(counterX===counterO){
    return true;
  } else{
    return false;
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true