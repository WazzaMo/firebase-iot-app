let btn_login;
let btn_logout;
let messagebox;
let authProvider;

const
  ID_LOGIN="login",
  ID_LOGOUT="logout",
  ID_USERMESSAGE="user-message";

function getElements() {
  btn_login = document.getElementById(ID_LOGIN);
  btn_logout = document.getElementById(ID_LOGOUT);
  messagebox = document.getElementById(ID_USERMESSAGE);
}

function setupButtonEvents() {
  btn_login.onclick = loginWithGoogle;
  btn_logout.onclick = logout;
}

function hide(element) {
  element.setAttribute('hidden', true);
}

function show(element) {
  element.removeAttribute('hidden');
}

function showMessage(message_text) {
  show(messagebox);
  messagebox.innerText = message_text;
}

function setupAuthProvider() {
  authProvider = new firebase.auth.OAuthProvider('google.com');
  authProvider.addScope('profile');
  authProvider.addScope('email');
}

function loginWithGoogle() {
  // Using a redirect.
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you the OAuth Access Token for that provider.
      var token = result.credential.accessToken;
    }
  });

  // Start a sign in process for an unauthenticated user.
  firebase.auth().signInWithRedirect(authProvider);
  hide(btn_login);
  showMessage("Processing login...");
}

function logout() {
  firebase.auth().signOut();
}

function userLoggedIn(user) {
  if (user) {
    showMessage(`Welcome ${user.displayName}`)
    hide(btn_login);
    show(btn_logout);
  } else {
    showMessage('User logged out');
    show(btn_login);
    hide(btn_logout);
  }
}

function userAuthError(err) {
  showMessage(`Error ${err} at login`);
}

function setupAuthenticationEvents() {
  firebase.auth().onAuthStateChanged(userLoggedIn, userAuthError);
}

function setupAllEvents() {
  getElements();
  setupAuthProvider();
  setupButtonEvents();
  setupAuthenticationEvents();
}
