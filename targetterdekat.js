function targetTerdekat(arr) {
  var o = 0;
  var counterX = 0;
  var hitungJarak = 99999;
  var jarak = 0;

  for(let i in arr){
    if(arr[i]=== 'o'){
      o = i;
    }
  }

  for(let i in arr){
    if(arr[i]==='x'){
      if(i<o){
        jarak= o-i;
        counterX++;
      } if(i>o){
      jarak = i-o;
      counterX++;
    }

      if(jarak<hitungJarak){
        hitungJarak= jarak;
      }
    }

  }

  if(counterX>0){
    return hitungJarak;
  }
  if(counterX===0){
    return 0;
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2