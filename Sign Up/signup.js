var firebaseConfig = {
  apiKey: "AIzaSyCVkNHoFgAY9aqmZ7jTVML6zQyRgfiZsro",
  authDomain: "todo-app-d2e56.firebaseapp.com",
  projectId: "todo-app-d2e56",
  storageBucket: "todo-app-d2e56.firebasestorage.app",
  messagingSenderId: "72935536168",
  appId: "1:72935536168:web:15f90118edab84fd9a671d"
};

var app = firebase.initializeApp(firebaseConfig);

function signUp() {
  var email = document.getElementById("email1")
  var password = document.getElementById("password1")

  console.log(email.value, password.value);

  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log(user);
      window.location.href = "file:///D:/Final%20Hackaton%20in%20Jawan%20Pakistan/To%20do%20App/Home%20Page/home.html"

    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
    });
}