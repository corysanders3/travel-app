// this is where basic functionality will go 
// to then be used to update the dom with
// these functions are the ones that will be tested

function getTravelerTrips(allTrips, id) {
    if(id) {
        let myTrips = allTrips.trips.filter((trip) => {
            return trip.userID === id;
        })
        myTrips.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        })
        return myTrips;
    } else {
        return 'This User ID does not exist.';
    }
}

function getTotalCost(myTrips, allDest, status, year) {
    let approvedTrips = myTrips.filter((trip) => {
        return trip.status === status;
    });
    if(year) {
        approvedTrips = approvedTrips.filter((trip) => {
            return trip.date.includes(year)
        })
    }

    let totalCost = approvedTrips.reduce((total, trip) => {
        allDest.destinations.forEach((dest) => {
            if(trip.destinationID === dest.id) {
                total += (dest.estimatedFlightCostPerPerson * trip.travelers);
                total += (dest.estimatedLodgingCostPerDay * trip.duration);
            }
        })
        return total;
    }, 0);
    return Math.round((totalCost * 1.1))
}

export { getTravelerTrips, getTotalCost };