function angkaPalindrome(num) {
  let num1 = num;
  let angka= num1.toString();
  if(num1<9){
    return num+1;
  }
  if(num1===9){
    return 11;
  }
  while(angka!==angka.split('').reverse().join('')){
    angka = num1.toString();
    num1++;
  }
  return num1-1;

}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
