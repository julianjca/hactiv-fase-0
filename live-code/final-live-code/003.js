/**
================
Hitung Kembalian
================

buatlah function yang akan menghitung nominal dan jumlah pecahan pengembalian transaksi.
function tersebut akan menerima 2 parameter parameter pertama adalah nilai pembayaran,
parameter kedua adalah nilai yang harus dibayarkan.

Code dibuat se dinamis mungkin untuk menghandle apabila ketersediaan uang nominal dan jumlahnya
diubah-ubah dan asumsi uang kembaliannya selalu cukup dengan jumlah ketersediaan uang

*/

function hitungKembalian(bayar, harga){
  let result = {};

  var ketersediaanUang = [
      { nominal: 100000, jumlah: 5},
      { nominal: 50000, jumlah: 5},
      { nominal: 20000, jumlah: 5 },
      { nominal: 30000, jumlah: 5 },
      { nominal: 10000, jumlah: 5},
      { nominal: 5000, jumlah: 5}
  ];

  if(harga>bayar){
    return "Uang tidak cukup";
  } else if(harga===bayar){
    return {};
  } else{
    let kembalian = bayar - harga;
    let counter2 = 0;
    let counter = 0;
    let counter3 = 0;

    while(counter<ketersediaanUang.length){
      let condition = false;
      counter2 = 0;
      while(condition!==true){
        if(kembalian-ketersediaanUang[counter].nominal<0){
          condition = true;
        } if(kembalian-ketersediaanUang[counter].nominal>=0){
          if(ketersediaanUang[counter].jumlah>0){
            kembalian -= ketersediaanUang[counter].nominal;
            ketersediaanUang[counter].jumlah -= 1;
            counter2++;
            counter3++;
          } else{
            condition = true;
          }

        }
      }
      if(counter2>0){
        result[ketersediaanUang[counter].nominal] = counter2;
      }
      counter++;
    }

    return result;
  }

}

// Test Case
console.log(hitungKembalian(1000000, 755000));
/*
output
  {
    '5000': 1,
    '20000': 2,
    '100000': 2
  }
*/

// Test Case
console.log(hitungKembalian(40000, 35000));
/*
output
  { '5000': 1 }
*/

// Test Case 3
console.log(hitungKembalian(920000, 80000));
/*
output
  {
    '10000': 1,
    '20000': 4,
    '50000': 5,
    '100000': 5
  }
*/

// TEST CASE 4
console.log(hitungKembalian(50000,50000)); // {}

// TEST CASE 5
console.log(hitungKembalian(50000,500000)); // Uang tidak cukup


