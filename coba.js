/* function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
console.log(nextChar('a')); */

function drawSymbolicColsBox(num) {
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
}

drawSymbolicColsBox(5);