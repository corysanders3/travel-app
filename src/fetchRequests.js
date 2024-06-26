import { dateForm, destinationForm, durationForm, postResponse, travelersForm, 
welcomeMessage, newTripHeader, fetchAllData, pendingTripsData } from "./domUpdates";

function fetchTraveler(id, userData) {
    return fetch(`https://travel-tracker-api-chi.vercel.app/api/v1/travelers/${id}`)
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
        });
}

function fetchTrips(tripsData) {
    return fetch('https://travel-tracker-api-chi.vercel.app/api/v1/trips')
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
        });
}

function fetchDestinations(destinationsData) {
    return fetch('https://travel-tracker-api-chi.vercel.app/api/v1/destinations')
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
        });
}

function postNewTrip(allTrips, myID) {
    return fetch('https://travel-tracker-api-chi.vercel.app/api/v1/trips', {
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
    .then(data => {
        pendingTripsData.innerHTML = '';
        fetchAllData(parseInt(sessionStorage.getItem('user')));

        newTripHeader.innerText = `Your Trip Request Has Been Submitted!`
        postResponse.innerText = `Your trip request is under review. 
    
        For your reference, the id number is ${data.newTrip.id}. It is safe to leave this page.`
    })
    .catch(err => newTripHeader.innerText = `There was an issue with this request. Please try again later.`);
}

export { fetchTraveler, fetchTrips, fetchDestinations, postNewTrip };