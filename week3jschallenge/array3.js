function dataHandling2(arr){
  arr.splice(1,1,"Roman Alamsyah Elsharawy");
  arr.splice(2,1,"Provinsi Bandar Lampung");
  arr.splice(4,1,"Pria");
  arr.splice(5,1,"SMA Internasional Metro");
  console.log(arr);
  let splittedArr = arr[3].split('/');;
  let splitted = arr[3].split('/');
  for(let i = 0;i<splitted.length;i++){
    splitted[i]= parseInt(splitted[i]);
  }
  console.log(splitted.sort());
  console.log(splitted);
  var bulan = splitted[2];
  switch(bulan){
    case 1:
      bulan = "Januari";
      break;
    case 2:
      bulan = 'Februari';
      break;
    case 3:
      bulan = "Maret";
      break;
    case 4:
      bulan = "April";
      break;
    case 5:
      bulan = "May";
      break;
    case 6:
      bulan = "Juni";
      break;
    case 7:
      bulan = "Juli";
      break;
    case 8:
      bulan = "Agustus";
      break;
    case 9:
      bulan = "September";
      break;
    case 10:
      bulan = "Oktober";
      break;
    case 11:
      bulan = "November";
      break;
    case 12:
      bulan = "Desember";
      break;
}
console.log(bulan);
console.log(splittedArr.join("-"));
let sliceArr = arr[1].slice(0,15);
console.log(sliceArr);

}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);


/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */