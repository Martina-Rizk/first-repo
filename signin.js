var firstName = document.getElementById("validationCustom01");
var lastName = document.getElementById("validationCustom02");
var pass = document.getElementById("validationCustom08");
var city = document.getElementById("validationCustom03");
var state = document.getElementById("validationCustom04");
var zip = document.getElementById("validationCustom05");
var address = document.getElementById("validationCustom06");
var email = document.getElementById("validationCustom07");

var allInputs = [firstName, lastName, pass, address, email, city, state, zip];

var Button = document.getElementsByTagName("button")[0];
Button.addEventListener("click",myfunction);

function myfunction()
{
  for(var i=0; i<allInputs.length; i++)
  {
      console.log(allInputs[i].value);
  }
  confirm("Do you want to submit?");
}
