var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elResult = document.querySelector(".form__result");

var juft = [];
var toq = [];

elForm.addEventListener("submit" , function(evt){
  evt.preventDefault();

  inputVal = elInput.value

  if(inputVal % 2 == 0){
    juft.unshift(inputVal);
    elResult.textContent = inputVal + " soni juft";
    console.log(juft + " soni juft");
  }else{
    toq.unshift(inputVal);
    elResult.textContent = inputVal + " soni toq son";
    console.log(toq + " soni toq son");
  }

  elInput.value = ""

})