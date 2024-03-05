// this is where fetch requests will go

import { dateForm, destinationForm, durationForm, postResponse, travelersForm, welcomeMessage } from "./domUpdates";

function fetchTraveler(id, userData) {
    return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
        .then(response => {
            if(!response.ok) {
                throw new Error('There was an error getting your account information. Please try again later.')
            }
            return response.json();
        })
        .then(data => userData = data)
        .catch(err => {
            welcomeMessage.innerText = err.message;
            welcomeMessage.style.color = 'red';
        })
}

function fetchTrips(tripsData) {
    return fetch('http://localhost:3001/api/v1/trips')
        .then(response => {
            if(!response.ok) {
                throw new Error('There was an error getting your account information. Please try again later.')
            }
            return response.json();
        })
        .then(data => tripsData = data)
        .catch(err => {
            welcomeMessage.innerText = err.message;
            welcomeMessage.style.color = 'red';
        })
}

function fetchDestinations(destinationsData) {
    return fetch('http://localhost:3001/api/v1/destinations')
        .then(response => {
            if(!response.ok) {
                throw new Error('There was an error getting your account information. Please try again later.')
            }
            return response.json();
        })
        .then(data => destinationsData = data)
        .catch(err => {
            welcomeMessage.innerText = err.message;
            welcomeMessage.style.color = 'red';
        })
}

function postNewTrip(allTrips, myID, postData) {
    return fetch('http://localhost:3001/api/v1/trips', {
        method: 'POST',
        body: JSON.stringify({
            id: (allTrips.trips.length + 1),
            userID: parseInt(myID),
            destinationID: parseInt(destinationForm.value),
            travelers: parseInt(travelersForm.value),
            date: dateForm.value.replaceAll('-', '/'),
            duration: parseInt(durationForm.value),
            status: 'pending',
            suggestedActivities: []
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('There was an issue with submitting this request. Please try again later.')
        }
        return response.json();
    })
    .then(data => postResponse.innerText = `Your trip request is under review. 
    
    For your reference, the id number is ${data.newTrip.id}. It is safe to leave this page.`)
    .catch(err => console.log(err))
}

export { fetchTraveler, fetchTrips, fetchDestinations, postNewTrip };