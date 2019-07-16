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
            var closeButton = '<button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
            $('.toast-header').html("Game Created" + closeButton);
            $('.toast-body').html("Title: " + title.value);
            $('.toast').toast('show');
        }
    });
}