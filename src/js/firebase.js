import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

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
const auth = getAuth();

const signInForm = document.querySelector('#sign-in-form');
const signedInContent = document.querySelector('#signed-in-content');
const signUpForm = document.querySelector('#sign-up-form');
const signedUpContent = document.querySelector('#signed-up-content');
const showSignUpLinkModalTop = document.querySelector('#show-sign-up-modal-top');
const showSignInLinkModalTop = document.querySelector('#show-sign-in-modal-top');
const showSignUpLinkModalBottom = document.querySelector('#show-sign-up-modal-bottom');
const showSignInLinkModalBottom = document.querySelector('#show-sign-in-modal-bottom');

// Show sign-up form by default
signUpForm.style.display = 'block';
signInForm.style.display = 'none';

// Event listeners for showing the forms
showSignUpLinkModalTop.addEventListener('click', e => {
  e.preventDefault();
  showSignUpForm();
});

showSignInLinkModalTop.addEventListener('click', e => {
  e.preventDefault();
  showSignInForm();
});

showSignUpLinkModalBottom.addEventListener('click', e => {
  e.preventDefault();
  showSignUpForm();
});

showSignInLinkModalBottom.addEventListener('click', e => {
  e.preventDefault();
  showSignInForm();
});

const showSignedInContent = () => {
  signInForm.style.display = 'none';
  signedInContent.style.display = 'block';
};

const showSignInForm = () => {
  signInForm.style.display = 'block';
  signedInContent.style.display = 'none';
  signUpForm.style.display = 'none';
};

const showSignedUpContent = () => {
  signUpForm.style.display = 'none';
  signedUpContent.style.display = 'block';
};

const showSignUpForm = () => {
  signUpForm.style.display = 'block';
  signedUpContent.style.display = 'none';
  signInForm.style.display = 'none';
};

signInForm.addEventListener('submit', e => {
  e.preventDefault(); // Prevent form submission
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // User signed in successfully
      const user = userCredential.user;
      // Handle the signed-in user, update UI, etc.
      showSignedInContent();
    })
    .catch(signInError => {
      const signInErrorCode = signInError.code;
      const signInErrorMessage = signInError.message;

      let form = document.querySelector('#sign-in-form');
      if (signInErrorCode === 'auth/invalid-credential') {
        form.innerHTML = `<h1>Error: Invalid password</h1>`;
      } else if (signInErrorCode === 'auth/user-not-found') {
        form.innerHTML = `<h1>Error: User not registered</h1>`;
      } else {
        form.innerHTML = `<h1>Error: ${signInErrorCode} - ${signInErrorMessage}</h1>`;
      }
      console.error('Sign-in error:', signInErrorCode, signInErrorMessage);
      // Display error message or handle as needed for sign-in
    });
});

signUpForm.addEventListener('submit', e => {
  e.preventDefault(); // Prevent form submission
  const email = document.querySelector('#email-signup').value;
  const password = document.querySelector('#password-signup').value;

  // If user doesn't exist, try creating a new user
  createUserWithEmailAndPassword(auth, email, password)
    .then(newAccountCredential => {
      // New account created successfully
      const newUser = newAccountCredential.user;
      // Handle the new user, maybe update UI
      showSignedUpContent();
      console.log('Użytkownik został zarejestrowany');
    })
    .catch(signUpError => {
      // Handle sign-up errors separately
      const signUpErrorCode = signUpError.code;
      const signUpErrorMessage = signUpError.message;

      let form = document.querySelector('#sign-up-form');

      if (signUpErrorCode === 'auth/email-already-in-use') {
        form.innerHTML = `<h1>Użytkownik jest już zarejestrowany. Zaloguj się!</h1>`;
      } else if (signUpErrorCode === 'auth/weak-password') {
        form.innerHTML = `<h1>Hasło musi zawierać co najmniej 6 znaków!</h1>`;
      } else {
        form.innerHTML = `<h1>Error: ${signUpErrorCode} - ${signUpErrorMessage}</h1>`;
      }

      console.error('Sign-up error:', signUpErrorCode, signUpErrorMessage);
      // Display error message or handle as needed for sign-up
    });
});
