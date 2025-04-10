const ip = "http://192.168.1.142:5000/";

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});



// connexion back-end

const register = document.getElementById('sigin');
const logi = document.getElementById('login1');

register.addEventListener('click', () => {
    registrer();
});

logi.addEventListener('click', () => {
    login();
});

function login(){
    // Prevent the default form submit action
  event.preventDefault();

  // Retrieve values from the input fields using their IDs
  const emailValue2 = document.getElementById('emailInput2').value;
  const passwordValue2 = document.getElementById('passwordInput2').value;

  // Use the values as needed (for example, logging them in the console)
  console.log("Email :", emailValue2);
  console.log("Mot de passe :", passwordValue2);

  // Further processing, such as sending these values to a back-end server, could be performed here.

    fetch(ip+"login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    email: "tsanga@gmail.com",
    num: "620142649",
    password: "fdfsdfd"
  })
})
.then(response => response.json())
.then(data => {
  console.log("Réponse du serveur :", data);
  // Attendre 2 secondes avant de rediriger
  setTimeout(() => {
    window.location.href = "profile.html";
  }, 2000);
})
.catch(error => {
  //console.error("Erreur :", error);
  alert("erreur de connexion");
});

}

function registrer(){

    // Prevent the default form submission behavior
    alert("Formulaire soumis !");
    event.preventDefault();

    // Retrieve the values from the form inputs
    const nameValue = document.getElementById('nameInput').value;
    const emailValue = document.getElementById('emailInput').value;
    const passwordValue = document.getElementById('passwordInput').value;
    const confirmPasswordValue = document.getElementById('confirmPasswordInput').value;

    // Optionally perform validation (for example, check if passwords match)
    if (passwordValue !== confirmPasswordValue) {
        alert("Les mots de passe ne correspondent pas !");
        return;
    }

    // Now you have stored form values in your variables:
    console.log("Nom :", nameValue);
    console.log("Email :", emailValue);
    console.log("Mot de passe :", passwordValue);
    // You can now use these variables to further process the form data, for example, send them to a server.

    fetch(ip+"sigin", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name:"tsanga awana ddfd",
    password:"dfdfdfdf",
    operateur:"MTN",
    email: "tsanga@gmail.com",
    num: "620142649",
    password: "fdfsdfd"
  })
})
.then(response => response.json())
.then(data => {
  //console.log("Réponse du serveur :", data);
  // Attendre 2 secondes avant de rediriger
  setTimeout(() => {
    window.location.href = "profile.html";
  }, 2000);
})
.catch(error => {
  //console.error("Erreur :", error);
  alert("erreur d inscription");
});

}