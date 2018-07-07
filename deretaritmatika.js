function tentukanDeretAritmatika(arr){
  var simpan1 = 0;
  var simpan2 = 0;
  var counter = 1;
  var kali = 1;
  var counter2 = 0;

  while(counter<arr.length){
    for(let i = 1;i<arr.length;i++){
      simpan1= arr[1]-arr[0];
      simpan2= arr[i]-arr[0];
      if(simpan1*kali===simpan2){
        counter2++;
      }
      counter++;
      kali++;
    }
  }
  if(counter2===arr.length-1){
    return true;
  } if(counter2<arr.length-1){
    return false;
  }
}

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false