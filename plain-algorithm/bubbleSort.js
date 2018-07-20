//Descending
const bubbleSort = (arr) =>{
  for(let i = 0;i<arr.length;i++){
    let temp = 0;
    for(let j = i+1;j<arr.length;j++){
      if(arr[i]<arr[j]){
        temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
      }
    }
  }
  return arr;
};

//Ascending
const bubbleSort2 = (arr) =>{
  for(let i = 0;i<arr.length;i++){
    let temp = 0;
    for(let j = i+1;j<arr.length;j++){
      if(arr[i]>arr[j]){
        temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
      }
    }
  }
  return arr;
};
console.log(bubbleSort([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(bubbleSort([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(bubbleSort([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(bubbleSort([]));
//''