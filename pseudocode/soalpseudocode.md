Soal 1

Secara matematis hukum II Newton dirumuskan sebagai berikut: ΣF = m x a

ΣF = resultan gaya (Newton)

m = massa benda (kg)

a = percepatan benda (m/s2)

Berdasarkan keterangan di atas, buatlah sebuah algoritma / pseudocode untuk menghitung resultan gaya pada sebuah mobil yang memiliki massa benda 600 kg dan ketika didorong oleh tiga orang percepatannya adalah 2 m/s2!

set mass = 600
set acceleration = 2
set Force = mass*acceleration
return Force

Soal 2
Apa yang kamu ketahui tentang tanggal 29 Februari? Kamu pasti tahu jika suatu tahun memiliki tanggal 29 Februari berarti tahun tersebut merupakan tahun kabisat.

Dalam kalender Gregorian, tahun kabisat memiliki beberapa kriteria yaitu antara lain:

Jika tahun habis di bagi 4 dan tidak habis di bagi 100, dan
Jika tahun habis di bagi 4, habis di bagi 100 dan habis di bagi 400
Buatlah algoritma & pseudocode untuk menentukan apakah suatu tahun merupakan tahun kabisat atau bukan!

set tahun
if (tahun%4 equal to 0 and tahun%100 not equal to 0) or (tahun%4 equal to 0)
  set answer to true
if tahun%4 != 0
  set answer to false

Soal 3
Foxie akan mencuci pakaiannya menggunakan mesin cuci. Pakaian yang akan dicuci oleh Foxie sebanyak 20 dan akan dimasukkan ke mesin cuci. Mesin cuci akan dinyalakan jika semua pakaian Foxie sudah masuk ke mesin cuci.

Bantulah Foxie untuk menghitung jumlah pakaian yang akan dimasukkan ke mesin cuci menggunakan algoritma & pseudocode perulangan!

set counterBaju = 0
set jumlahBaju = 20
set i = 1
for i to jumlahBaju
  counterBaju = counterBaju + 1
set answet to counterBaju

Soal 4
Seorang guru akan memeriksa kuku siswa-siswinya yang sebanyak 40 orang dengan cara berkeliling kelas. Jika guru menemukan siswa/siswi yang memiliki kuku yang panjang maka guru akan menghukum siswa/siswi tersebut, jika tidak guru akan memuji siswa/siswi tersebut.

Buatlah algoritma & pseudocode untuk permasalahan diatas.

set jumlahMurid = 40
set i = 1
for i to jumlahMurid
  if murid kuku panjang
    set answer to menghukum murid
  if murid kuku pendek
    set answer to memuuji murid