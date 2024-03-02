// this is where domUpdates will go
import { fetchTraveler, fetchTrips, fetchDestinations } from './fetchRequests.js';

const loginButton = document.querySelector('#loginButton');
const loginSection = document.querySelector('.login-container');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const loginError = document.querySelector('.login-error');
const pleaseLogin = document.querySelector('.please-login');
const dashboard = document.querySelector('.dashboard');
const welcomeMessage = document.querySelector('.welcome')
const pastTripsData = document.querySelector('.past-trips-data')
const pendingTripsData = document.querySelector('.pending-trips-data')

let currentID, user, trips, destinations;

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
        dashboard.classList.remove('hidden');
        currentID = userID;
        // run function here to get user data
    }
}

function fetchAllData(id) {
    Promise.all([fetchTraveler(id), fetchTrips(), fetchDestinations()]).then(
        ([traveler, allTrips, allDestinations]) => {
            user = traveler;
            trips = allTrips;
            destinations = allDestinations;
            console.log('here', user)
        }
    )
}

fetchAllData(23);



export { loginButton, loginSection, username, password, loginError, 
pleaseLogin, dashboard, welcomeMessage, currentID, user, trips, destinations, 
pastTripsData, pendingTripsData };
export { checkLogin, getUserID };