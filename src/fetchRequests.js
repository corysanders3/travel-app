// this is where fetch requests will go

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

export { fetchTraveler, fetchTrips, fetchDestinations };