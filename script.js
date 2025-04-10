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

const logi = document.getElementById('login1');
// Get the phone number value and validate
const phoneInput = document.getElementById('phoneInput');
const phoneValue = phoneInput.value.trim();

// Reference to the Bootstrap Modal
var phoneModal = new bootstrap.Modal(document.getElementById('phoneModal'));
    
// When the main form is submitted
document.getElementById('signupForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default submission behavior
  
  // You can gather data from the main form if needed
  const nameValue = document.getElementById('nameInput').value.trim();
  console.log('Main form submitted. Name:', nameValue);
  
  // Show the phone number prompt modal
  phoneModal.show();
});

// Handling the phone number form submission inside the modal
document.getElementById('phoneForm').addEventListener('submit', function (event) {
  registrer(); 

  event.preventDefault(); // Prevent default form submission
  
  
  if (!phoneValue) {
    phoneInput.classList.add('is-invalid');
    return;
  } else {
    phoneInput.classList.remove('is-invalid');
  }
  
  console.log('Phone number submitted:', phoneValue);
  
  // You can now combine data from the main form and the phone input as needed to process or submit to your server
  
  // Hide the modal on successful submission
  phoneModal.hide();

  // Optionally, display a success message
  const successAlert = document.createElement('div');
  successAlert.className = 'alert alert-success alert-dismissible fade show mt-3';
  successAlert.role = 'alert';
  successAlert.innerHTML = 'Thank you! Your information has been submitted.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
  document.body.prepend(successAlert);
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
    email: emailValue2,
    num: "620142649",
    password: passwordValue2
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
    name:nameValue,
    password:passwordValue,
    operateur:"MTN",
    email: emailValue,
    num: phoneValue,
    password: confirmPasswordValue
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
