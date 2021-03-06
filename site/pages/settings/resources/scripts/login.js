function signIn() {
  var provider = new firebase.auth.GoogleAuthProvider();
  var userName;

  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User logged in already or has just logged in.
      userName = firebase.auth().currentUser.displayName;
      console.log(userName);
      window.location.href = "/";
    } else {
      // User not logged in or has just logged out.
    }
  });

  return false;
}
