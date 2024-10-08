function authStateListener() {
  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      location.href = "index.html";
    }
  });
}

window.addEventListener("load", function () {
  authStateListener();

  document.getElementById("sign-out").addEventListener("click", function () {
    signOut();
  });

  var modal = document.getElementById("myModal");

  var btn = document.getElementById("myBtn");

  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

function signOut() {
  firebase.auth().signOut().then().catch();
}
