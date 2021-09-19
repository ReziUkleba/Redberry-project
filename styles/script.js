 


    // page 2 script
    
   
function yesNoCheck(x){
  if(x==0){
    document.getElementById('hidden1').style.display="block"
    
  }else{
    document.getElementById('hidden1').style.display="none"
  }
}


function yesOption(y){
  if(y==0){
    document.getElementById('hidden3').style.display="none"
    document.getElementById('hidden2').style.display="block"
   
  }else if(y==1){
    document.getElementById('hidden2').style.display="none"
    document.getElementById('hidden3').style.display="block"
  }
}





// 1 st page validation

function fieldValidation() {

  var name = document.forms['myForm']['name'].value;
  var surname = document.forms['myForm']['surname'].value;
  var email = document.forms['myForm']['email'].value;
  
  
  var fullName = /^[a-zA-Z]+ [a-zA-Z]{3 ,255}$/;
  
  
  if (name === '') {
    alert('Please enter your name.'); 
    return false;
  }
  
  if (!fullName.test(name)) {
    alert('Please make sure we have your full name.');
    return false;
  } if (!fullName.test(surname)){
    alert('Please make sure we have your surname.');
    return false;

  }
  
  if (surname === '') { 
    alert('Please enter your surname.'); 
    return false; 
  } 
  
  if (email === '') { 
    alert('Please enter your e-mail address.'); 
    return false; 
  } 
     
    return true;
  }
 
