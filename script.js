const password = document.getElementById("password");

const strengthFill = document.getElementById("strength-fill");
const strengthText = document.getElementById("strength-text");

const lengthRule = document.getElementById("length");
const upperRule = document.getElementById("upper");
const numberRule = document.getElementById("number");
const symbolRule = document.getElementById("symbol");

const tipText = document.getElementById("tip-text");

const toggle = document.getElementById("toggle");

password.addEventListener("input", checkPassword);

toggle.addEventListener("click", () => {

if(password.type === "password")
password.type = "text";
else
password.type = "password";

});

function checkPassword(){

let value = password.value;
let score = 0;

if(value.length >= 8){
lengthRule.innerHTML = "✔ At least 8 characters";
score++;
}else{
lengthRule.innerHTML = "✖ At least 8 characters";
}

if(/[A-Z]/.test(value)){
upperRule.innerHTML="✔ Contains uppercase letter";
score++;
}else{
upperRule.innerHTML="✖ Contains uppercase letter";
}

if(/[0-9]/.test(value)){
numberRule.innerHTML="✔ Contains number";
score++;
}else{
numberRule.innerHTML="✖ Contains number";
}

if(/[^A-Za-z0-9]/.test(value)){
symbolRule.innerHTML="✔ Contains special character";
score++;
}else{
symbolRule.innerHTML="✖ Contains special character";
}

updateStrength(score);

}

function updateStrength(score){

if(score <=1){

strengthFill.style.width="25%";
strengthFill.style.background="red";
strengthText.innerText="Weak Password";

tipText.innerText="Use longer passwords and mix letters, numbers and symbols.";

}

else if(score<=3){

strengthFill.style.width="60%";
strengthFill.style.background="orange";
strengthText.innerText="Medium Password";

tipText.innerText="Add symbols or increase length for stronger protection.";

}

else{

strengthFill.style.width="100%";
strengthFill.style.background="green";
strengthText.innerText="Strong Password";

tipText.innerText="Great! Your password is strong.";

}

}