function konversiMenit(menit) {
  if(menit<60){
    return '0:'+menit;
  }
  if(menit>60&&(menit-(Math.floor(menit/60)*60))>10){
    return Math.floor(menit/60)+':'+(menit-(Math.floor(menit/60)*60));
  }
  if(menit>60&&(menit-(Math.floor(menit/60)*60))<10){
    return Math.floor(menit/60)+':0'+(menit-(Math.floor(menit/60)*60));
  }
  if(menit>60&&(menit-(Math.floor(menit/60)*60))===0){
    return Math.floor(menit/60)+':'+(menit-(Math.floor(menit/60)*60))+0;
  }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00