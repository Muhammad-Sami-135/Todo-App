var firebaseConfig = {
    apiKey: "AIzaSyCVkNHoFgAY9aqmZ7jTVML6zQyRgfiZsro",
    authDomain: "todo-app-d2e56.firebaseapp.com",
    databaseURL: "https://todo-app-d2e56-default-rtdb.firebaseio.com",
    projectId: "todo-app-d2e56",
    storageBucket: "todo-app-d2e56.firebasestorage.app",
    messagingSenderId: "72935536168",
    appId: "1:72935536168:web:15f90118edab84fd9a671d"
};

var app = firebase.initializeApp(firebaseConfig);

firebase.database().ref("todos").on("child_added", (data) => {

    var ulElement = document.getElementById("list");

    // create li Element in ul Element

    var liElement = document.createElement("li");

    var liText = document.createTextNode(data.val().value);

    ulElement.appendChild(liElement);

    liElement.appendChild(liText);

    liElement.style.fontSize = "25px";

    liElement.style.textTransform = "capitalize";

    liElement.style.fontFamily = "arial";

    liElement.style.fontWeight = "bold";

    liElement.style.borderBottom = "2px solid white"

    liElement.style.marginBottom = "10px"

    // create delete button in li Element

    var dltButton = document.createElement("button");

    var dltButtonText = document.createTextNode("Delete");

    dltButton.appendChild(dltButtonText);

    liElement.appendChild(dltButton);

    dltButton.setAttribute("onclick", "dltsingleItem(this)");

    dltButton.setAttribute("id", data.val().key)

    dltButton.style.backgroundColor = "rgba(15, 42, 116, 0.479)";

    dltButton.style.color = "white";

    dltButton.style.borderRadius = "8px";

    dltButton.style.border = "2px solid black"

    dltButton.style.width = "100px"

    dltButton.style.margin = "5px 5px";

    dltButton.style.padding = "8px 10px";

    dltButton.style.cursor = "pointer";

    // create Edit button in li Element

    var editButton = document.createElement("button");

    var editButtonText = document.createTextNode("Edit");

    editButton.appendChild(editButtonText);

    liElement.appendChild(editButton);

    editButton.setAttribute("onclick", "editbtn(this)");

    editButton.setAttribute("id", data.val().key)

    editButton.style.backgroundColor = "rgba(15, 42, 116, 0.479)";

    editButton.style.color = "white";

    editButton.style.borderRadius = "8px";

    editButton.style.border = "2px solid black"

    editButton.style.width = "100px"

    editButton.style.margin = "5px 5px";

    editButton.style.padding = "8px 10px";

    editButton.style.cursor = "pointer";

})   

function addItem() {  

    var userInput = document.getElementById("userinput")

    var key = firebase.database().ref("todos").push().key;

    var obj = {
        value: userInput.value,
        key: key,
    }

    firebase.database().ref("todos").child(key).set(obj);

    userInput.value = ""
}

function dltAllItem() {

    var ulElement = document.getElementById("list");

    ulElement.innerHTML = "";

    firebase.database().ref("todos").remove()
}

function dltsingleItem(e) {

    firebase.database().ref("todos").child(e.id).remove()

    e.parentNode.remove();
}

function editbtn(e) {

    var userInput = prompt("Enter Your Update Value");

    var edittodo = {
        value: userInput,
        key: e.id,
    }

    firebase.database().ref("todos").child(e.id).set(edittodo)

    e.parentNode.firstChild.nodeValue = userInput;
}