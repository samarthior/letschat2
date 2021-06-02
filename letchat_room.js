// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDyYzQM66GgxYb7bC3kJpgot4Nozb-MZO0",
    authDomain: "kwitterproject-a47cd.firebaseapp.com",
    databaseURL: "https://kwitterproject-a47cd-default-rtdb.firebaseio.com",
    projectId: "kwitterproject-a47cd",
    storageBucket: "kwitterproject-a47cd.appspot.com",
    messagingSenderId: "249428634838",
    appId: "1:249428634838:web:2e4765320ef46986e1ed77",
    measurementId: "G-JGQ20CYLMV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function adduser(){
      username=document.getElementById("username").value
      firebase.database().ref("/").child(username).update({
          purpose : "add user"
      });
  }