const ip = "https://78e3-102-244-45-26.ngrok-free.app/";

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

  //add_cookkie(data.message);

  // Retrieve values from the input fields using their IDs
  const emailValue2 = document.getElementById('emailInput2').value;
  const passwordValue2 = document.getElementById('passwordInput2').value;

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

    if (data.message != "400"){

        // Optionally, display a success message
        const successAlert = document.createElement('div');
        successAlert.className = 'alert alert-success alert-dismissible fade show mt-3';
        successAlert.role = 'alert';
        successAlert.innerHTML = 'Thank you! Your information has been submitted.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
        document.body.prepend(successAlert);

        // Attendre 2 secondes avant de rediriger
        setTimeout(() => {
        window.location.href = "profile.html";
        }, 2000);
        add_cookkie(data.message);

    }
    else {
        // Optionally, display a success message
        const successAlert = document.createElement('div');
        successAlert.className = 'alert alert-danger alert-dismissible fade show mt-3';
        successAlert.role = 'alert';
        successAlert.innerHTML = 'Thank you! Your information has been submitted.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
        document.body.prepend(successAlert);
    }
})
.catch(error => {
  console.error("Erreur :", error);
  alert("erreur de connexion");
});

}

function getSelectedOperator() {
    // Get the selected radio button (service type)
    const selectedService = document.querySelector('input[name="serviceType"]:checked');
    
    // Declare a variable to store the operator
    let operator;

    if (selectedService) {
        // Store the selected service (MTN or Orange) in the operator variable
        operator = selectedService.value;
        // Log the operator to the console (you can use it further as needed)
        console.log("Selected Operator: " + operator);
    }
    console.log("Selected Operator: " + operator);
    // Return the operator variable in case you want to use it elsewhere
    return operator;
}


function registrer(){

    // Prevent the default form submission behavior
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

    fetch(ip+"sigin", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name:nameValue,
    password:passwordValue,
    operateur:getSelectedOperator(),
    email: emailValue,
    num: phoneValue,
    password: confirmPasswordValue
  })
})
.then(response => response.json())
.then(data => {

    add_cookkie(data.message);
    if (data.message != "400"){

    // Optionally, display a success message
    const successAlert = document.createElement('div');
    successAlert.className = 'alert alert-success alert-dismissible fade show mt-3';
    successAlert.role = 'alert';
    successAlert.innerHTML = 'Thank you! Your information has been submitted.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
    document.body.prepend(successAlert);

    setTimeout(() => {
    window.location.href = "profile.html";
    }, 2000);

    }
    
    else {
        // Optionally, display a success message
        const successAlert = document.createElement('div');
        successAlert.className = 'alert alert-danger alert-dismissible fade show mt-3';
        successAlert.role = 'alert';
        successAlert.innerHTML = 'Thank you! Your information has been submitted.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
        document.body.prepend(successAlert);
    }
})
.catch(error => {
  console.error("Erreur :", error);
  alert("erreur d inscription");
});

}

function add_cookkie(data){
    SetCookie(data)
}

function SetCookie(VariableDuCookie ){
  if (!navigator.cookieEnabled){
      return;
  }
  document.cookie = "identifiant="+VariableDuCookie+"; expires=Thu, 4 Dec 2036 12:00:00 UTC; path=/";
}

function ReadCookie(){
  return decodeURIComponent(document.cookie); 
}

function ReadIdFromCookie(){
  var cookie = ReadCookie();
  var id = cookie.split("identifiant=")[1];
  if (id){
      return id.split(";")[0];
  }
  return null;
}
