// this is where domUpdates will go
import { fetchTraveler, fetchTrips, fetchDestinations } from './fetchRequests.js';
import { getTravelerTrips, getTotalCost, showMyTripDestinations, getSingleTripCost } from './travelerInfo.js';


const loginButton = document.querySelector('#loginButton');
const loginSection = document.querySelector('.login-form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const loginError = document.querySelector('.login-error');
const pleaseLogin = document.querySelector('.please-login');
const dashboard = document.querySelector('.dashboard');
const welcomeMessage = document.querySelector('.welcome');
const pastTripsData = document.querySelector('.past-trips-data');
const pendingTripsData = document.querySelector('.pending-trips-data');
const newTripButton = document.querySelector('#newTripButton');
const totalSpent = document.querySelector('.total-spent')

let currentID, user, trips, destinations, myTrips, totalForYear;

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    checkLogin();
});

newTripButton.addEventListener('click', (e) => {

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
        newTripButton.classList.remove('hidden');
        currentID = userID;
        fetchAllData(currentID);
    }
}

function fetchAllData(id) {
    Promise.all([fetchTraveler(id), fetchTrips(), fetchDestinations()]).then(
        ([traveler, allTrips, allDestinations]) => {
            user = traveler;
            trips = allTrips;
            destinations = allDestinations;
            myTrips = getTravelerTrips(trips, id);
            showMyTripDestinations(myTrips, destinations);
            getSingleTripCost(myTrips, destinations);
            totalForYear = getTotalCost(myTrips, destinations, 'approved', '2022');
            showTotalSpent(totalForYear, '2022');
            showPastTrips(myTrips)
        }
    )
}

fetchAllData(38);

function showTotalSpent(total, year) {
    totalSpent.innerText = `Total Spent This Year (${year}): $${total}`
}

function showPastTrips(myTrips) {
    myTrips.forEach((trip) => {
        if(trip.status === 'approved') {
            pastTripsData.insertAdjacentHTML('beforeend',
            `<p class="trips-area"><b>Destination:</b> ${trip.destination}</p>
            <p><b>Date of first night:</b> ${trip.date}</p>
            <p><b>Number of nights:</b> ${trip.duration} nights</p>
            <p><b>Number of travelers:</b> ${trip.travelers} travelers</p>
            <p><b>Total Cost:</b> $${trip.total}</p>
            `)
        } else if(trip.status === 'pending') {
            pendingTripsData.insertAdjacentHTML('beforeend',
            `<p class="trips-area"><b>Date of first night:</b> ${trip.date}</p>
            <p><b>Destination:</b> ${trip.destination}</p>
            <p><b>Number of nights:</b> ${trip.duration} nights</p>
            <p><b>Number of travelers:</b> ${trip.travelers} travelers</p>
            <p><b>Total Cost:</b> $${trip.total}</p>
            `)
        }
    })
}



export { loginButton, loginSection, username, password, loginError, 
pleaseLogin, dashboard, welcomeMessage, currentID, user, trips, destinations, 
myTrips, totalForYear, pastTripsData, pendingTripsData, newTripButton };
export { checkLogin, getUserID, fetchAllData, showPastTrips, showTotalSpent };