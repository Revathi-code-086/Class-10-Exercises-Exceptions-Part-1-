// Code your divide function here:
function divide(num, deno){
  if(deno === 0){
       throw Error("Attempted to divide by zero.");
    }
    else{
      return num / deno;
    }
     }
  //console.log(divide(3, 0));
  //console.log(divide(9, 3));
  //console.log(divide(3, 0));
