function timeConversion(s) {
  let waktu = s[s.length-2]+s[s.length-1];
  let splitted = s.split('');

  if(waktu==="PM"){
    if(splitted[0]==='1'&&splitted[1]==='2'){
      splitted[0]= splitted[0];
      console.log(splitted[0]);
      splitted[1]= splitted[1];
      console.log(splitted[1]);
      let result = '';
      for(let i=0;i<splitted.length-2;i++){
          result+=splitted[i];
      }
      return result;
  } else{
    splitted[0]= parseInt(splitted[0])+1;
      console.log(splitted[0]);
      splitted[1]=parseInt(splitted[1])+2;
      console.log(splitted[1]);

      let result = '';
      for(let j=0;j<splitted.length-2;j++){
          result+=splitted[j];
      }
      return result;
  }

  }

  if(waktu==="AM"){
    if(splitted[0]==='1'&&splitted[1]==='2'){
      splitted[0]= splitted[0]-1;
      console.log(splitted[0]);
      splitted[1]= splitted[1]-2;
      console.log(splitted[1]);
      let result = '';
      for(let i=0;i<splitted.length-2;i++){
          result+=splitted[i];
      }
      return result;
  } else{
    let result = '';
      for(let i=0;i<splitted.length-2;i++){
          result+=splitted[i];
      }
      return result;
    }
  }
}

console.log(timeConversion('12:05:39AM'));