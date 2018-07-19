function naikAngkot(arrPenumpang) {
  let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  let newArr = [];

  for(let i = 0;i<arrPenumpang.length;i++){
    let obj = {};
    obj.penumpang=arrPenumpang[i][0];
    obj.naikDari=arrPenumpang[i][1];
    obj.tujuan=arrPenumpang[i][2];
    newArr.push(obj);
    let naik = 0;
    let turun = 0;
    for(let i in rute){
      if(obj.naikDari===rute[i]){
        naik =i;
      }
      if(obj.tujuan===rute[i]){
        turun =i;
      }
    }
    obj.bayar = 2000*(turun-naik);
  }

  return newArr;

}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]