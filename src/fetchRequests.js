// this is where fetch requests will go

function fetchTraveler() {
    fetch('http://localhost:3001/api/v1/travelers/23')
        .then(response => response.json())
        .then(data => console.log('data:', data))
        .catch(err => console.log('error:', err))
}

function fetchTrips() {
    fetch('http://localhost:3001/api/v1/trips')
        .then(response => response.json())
        .then(data => console.log('trips:', data))
        .catch(err => console.log('error:', err))
}

function fetchDestinations() {
    fetch('http://localhost:3001/api/v1/destinations')
        .then(response => response.json())
        .then(data => console.log('destinations:', data))
        .catch(err => console.log('error:', err))
}

fetchTraveler();
fetchTrips();
fetchDestinations();

export { fetchTraveler, fetchTrips, fetchDestinations };