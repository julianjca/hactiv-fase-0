for(var i =1 ; i<=100;i++){
  if(i%2!==0){
    console.log("GANJIL");
  }
  if(i%2===0){
    console.log("GENAP");
  }
}

var counter1=1;
var counter2=1;
var counter3=1;

while(counter1<=100){
  if(counter1%3===0){
    console.log(counter1+" kelipatan 3");
  } else{
    console.log("")
  }
  counter1+=2;
}

while(counter2<=100){
  if(counter2%6===0){
    console.log(counter2+" kelipatan 6");
  } else{
    console.log("")
  }
  counter2+=5;
}

while(counter3<=100){
  if(counter3%10===0){
    console.log(counter3+" kelipatan 10");
  } else{
    console.log("")
  }
  counter3+=9;
}