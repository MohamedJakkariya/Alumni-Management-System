<<<<<<< HEAD
var user = document.getElementById('user');
var pass = document.getElementById('pass');
var user_input = document.getElementById('username');
var pass_input = document.getElementById('password');

console.log(user_input);

user_input.addEventListener("focus",() => {
 user.style.color = "white";
 pass.style.color = "#ada8a8";

});

pass_input.addEventListener("focus", () => {
  pass.style.color = "white";
  user.style.color = "#ada8a8";
=======
var user = document.getElementById('user');
var pass = document.getElementById('pass');
var user_input = document.getElementById('username');
var pass_input = document.getElementById('password');

console.log(user_input);

user_input.addEventListener("focus",() => {
 user.style.color = "white";
 pass.style.color = "#ada8a8";

});

pass_input.addEventListener("focus", () => {
  pass.style.color = "white";
  user.style.color = "#ada8a8";
>>>>>>> ad761a0dba77235d165ba21f408940288ba1d905
});