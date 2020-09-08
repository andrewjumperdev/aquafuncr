  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCYMBK_N0dJPen0DrXHydfZimzJ2Nn8BbQ",
    authDomain: "aquafuncr-d22cc.firebaseapp.com",
    databaseURL: "https://aquafuncr-d22cc.firebaseio.com",
    projectId: "aquafuncr-d22cc",
    storageBucket: "aquafuncr-d22cc.appspot.com",
    messagingSenderId: "145995394599",
    appId: "1:145995394599:web:3c2576e8baab91561be802",
    measurementId: "G-69MQN6HC42"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// Reference Messages Collection

var messageRef = firebase.database().ref('message');

// Listen for form submit

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get Values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
    // Save Message
    saveMessage(name, email, phone, message);
     //Show Alert
    document.querySelector('.alert').style.display = 'block';
    //Hide Alert after 3 seconds
    setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
    },3000);
    
    //Clear Form
    document.getElementById('contactForm').reset();

}


// Funtion to get values

function getInputVal(id) {
    return document.getElementById(id).value;
}

//Save message to firebase

function saveMessage(name, email, phone, message) {
    var newMessageRef= messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        message: message
    });
}
