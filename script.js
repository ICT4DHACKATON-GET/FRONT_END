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
    alert("sigin");
    registrer();
});

logi.addEventListener('click', () => {
    alert("login");
    login();
});

function login(){
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
})
.catch(error => {
  console.error("Erreur :", error);
});

}

function registrer(){
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
  console.log("Réponse du serveur :", data);
})
.catch(error => {
  console.error("Erreur :", error);
});

}