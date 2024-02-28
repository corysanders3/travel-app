// this is where basic functionality will go 
// to then be used to update the dom with
// these functions are the ones that will be tested

function getTravelerTrips(allTrips, id) {
    if(id) {
        let myTrips = allTrips.trips.filter((trip) => {
            return trip.userID === id;
        })
        myTrips.forEach((trip) => {
            trip.date = new Date(trip.date);
        })
        myTrips.sort((a, b) => {
            return b.date - a.date;
        })
        myTrips.forEach((trip) => {
            trip.date = trip.date.toISOString().split('T')[0].replaceAll('-', '/');
        })
        return myTrips;
    } else {
        return 'This User ID does not exist.';
    }
}

function getTotalCost(myTrips, allDest, status) {
    let approvedTrips = myTrips.filter((trip) => {
        return trip.status === 'approved' || status;
    })
    let totalCost = approvedTrips.reduce((total, trip) => {
        allDest.destinations.forEach((dest) => {
            if(trip.destinationID === dest.id) {
                total += (dest.estimatedFlightCostPerPerson * trip.travelers);
                total += (dest.estimatedLodgingCostPerDay * trip.duration);
            }
        })
        return total;
    }, 0);
    return (totalCost * 1.1)
}

export { getTravelerTrips, getTotalCost };