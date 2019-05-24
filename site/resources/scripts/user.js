firebase.auth().onAuthStateChanged((user) => {
    var username = document.getElementById("username");
    var accessButton = document.getElementById("access");
    if (user) {
        console.log("Logged in");
        accessButton.setAttribute("onclick","signOut()");
        accessButton.text = "Logout";
        username.text = firebase.auth().currentUser.displayName;
    } else {
        // User not logged in or has just logged out.
        console.log("Not Logged in");
        accessButton.setAttribute("onclick","signIn()");
        accessButton.text = "Login";
    }
});

function signIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    var userName;

    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
    });
}

function signOut() {
    firebase.auth().signOut();
    window.location.href = "/";
}
