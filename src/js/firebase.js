// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAKxWacqha5AI2uXFjcLX9Oojf7c_Am5bA',
  authDomain: 'bookshelf-project-go-it.firebaseapp.com',
  projectId: 'bookshelf-project-go-it',
  storageBucket: 'bookshelf-project-go-it.appspot.com',
  messagingSenderId: '521951044909',
  appId: '1:521951044909:web:63181d36446d6b92e3dfa4',
  measurementId: 'G-FGGHDR3VMQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const signInForm = document.querySelector('#sign-in-form');
const signedInContent = document.querySelector('#signed-in-content'); // treść która będzie widoczna bo zalogowaniu użytkownika

const showSignedInContent = () => {
  signInForm.style.display = 'none';
  signedInContent.style.display = 'block';
};

const showSignInForm = () => {
  signInForm.style.display = 'block';
  signedInContent.style.display = 'none';
};

const handleAuthChanged = user => {
  if (user) {
    showSignedInContent();
  } else {
    showSignInForm();
  }
};

// logika odpowiedzialna za logowania i rejestracje //

const showError = error => {
  const errorBox = document.querySelector('error-box');

  errorBox.innerHTML = error;
  errorBox.style.display = 'block';

  setTimeout(() => {
    errorBox.style.display = 'none';
  }, 5000);
};

const getUserEmailAndPassword = () => ({
  email: document.querySelector('#email').value,
  password: document.querySelector('#password').value,
});

const createUserAccount = () => {
  const { email, password } = getUserEmailAndPassword();

  firebase.auth().createUserWithEmailAndPassword(email, password);
};

const handleErrorSignIn = error => {
  switch (error.code) {
    case 'auth/user-not-found':
      createUserAccount();
      break;
    case 'auth/wrong-password':
      showError('Podałeś nieprawidłowe hasło');
      break;
    default:
      showError('Coś poszło nie tak');
  }
};

const handleSubmitSignInForm = event => {
  const { email, password } = getUserEmailAndPassword();

  firebase.auth().signInWithEmailAndPassword(email, password).catch(handleErrorSignIn);
  event.preventDefault();
};

firebase.auth().onAuthStateChanged(handleAuthChanged); // moduł autoryzacji wraz z metodami autoryzacji // onAuthStateChanged to nasłuchiwanie czy ktoś się zalogował czy też nie
signInForm.addEventListener('submit', handleSubmitSignInForm);
