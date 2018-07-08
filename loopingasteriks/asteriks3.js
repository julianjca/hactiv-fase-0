var rows3=6;

for(let row = 0; row < rows3; row++){
  let stair = '';

  for(let col = 0; col< rows3; col++){
      if(col <= row){
          stair += '*';
      } else{
          stair += ' ';
      }
  }
  console.log(stair);
}

