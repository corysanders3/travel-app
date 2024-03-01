// this is where domUpdates will go
import { fetchTraveler, fetchTrips, fetchDestinations } from './fetchRequests.js';

const loginButton = document.querySelector('#loginButton');
const loginSection = document.querySelector('.login-container');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const loginError = document.querySelector('.login-error');
const pleaseLogin = document.querySelector('.please-login');

let currentUser;

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    checkLogin();
})

function checkLogin() {
    if(password.value.trim().length < 1 || username.value.trim().length < 1) {
        loginError.innerText = 'Make sure to fill in both Username and Password.'
    } else if(password.value !== 'travel') {
        loginError.innerText = 'Incorrect Password. Please try again.'
    } else if(!username.value.includes('traveler')) {
        loginError.innerText = 'Incorrect Username. Please try again.'
    } else {
        getUserID();
    }
}

function getUserID() {
    let userID = parseInt(username.value.split('').slice(8).join(''));

    if(!userID || userID > 50) {
        loginError.innerText = 'Incorrect Username or ID is missing. Please try again.'
    } else {
        loginSection.classList.add('hidden');
        pleaseLogin.classList.add('hidden');
    }
}





export { loginButton, loginSection, username, password, loginError, 
pleaseLogin };