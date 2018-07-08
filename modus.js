function cariModus(arr) {
  const charMap = [];
    let max = 0;
    let maxChar = '';

    for(let char of arr){
        charMap[char] = charMap[char]+1 || 1;
    }

    for(let char in charMap){
        if(charMap[char]>max){
            max = charMap[char];
            maxChar = char;
        }
    }

    var counterSama=0;
    for(let char in arr){
      if(arr[0]===arr[char]){

      }
    }

    if(max===1){
      return -1;
    } if(max===arr.length){
      return -1;
    } else{
      return parseInt(maxChar);
    }

}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1