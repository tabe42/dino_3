const loginButton = document.querySelector("#loginButton");
const app = firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.GoogleAuthProvider();

const handleLogin = async () => {
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    const user = result.user;
    console.log(user);
    return user;
  } catch (error) {
    console.log("Error in sign up: " + error);
    alert(
      "There seems to be error in logging in. Please try again after some time"
    );
    window.location.reload();
    return null;
  }
};

const handleDbSubmit = async () => {
  const user = firebase.auth().currentUser || (await handleLogin());
  const displayName = user.displayName;
  const email = user.email;
  const photoUrl = user.photoURL;
  console.log(displayName, email, photoUrl);
};

loginButton.addEventListener("click", handleDbSubmit);
