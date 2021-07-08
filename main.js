//Mots de passes identiques simple

const password = document.getElementById("password");
const checkPassword = document.getElementById("checkpassword");
const alert = document.getElementById("message");
let letter = document.getElementById("nbrletter");
let power = document.getElementById("power");
let majuscule = document.getElementById("majuscule");

//condition mots de passes différents
checkPassword.addEventListener("keyup", function () {
  if (password.value != checkPassword.value) {
    alert.innerHTML = "Mots de passes différents !";
    alert.style.color = "red";
  }else {
    alert.innerHTML = "Mots de passes identiques !";
    alert.style.color = "green";
  }
});

//condition de 8 caractères minimum
checkPassword.addEventListener("keyup", function () {
  if (password.value.length < 8) {
    letter.innerHTML = "Le mot de passe doit contenir au moins 8 caractères";
    letter.style.color = "orange";
  }else{
    letter.innerHTML = "Longueur ok !";
    letter.style.color = "green";
  }
});

//condition d'au moins une majuscule et une minuscule
password.addEventListener('keyup', function() {
    if (password.value.match(/[A-Z]/g) && password.value.match(/[a-z]/g) && password.value.match(/[0-9]/g) && password.value.match(/[^a-zA-Z\d]/g)){
        majuscule.textContent = "majuscule, minuscule, chiffre et caractère spécial ok !";
        majuscule.style.color = "green";
    }else{
        majuscule.textContent = "le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial";
        majuscule.style.color = "red";
    }
    });

password.addEventListener('keyup', function() {
    if (password.value.match(/[A-Z]/g) && password.value.match(/[a-z]/g) && password.value.match(/[0-9]/g) && password.value.match(/[^a-zA-Z\d]/g)){
        power.textContent = "Mot de passe fort !";
        power.style.color = "green";
    }else if(password.value.match(/[A-Z]/g) && password.value.match(/[a-z]/g) && password.value.match(/[0-9]/g)){
        power.textContent = "Mot de passe moyen !";
        power.style.color = "orange";
    }else{
        power.textContent = "Mot de passe faible";
        power.style.color = "red";
    }
    });