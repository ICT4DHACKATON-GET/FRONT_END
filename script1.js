const ip = "http://192.168.1.142:5000/";

const id = ReadIdFromCookie()

get_info(id)

// Get the buttons by their IDs
const button1 = document.getElementById('setting-tab');
const button2 = document.getElementById('pills-setting-tab');    
// Add click event listener for button1
button1.addEventListener('click', function() {
// Trigger button2 click when button1 is clicked
button2.click();
});

// Example balance (this would normally come from your server-side or database)
const currentBalance = 2500;  // Assume the user has 2500 FCFA in their account
const validUserIds = ["user123", "user456", "user789"]; // Example valid user IDs

document.getElementById('sendMoneyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input values
    const recipientId = document.getElementById('recipientId').value.trim();
    const sendAmount = parseInt(document.getElementById('sendAmount').value);

    // Validate the recipient ID
    if (!validUserIds.includes(recipientId)) {
        document.getElementById('recipientErrorMessage').style.display = 'block';
        return;
    } else {
        document.getElementById('recipientErrorMessage').style.display = 'none';
    }

    // Validate the send amount
    if (isNaN(sendAmount) || sendAmount <= 500 || sendAmount > currentBalance) {
        document.getElementById('amountErrorMessage').style.display = 'block';
        return;
    } else {
        document.getElementById('amountErrorMessage').style.display = 'none';
    }

    // If both validations pass, simulate sending money (you can replace this with actual logic)
    alert(`Successfully transferred ${sendAmount} FCFA to ${recipientId}!`);
    // You can add a function to submit the form data to your backend, for example, using AJAX
});


document.getElementById('depositForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input value
    const depositAmount = parseInt(document.getElementById('depositAmount').value);

    // Validate the deposit amount
    if (isNaN(depositAmount) || depositAmount <= 500) {
        // Show error message if invalid
        document.getElementById('error-message').style.display = 'block';
    } else {
        // Proceed with form submission logic (e.g., submit to the server)
        document.getElementById('error-message').style.display = 'none';
        alert(`Deposit of ${depositAmount} FCFA successful!`);
        // You can add a function to actually submit the form data or trigger a backend request
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
      })
      .catch(error => {
        console.error('Erreur lors de l\'appel API:', error);
        // Gérer les erreurs
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
        montant: montant     // Montant du paiement
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
        alert(data)
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

