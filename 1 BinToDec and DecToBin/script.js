

function decimalToBinaryValication(input ){
    if(input == null || input.length == 0 ) {
        document.getElementById("errorMessage1").textContent = 'Input cannot be empty' ;
        document.getElementById("output1").textContent = '';
        return false ;
    }

    else if(input.includes(".")) {
        document.getElementById("errorMessage1").textContent = 'decimal not allowed' ;
        document.getElementById("output1").textContent = '';
        return false ;
    }

    document.getElementById("errorMessage1").textContent = '';
    return true;
}

 function  decimalToBinary(input){
  
   let tempArry = [];
   while(input > 1 ){
      let remainder = input % 2 ;
      input = parseInt( input / 2 ) ;
      tempArry.push(remainder);
   }
   tempArry.push(input);
   tempArry.reverse();

   let output = "";
   for(let i =0; i<tempArry.length;i++){
        output  = output +  tempArry[i] ;
   }

   return output;
 }





 function binaryToDecimalValication(input){
    if(input == null || input.length == 0 ) {
        document.getElementById("errorMessage2").textContent = 'Input cannot be empty' ;
        document.getElementById("output2").textContent = '';
        return false ;
    }

    // checking if input contains number other than 1, 0 
    for(let i = 0; i<input.length ; i++){
        if( !(input[i] == '0' || input[i] == '1') ){
            document.getElementById("errorMessage2").textContent = 'Contain number other than 0,1' ;
            document.getElementById("output2").textContent = '';
            return false; 
        } 
    }

    document.getElementById("errorMessage2").textContent = '';
    return true;
}

 function  binaryToDecimal(input){
    
    let output = 0;
    for(let i =0; i<input.length;i++){
        output =  output + parseInt(  input[i] * Math.pow(2, input.length-i-1) ) ;
    } 

    return output ;
    
  }




  function convertNumber(type){
    

    // convert decimal to binary
    if(type == 1){
        let input = document.getElementById("input1").value;
        if( !decimalToBinaryValication(input ) )  return ;
        output = decimalToBinary(input);
        document.getElementById("output1").textContent = output;
    }

    // convert binary to decimal
    if( type == 2 ){
        let input = document.getElementById("input2").value;
        if( !binaryToDecimalValication(input ) )  return ;
        output = binaryToDecimal(input) ;
        document.getElementById("output2").textContent = output;
    }

    
  }