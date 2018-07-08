function balikString(str){
  let balik = '';

  for(let i = str.length-1;i>=0;i--){
    balik+= str[i];
  }

  return balik;
}

console.log(balikString("hello world!"));

