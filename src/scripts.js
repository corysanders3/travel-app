// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import { fetchTraveler, fetchTrips, fetchDestinations } from './fetchRequests.js';
import { loginButton, loginSection, username, password, loginError, 
pleaseLogin, dashboard, welcomeMessage, currentID, user, trips, destinations, 
myTrips, totalForYear, pastTripsData, pendingTripsData, newTripButton } from './domUpdates.js'
import { checkLogin, getUserID, fetchAllData, showPastTrips, showTotalSpent } from './domUpdates.js'
import { getTravelerTrips, getTotalCost } from './travelerInfo.js'