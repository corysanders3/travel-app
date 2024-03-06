import './css/styles.scss';

import './images/airplane-icon.png';

import { fetchTraveler, fetchTrips, fetchDestinations, postNewTrip } from './fetchRequests.js';

import { loginButton, loginSection, username, password, loginError, 
pleaseLogin, dashboard, welcomeMessage, user, trips, destinations, 
myTrips, totalForYear, pastTripsData, pendingTripsData, newTripButton, 
destinationSelect, submitRequest, closePopup, dateForm, durationForm, 
travelersForm, destinationForm, newTripForm, blurBackground, newTripError, 
seeEstimate, showEstimate, successfulPost, allDoneButton, 
postResponse, planeIcon, newTripHeader, destinationImage, } from './domUpdates.js'

import { checkLogin, getUserID, fetchAllData, showPastTrips, showTotalSpent, 
showDestinationOptions, closeForm, allDoneWithForm, estimateFormCheck, getTripCost, 
showConfirmation, welcomeUser, getPageReload, submitFormCheck } from './domUpdates.js'

import { getTravelerTrips, getTotalCost, showMyTripDestinations, getSingleTripCost } from './travelerInfo.js'