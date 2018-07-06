var nama = 'Julian';
var peran = 'Ksatria';

if(nama === ''){
  console.log('Nama harus diisi!');
} if(peran === ''){
  console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
} if(nama!==''&&peran === 'Ksatria'){
  console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
  console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`)
} if(nama!==''&&peran === 'Tabib'){
  console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
  console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`)
} if(nama!==''&&peran === 'Penyihir'){
  console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
  console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
}