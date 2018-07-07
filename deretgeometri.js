function tentukanDeretGeometri(arr){
  var simpan1 = 0;
  var simpan2 = 0;
  var counter = 1;
  var kali = 1;
  var counter2 = 0;

  while(counter<arr.length){
    for(let i = 1;i<arr.length;i++){
      simpan1= arr[1]/arr[0];
      simpan2= arr[i]/arr[0];
      if(simpan1*kali===simpan2){
        counter2++;
      }
      counter++;
      kali *= simpan1;
    }
  }
  if(counter2===arr.length-1){
    return true;
  } if(counter2<arr.length-1){
    return false;
  }
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false