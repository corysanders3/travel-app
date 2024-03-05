import { fetchTraveler, fetchTrips, fetchDestinations, postNewTrip } from './fetchRequests.js';

import { getTravelerTrips, getTotalCost, showMyTripDestinations, 
getSingleTripCost } from './travelerInfo.js';


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
const totalSpent = document.querySelector('.total-spent');
const destinationSelect = document.querySelector('#destination');
const submitRequest = document.querySelector('#submitRequest');
const closePopup = document.querySelector('#closePopup');
const dateForm = document.querySelector('#date');
const durationForm = document.querySelector('#duration');
const travelersForm = document.querySelector('#travelers');
const destinationForm = document.querySelector('#destination');
const newTripForm = document.querySelector('.new-trip-form');
const blurBackground = document.querySelector('.blur-background');
const newTripError = document.querySelector('.new-trip-error');
const seeEstimate = document.querySelector('#seeEstimate');
const showEstimate = document.querySelector('.show-estimate');
const successfulPost = document.querySelector('.successful-post');
const allDoneButton = document.querySelector('#allDoneButton');
const postResponse = document.querySelector('.post-response');
const planeIcon = document.querySelector('.plane-icon');
const newTripHeader = document.querySelector('.new-trip-header');
const destinationImage = document.querySelector('.destination-image');

let user, trips, destinations, myTrips, totalForYear;

window.addEventListener('load', () => {
    if(sessionStorage.getItem('user')) {
        getPageReload();
        fetchAllData(parseInt(sessionStorage.getItem('user')));
    }
});

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    checkLogin();
});

newTripButton.addEventListener('click', () => {
    newTripForm.classList.remove('hidden');
    blurBackground.classList.remove('hidden');
    showDestinationOptions(destinations);
});

seeEstimate.addEventListener('click', (e) => {
    estimateFormCheck(e);
});

closePopup.addEventListener('click', (e) => {
    closeForm(e);
});

submitRequest.addEventListener('click', (e) => {
    e.preventDefault();
    postNewTrip(trips, parseInt(sessionStorage.getItem('user')));
    showConfirmation(destinations, destinationForm);
});

