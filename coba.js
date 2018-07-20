/* function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
console.log(nextChar('a')); */

/* function drawSymbolicColsBox(num) {
  var urutan = 1;
  for (var i = 0; i < num; i++) {
    let result ='';
    for (var j = 0; j < num; j++) {
      if (urutan % 3 === 0){
      result = result + '* ';
      }else if (urutan % 2 === 0) {
      result = result+ '$ ';
      }else if (urutan % 2 !== 0) {
      result = result+ '@ ';
    }
      urutan += 1;
  }
  console.log (result);
}
} */

//drawSymbolicColsBox(5);

//Balik Kata Rekursif
function balikKata(str){
  let hurufBlk = str[str.length-1];
  let hurufSisa = str.slice(0,str.length-1);

  if(hurufSisa.length===0){
    return hurufBlk;
  } else{
    return hurufBlk + balikKata(hurufSisa);
  }
}

function balikKata2(str){
  if(str.length===0){
    return '';
  } else{
    return str[str.length-1]+balikKata2(str.slice(0,str.length-1));
  }
}

console.log(balikKata('haha'));
console.log(balikKata2('haha'));