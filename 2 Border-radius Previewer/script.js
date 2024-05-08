
 
  let temp = null;
  let storeBorderRadius = '';


  function changeBorderText(radiusValue){

    let radiusValArray = radiusValue.trim().split(" ");
    // console.log(radiusValArray);

    if( radiusValArray.length == 1){
      document.getElementById("text1").textContent = radiusValArray[0];
      document.getElementById("text2").textContent = radiusValArray[0];
      document.getElementById("text3").textContent = radiusValArray[0];
      document.getElementById("text4").textContent = radiusValArray[0] ;
    }

    else if( radiusValArray.length == 2){
      document.getElementById("text1").textContent = radiusValArray[0];
      document.getElementById("text2").textContent = radiusValArray[1];
      document.getElementById("text3").textContent = radiusValArray[0];
      document.getElementById("text4").textContent = radiusValArray[1] ;
    }

    else if( radiusValArray.length == 3){
      document.getElementById("text1").textContent = radiusValArray[0];
      document.getElementById("text2").textContent = radiusValArray[1];
      document.getElementById("text3").textContent = radiusValArray[2];
      document.getElementById("text4").textContent = radiusValArray[1] ;
    }

    else if( radiusValArray.length == 4){
      document.getElementById("text1").textContent = radiusValArray[0];
      document.getElementById("text2").textContent = radiusValArray[1];
      document.getElementById("text3").textContent = radiusValArray[2];
      document.getElementById("text4").textContent = radiusValArray[3] ;
    }

   

  }


  function changeBorderRadius( obj , isCustom ){

    // console.log(obj.children[1].value);

    // below two lines will remove border from non-selected subContainer
    if(temp != null) temp.style.border = '';
    temp = obj ; 

    // adding border to selected sub-conatiner
    obj.style.border = "2px solid #FF0099" ;
   
    // changing target border radius accordingly
    let target1 = document.getElementById("target");
    
    if(isCustom == 0){
      target1.style.borderRadius = obj.children[1].textContent ;
      storeBorderRadius = obj.children[1].textContent ;
      changeBorderText( obj.children[1].textContent );
    }
  }





 function changeBorderRadiusCustom( ){

  let inputArray = document.getElementsByTagName("input");
  // console.log(inputArray);      

  let input = null;
  for(let i = 0; i<inputArray.length ; i++){
    if(inputArray[i].value != ''){
      if(input == null ) input = inputArray[i].value + '% ' ;
      else input = input  +  inputArray[i].value  + '% ' ;
    }
  }

  console.log(input);

  let target = document.getElementById("target");
  target.style.borderRadius = input ;

  storeBorderRadius = input ;
  changeBorderText( input );
 }


  function copySelectedBorderRadius(){
     /* Copy selected text into clipboard */

     document.getElementById("userMessage").style.display= "inline";

     setTimeout(() => {
      document.getElementById("userMessage").style.display= "none";
     }, 500);

     navigator.clipboard.writeText("border-radius:" + storeBorderRadius) ; 
  }