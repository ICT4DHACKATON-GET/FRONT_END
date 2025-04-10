const ip = "http://192.168.1.142:5000/";

const id = ReadIdFromCookie()

get_info(id)

// Get the buttons by their IDs
const button1 = document.getElementById('setting-tab');
const button2 = document.getElementById('pills-setting-tab');    
// Add click event listener for button1
button1.addEventListener('click', function() {
    alert("coucou");
// Trigger button2 click when button1 is clicked
button2.click();
});

// Example balance (this would normally come from your server-side or database)
let currentBalance = 0;  // Assume the user has 0 FCFA in their account

document.getElementById('withdrawForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input value
    const Amount = parseInt(document.getElementById('withdrawAmount').value);

    // Validate the deposit amount
    if (isNaN(Amount) || Amount <= 100) {
        // Show error message if invalid
        document.getElementById('error-message').style.display = 'block';
    } 
    else {
        // Proceed with form submission logic (e.g., submit to the server)
        document.getElementById('error-message').style.display = 'none';
        //alert(`Deposit of ${depositAmount} FCFA successful!`);
        // You can add a function to actually submit the form data or trigger a backend request
        depose(id, Amount)
    }
});


document.getElementById('depositForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input value
    const depositAmount = parseInt(document.getElementById('depositAmount').value);

    // Validate the deposit amount
    if (isNaN(depositAmount) || depositAmount <= 100) {
        // Show error message if invalid
        document.getElementById('error-message').style.display = 'block';
    } 
    else {
        // Proceed with form submission logic (e.g., submit to the server)
        document.getElementById('error-message').style.display = 'none';
        //alert(`Deposit of ${depositAmount} FCFA successful!`);
        // You can add a function to actually submit the form data or trigger a backend request
        collect(id, depositAmount)
    }
});

function send(id, montant, recv){
    fetch(ip+'send', {
        method: 'POST', // méthode HTTP
        headers: {
          'Content-Type': 'application/json' // Spécifie le type de contenu envoyé
        },
        body: JSON.stringify({
          id:identifiant,         // identifiant de l aute de la transaction
          montant: montant,      // Montant du paiement
          num: num,              // Numéro de téléphone
          operateur: operateur  // Opérateur (MTN, Orange, etc.)
        })
      })
      .then(response => response.json()) // Récupérer la réponse en format JSON
      .then(data => {
        console.log('Réponse de l\'API:', data);
        // Traiter la réponse ici (ex: afficher un message, mettre à jour l'UI)
      })
      .catch(error => {
        console.error('Erreur lors de l\'appel API:', error);
        // Gérer les erreurs
      });
}

function depose(ide, montant){
    fetch(ip+'depose', {
        method: 'POST', // méthode HTTP
        headers: {
          'Content-Type': 'application/json' // Spécifie le type de contenu envoyé
        },
        body: JSON.stringify({
          id:ide,         // identifiant de l aute de la transaction
          montant: montant      // Montant du paiement
        })
      })
      .then(response => response.json()) // Récupérer la réponse en format JSON
      .then(data => {
        console.log('Réponse de l\'API:', data);
        // Traiter la réponse ici (ex: afficher un message, mettre à jour l'UI)

        if (data.message == "200"){
            // Optionally, display a success message
            const successAlert = document.createElement('div');
            successAlert.className = 'alert alert-success alert-dismissible fade show mt-3';
            successAlert.role = 'alert';
            successAlert.innerHTML = 'Thank you! Your information has been submitted.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            document.body.prepend(successAlert);

            get_info(id)
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
        console.error('Erreur lors de l\'appel API:', error);
        // Gérer les erreurs
           // Optionally, display a success message
           const successAlert = document.createElement('div');
           successAlert.className = 'alert alert-danger alert-dismissible fade show mt-3';
           successAlert.role = 'alert';
           successAlert.innerHTML = 'Thank you! Your information has been submitted.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
           document.body.prepend(successAlert);
      });
}

function collect(ide, montant){
    fetch(ip+'collect', {
      method: 'POST', // méthode HTTP
      headers: {
        'Content-Type': 'application/json' // Spécifie le type de contenu envoyé
      },
      body: JSON.stringify({
        id:ide,         // identifiant de l aute de la transaction
        montant: montant,     // Montant du paiement
      })
    })
    .then(response => response.json()) // Récupérer la réponse en format JSON
    .then(data => {
      console.log('Réponse de l\'API:', data);
      if (data.message == "200"){

        // Optionally, display a success message
        const successAlert = document.createElement('div');
        successAlert.className = 'alert alert-success alert-dismissible fade show mt-3';
        successAlert.role = 'alert';
        successAlert.innerHTML = 'Thank you! Your information has been submitted.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
        document.body.prepend(successAlert);

        get_info(id)

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
      console.error('Erreur lors de l\'appel API:', error);
      // Gérer les erreurs
         // Optionally, display a success message
         const successAlert = document.createElement('div');
         successAlert.className = 'alert alert-danger alert-dismissible fade show mt-3';
         successAlert.role = 'alert';
         successAlert.innerHTML = 'Thank you! Your information has been submitted.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
         document.body.prepend(successAlert);
    });
}


function get_info(identifiant){
    fetch(ip+'info', {
        method: 'POST', // méthode HTTP
        headers: {
          'Content-Type': 'application/json' // Spécifie le type de contenu envoyé
        },
        body: JSON.stringify({
          id:identifiant         // identifiant de l aute de la transaction
        })
      })
      .then(response => response.json()) // Récupérer la réponse en format JSON
      .then(data => {
        console.log(data)
        document.getElementById("nom").innerHTML = data.NAME
        document.getElementById("email").innerHTML = data.EMAIL
        document.getElementById("num").innerHTML = data.NUMERO
        document.getElementById("solde").innerHTML = data.SOLDE
        currentBalance = data.SOLDE
      })
      .catch(error => {
        console.error('Erreur lors de l\'appel API:', error);
        alert("Error");
      });
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