allDoneButton.addEventListener('click', () => {
    allDoneWithForm();
});

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
        planeIcon.style.animation = 'planeMovement 2s linear forwards'
        loginSection.classList.add('hidden');
        dashboard.classList.remove('hidden');
        newTripButton.classList.remove('hidden');
        sessionStorage.setItem('user', userID);
        fetchAllData(parseInt(sessionStorage.getItem('user')));
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
            showPastTrips(myTrips);
            welcomeUser(user);
        }
    );
}

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
            `);
        } else if(trip.status === 'pending') {
            pendingTripsData.insertAdjacentHTML('beforeend',
            `<p class="trips-area"><b>Destination:</b> ${trip.destination}</p>
            <p><b>Date of first night:</b> ${trip.date}</p>
            <p><b>Number of nights:</b> ${trip.duration} nights</p>
            <p><b>Number of travelers:</b> ${trip.travelers} travelers</p>
            <p><b>Total Cost:</b> $${trip.total}</p>
            `);
        }
    });
}

function showDestinationOptions(allDestinations) {
    allDestinations.destinations.sort((a, b) => {
        return a.destination.localeCompare(b.destination);
    }).forEach((dest) => {
        let option = document.createElement('option');
        option.value = dest.id;
        option.text = dest.destination;
        destinationSelect.add(option);
    });
}

function welcomeUser(userInfo) {
    welcomeMessage.innerText = `Welcome ${userInfo.name}`;
    if(userInfo.travelerType === 'relaxer') {
        pleaseLogin.innerText = `User ID: ${userInfo.id}
        Type: ${userInfo.travelerType.charAt(0).toUpperCase() 
        + userInfo.travelerType.slice(1)} 😴`
    } else if(userInfo.travelerType === 'thrill-seeker'){
        pleaseLogin.innerText = `User ID: ${userInfo.id}
        Type: ${userInfo.travelerType.charAt(0).toUpperCase() 
        + userInfo.travelerType.slice(1)} 🎢`
    } else if(userInfo.travelerType === 'shopper'){
        pleaseLogin.innerText = `User ID: ${userInfo.id}
        Type: ${userInfo.travelerType.charAt(0).toUpperCase() 
        + userInfo.travelerType.slice(1)} 🛍`
    } else if(userInfo.travelerType === 'photographer'){
        pleaseLogin.innerText = `User ID: ${userInfo.id}
        Type: ${userInfo.travelerType.charAt(0).toUpperCase() 
        + userInfo.travelerType.slice(1)} 📸`
    } else if(userInfo.travelerType === 'foodie'){
        pleaseLogin.innerText = `User ID: ${userInfo.id}
        Type: ${userInfo.travelerType.charAt(0).toUpperCase() 
        + userInfo.travelerType.slice(1)} 🌮`
    } else {
        pleaseLogin.innerText = `User ID: ${userInfo.id}
        Type: ${userInfo.travelerType.charAt(0).toUpperCase() 
        + userInfo.travelerType.slice(1)} 🛫`
    }
}
function closeForm(e) {
    e.preventDefault();
    newTripForm.classList.add('hidden');
    blurBackground.classList.add('hidden');
    submitRequest.classList.add('hidden');
    dateForm.value = '';
    durationForm.value = '';
    travelersForm.value = '';
    destinationForm.value = '';
    newTripError.innerText = '';
    showEstimate.innerText = '';
}

function estimateFormCheck(e) {
    e.preventDefault();
    newTripError.innerText = '';
    showEstimate.innerText = '';
    submitRequest.classList.add('hidden');

    if(dateForm.value.length < 1 || parseInt(durationForm.value) === 0 || 
    parseInt(travelersForm.value) === 0 || destinationForm.value.length < 1 || 
    durationForm.value.trim().length < 1 || travelersForm.value.trim().length < 1) {
        newTripError.innerText = 'Please make sure to fill out all fields.';
    } else {
        let total = getTripCost(destinations);
        showEstimate.innerText = `Estimated Total: $${total}`;
        submitRequest.classList.remove('hidden');
    }
}

function getTripCost(allDestinations) {
    let foundDestination = allDestinations.destinations.find((dest) => {
        return dest.id === parseInt(destinationForm.value);
    })
    return Math.round((((foundDestination.estimatedLodgingCostPerDay * durationForm.value) + 
    (foundDestination.estimatedFlightCostPerPerson * travelersForm.value)) * (1.1)));
}

function showConfirmation(allDest, myDest) {
    newTripForm.classList.add('hidden');
    successfulPost.classList.remove('hidden');

    let foundDestination = allDest.destinations.find((dest) => {
        return dest.id === parseInt(myDest.value);
    })
    destinationImage.innerHTML = `<img class="dest-image" src=${foundDestination.image} alt="Picture of your next destination.">`;
}

function allDoneWithForm() {
    successfulPost.classList.add('hidden');
    blurBackground.classList.add('hidden');
    submitRequest.classList.add('hidden');
    dateForm.value = '';
    durationForm.value = '';
    travelersForm.value = '';
    destinationForm.value = '';
    postResponse.innerText = '';
    newTripHeader.innerText = 'Your Trip Request..';
    showEstimate.innerText = '';
    destinationImage.innerHTML = '';
}

function getPageReload() {
    loginSection.classList.add('hidden');
    dashboard.classList.remove('hidden');
    newTripButton.classList.remove('hidden');
    planeIcon.style.left = '80%';
    planeIcon.style.top = '0%';
    planeIcon.style.transform = 'rotate(-5deg)';
}

export { loginButton, loginSection, username, password, loginError, 
pleaseLogin, dashboard, welcomeMessage, user, trips, destinations, 
myTrips, totalForYear, pastTripsData, pendingTripsData, newTripButton, 
destinationSelect, submitRequest, closePopup, dateForm, durationForm, 
travelersForm, destinationForm, newTripForm, blurBackground, newTripError, 
seeEstimate, showEstimate,  successfulPost, allDoneButton, 
postResponse, planeIcon, newTripHeader, destinationImage };

export { checkLogin, getUserID, fetchAllData, showPastTrips, showTotalSpent, 
showDestinationOptions, closeForm, allDoneWithForm, estimateFormCheck, getTripCost, 
showConfirmation, welcomeUser, getPageReload };