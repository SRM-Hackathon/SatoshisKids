// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyAn2FfSUVrIQWTjKKPDHi0CPi5klPmNSRA",
    authDomain: "fasal-8efad.firebaseapp.com",
    databaseURL: "https://fasal-8efad.firebaseio.com",
    projectId: "fasal-8efad",
    storageBucket: "fasal-8efad.appspot.com",
    messagingSenderId: "953205248878"
  };
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

messagesRef.on("child_added", snap=>{

  var name = snap.child("name").val();
  var email = snap.child("email").val();
  var company = snap.child("company").val();
  var message = snap.child("message").val();
  var phone = snap.child("phone").val();
  var row = document.getElementById('tablebody').insertRow(0);
  row.insertCell(0).innerHTML=name;
  row.insertCell(1).innerHTML=company;
  row.insertCell(2).innerHTML=phone;
  row.insertCell(3).innerHTML=message;
  row.insertCell(4).innerHTML=email;
})

function submitForm(){

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}


if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js')
      .then(function() {
        console.log('Service worker registered!');
      });
  }

  window.addEventListener('beforeinstallprompt', function(event) {
    console.log('beforeinstallprompt fired');
    event.preventDefault();
    deferredPrompt = event;
    return false;
  });


function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("main").style.opacity = 0.8;
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("main").style.opacity = 1;
}