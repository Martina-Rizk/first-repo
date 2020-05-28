var firstName = document.getElementById("validationCustom01");
var lastName = document.getElementById("validationCustom02");
var password = document.getElementById("validationCustom08");
var city = document.getElementById("validationCustom03");
var state = document.getElementById("validationCustom04");
var zip = document.getElementById("validationCustom05");
var address = document.getElementById("validationCustom06");
var email = document.getElementById("validationCustom07");

var allInputs = [firstName, lastName, password, city, state, zip, address, email];
function myfunction()
{
  for( i=0; i<allInputs.length; i++)
  {
      console.log(allInputs[i].value);
  }
}


var Button = document.getElementsByTagName("button")[0];
Button.addEventListener("click",myfunction);
