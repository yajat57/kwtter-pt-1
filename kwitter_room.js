
const firebaseConfig = {
      apiKey: "AIzaSyDLPe1ax8lmaNAByCQjPxi06qGg3EaR8ho",
      authDomain: "kwitter-95811.firebaseapp.com",
      projectId: "kwitter-95811",
      storageBucket: "kwitter-95811.appspot.com",
      messagingSenderId: "452749002729",
      appId: "1:452749002729:web:d92a33e2ba626a7701ad78",
      measurementId: "G-NGQRLYK734"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
