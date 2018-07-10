function perkalianunik(arr){
  var simpan = 1;
  var newArray = [];
  for(let i = 0; i<arr.length;i++){
    for(let j = 0; j<arr.length;j++){
      if(i!==j){
        simpan  = simpan*arr[j];
        //newArray[i]= simpan;
      }
    }
    newArray.push(simpan);
    simpan = 1;
  }
  return newArray;
}

console.log(perkalianunik([2,4,6]));
console.log(perkalianunik([1,2,3,4,5]));
console.log(perkalianunik([1,3,3,1]));
console.log(perkalianunik([2,1,8,10,2]));