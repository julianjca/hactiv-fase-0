function doneOrNot(board){
  let counter = 0;
  for(let i = 0;i<board.length;i++){
    let result = [];
    for(let j = 0;j<board[i].length;j++){
      if(board[i][j]===0){
        return "Try again!";
      }
      result[board[i][j]] = result[board[i][j]]+1 || 1;
    }
      console.log(result.length)
    if(result.length===10){
      counter++;
    }
  }


  if(counter===9){
    return "Finished!";
  } else{
    return "Try again!";
  }
}