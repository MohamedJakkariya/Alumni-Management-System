// For Color shading icons 
var user = document.getElementById("u");
var pass = document.getElementById("p");
var email = document.getElementById("e");
var re_pass = document.getElementById("rp");
var user_input = document.getElementById("username");
var pass_input = document.getElementById("password");
var email_input = document.getElementById("email");
var re_pass_input = document.getElementById("re-password");
var temp = "check";

// For user input check
var user_check = document.getElementById('user-check');
var pass_check = document.getElementById('password-check');
var re_pass_check = document.getElementById('re-password-check');
var first_name_input = document.getElementById('first-name');
var first_name_check = document.getElementById('first-name-check');
var reg_num_check = document.getElementById('reg-num-check');
var reg_num_input = document.getElementById('reg-num');
var phone_input = document.getElementById('phone');
var phone_check = document.getElementById('phone-check');

// Phone number check 
phone_input.addEventListener("focusout", () => {
  if (phone_input.value === "") {
    phone_check.className = "";
    phone_check.innerHTML = "&times";
  } else {
    phone_check.className = "fa fa-check";
    phone_check.innerHTML = "";
  }
});

//Reg Number check
reg_num_input.addEventListener("focusout", () => {
  if (reg_num_input.value === "") {
    reg_num_check.className = "";
    reg_num_check.innerHTML = "&times";
  } else {
    reg_num_check.className = "fa fa-check";
    reg_num_check.innerHTML = "";
  }
});

// First Name check 
first_name_input.addEventListener("focusout", () => {
  if (first_name_input.value === "") {
    first_name_check.className = "";
    first_name_check.innerHTML = "&times";
  } else {
    first_name_check.className = "fa fa-check";
    first_name_check.innerHTML = "";
  }
});

// User name 
user_input.addEventListener("focusout",()=>{
if (user_input.value === '') {
  user_check.className = "";
  user_check.innerHTML = "&times";
 }
 else{
  user_check.className = "fa fa-check";
  user_check.innerHTML = "";
 }
});

// Password
pass_input.addEventListener("focusout",() =>{

 if(pass_input.value === '')
 {
  pass_check.className = "";
  pass_check.innerHTML = "&times";
 }else{
  temp = pass_input.value;
  pass_check.className = "fa fa-check";
  pass_check.innerHTML = "";
 }
});

// Check Re-enter password 
re_pass_input.addEventListener("focusout",()=>{
 if(temp === re_pass_input.value)
 {
  re_pass_check.className = "fa fa-check";
  re_pass_check.innerHTML = "";
 }
 else{
    re_pass_check.className = "";
  re_pass_check.innerHTML = "&times";
  re_pass_check.style.color = "red";
 }
});


user_input.addEventListener("focus", () => {
  user.style.color = "white";
  pass.style.color = "#ada8a8";
  email.style.color = "#ada8a8";
  re_pass.style.color = "#ada8a8";
});

pass_input.addEventListener("focus", () => {
  pass.style.color = "white";
  user.style.color = "#ada8a8";
  email.style.color = "#ada8a8";
  re_pass.style.color = "#ada8a8";
});

email_input.addEventListener("focus",() => {
  pass.style.color = "#ada8a8";
  user.style.color = "#ada8a8";
  email.style.color = "white";
  re_pass.style.color = "#ada8a8";
});

re_pass_input.addEventListener("focus", () => {
  pass.style.color = "#ada8a8";
  user.style.color = "#ada8a8";
  email.style.color = "#ada8a8";
  re_pass.style.color = "white";
});


