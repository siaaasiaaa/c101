var firebaseConfig = {
  apiKey: "AIzaSyDC2NLuFxiDn4h4NzKb45li2S_JT9d3c3E",
  authDomain: "let-s-chat-app-3b93c.firebaseapp.com",
  databaseURL: "https://let-s-chat-app-3b93c-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-app-3b93c",
  storageBucket: "let-s-chat-app-3b93c.appspot.com",
  messagingSenderId: "24867079015",
  appId: "1:24867079015:web:7566b14237567d229865c2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user1_name");
document.getElementById("user1_name").innerHTML = "Welcome" + user1_name +"!";


function addroom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
     purpose :" adding room name" 
  }
  );
  localStorage.setItem("room_name",room_name);
  window.location = "chat_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room names -"+ Room_names);
 row = "<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("Output").innerHTML += row;
 //End code
 });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name)  ;
window.location = "chat_page.html";
}