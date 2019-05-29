// Get a reference to the database service
function add() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var title = document.getElementById("title");
            var genre = document.getElementById("genre");
            var time = document.getElementById("time");
            var completed = document.getElementsByName('completed');
            var completedValue = "";
            for (var i = 0, length = completed.length; i < length; i++) {
                if (completed[i].checked) {
                    // do whatever you want with the checked radio
                    completedValue = completed[i].value;
                    break;
                }
            }

            var usersgames = firebase.database().ref(firebase.auth().currentUser.uid + "/");

            usersgames.push({
                title: title.value,
                time: time.value,
                completed: completedValue,
                genre: genre.value
            });

            // $('.toast-header').html("Game Created");
            // $('.toast-body').html("Title:" + title.value);
            $('.toast').toast({delay:1000, animation:false});
        }
    });
}