//event listener for first button
const button1=document.querySelector('.trial');
button1.addEventListener("click", function(event){
   console.log("No, links to redirect!!!");
});

//this selects all the elements with class input..i.e., input elements;
let inputs = document.querySelectorAll('.input');
console.log("No. of elements with the class input : " + inputs.length);

//this selects all the elements with class text..i.e,error msgs;
let texts = document.querySelectorAll('.text');
console.log("No. of elements with the class text : " + texts.length);


//event listener for the second button
const button2=document.querySelector('.claim')
button2.addEventListener("click", function(event){

      //loop checks if input value is empty then it applies appropriate classes;
      for(let i=0; i<inputs.length; i++) {
         if(!inputs[i].value){
            inputs[i].classList.add('input-error');
            texts[i].classList.add('error');
         }
         else{
            inputs[i].classList.remove('input-error');
            texts[i].classList.remove('error');
         }
      }

      let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      let emailInput = document.getElementById('email').value;
      //if email input doesn't match the format we should display error msg;
      if(!emailInput.match(emailFormat)){
         inputs[2].classList.add('input-error');
         texts[2].classList.add('error');
          console.log(emailInput);
      }
   
});