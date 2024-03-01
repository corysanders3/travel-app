// this is where my unit tests will go
import { expect } from 'chai';
import { getTravelerTrips, getTotalCost } from '../src/travelerInfo.js'

describe('travelerTripData', function() {
    let allTrips;
    let vacation;
    this.beforeEach(() => {
        allTrips = {
            trips: [{
                id: 1,
                userID: 2,
                destinationID: 11,
                travelers: 4,
                date: '2024/01/20',
                duration: 8,
                status: 'approved',
                suggestedActivities: []
            },
            {
                id: 2,
                userID: 1,
                destinationID: 12,
                travelers: 3,
                date: '2024/01/21',
                duration: 5,
                status: 'pending',
                suggestedActivities: []
            },
            {
                id: 3,
                userID: 3,
                destinationID: 13,
                travelers: 4,
                date: '2024/01/25',
                duration: 6,
                status: 'approved',
                suggestedActivities: []
            },
            {
                id: 4,
                userID: 2,
                destinationID: 12,
                travelers: 1,
                date: '2024/01/30',
                duration: 3,
                status: 'approved',
                suggestedActivities: []
            },
            {
                id: 5,
                userID: 4,
                destinationID: 14,
                travelers: 4,
                date: '2024/04/13',
                duration: 7,
                status: 'pending',
                suggestedActivities: []
            },
            {
                id: 6,
                userID: 2,
                destinationID: 15,
                travelers: 2,
                date: '2024/03/20',
                duration: 5,
                status: 'pending',
                suggestedActivities: []
            },
            {
                id: 7,
                userID: 5,
                destinationID: 16,
                travelers: 3,
                date: '2024/01/29',
                duration: 10,
                status: 'approved',
                suggestedActivities: []
            },
            {
                id: 8,
                userID: 2,
                destinationID: 16,
                travelers: 2,
                date: '2023/11/29',
                duration: 3,
                status: 'approved',
                suggestedActivities: []
            }]
        }
        vacation = {
            destinations: [{
                id: 11,
                destination: 'London, England',
                estimatedLodgingCostPerDay: 100,
                estimatedFlightCostPerPerson: 550,
                image: '',
                alt: ''
            },
            {
                id: 12,
                destination: 'Paris, France',
                estimatedLodgingCostPerDay: 120,
                estimatedFlightCostPerPerson: 650,
                image: '',
                alt: ''
            },
            {
                id: 13,
                destination: 'Bali, Indonesia',
                estimatedLodgingCostPerDay: 40,
                estimatedFlightCostPerPerson: 800,
                image: '',
                alt: ''
            },
            {
                id: 14,
                destination: 'Buenos Aires, Argentina',
                estimatedLodgingCostPerDay: 60,
                estimatedFlightCostPerPerson: 400,
                image: '',
                alt: ''
            },
            {
                id: 15,
                destination: 'New York, New York',
                estimatedLodgingCostPerDay: 150,
                estimatedFlightCostPerPerson: 300,
                image: '',
                alt: ''
            },
            {
                id: 16,
                destination: 'Denver, Colorado',
                estimatedLodgingCostPerDay: 80,
                estimatedFlightCostPerPerson: 250,
                image: '',
                alt: ''
            }]
        }
    });
    it('should get all trips for a specific traveler', function() {
        const user2 = getTravelerTrips(allTrips, 2)
        expect(user2.length).to.equal(4)
        expect(user2).to.deep.equal([
            {
                id: 6,
                userID: 2,
                destinationID: 15,
                travelers: 2,
                date: '2024/03/20',
                duration: 5,
                status: 'pending',
                suggestedActivities: []
            },
            {
                id: 4,
                userID: 2,
                destinationID: 12,
                travelers: 1,
                date: '2024/01/30',
                duration: 3,
                status: 'approved',
                suggestedActivities: []
            },
            {
                id: 1,
                userID: 2,
                destinationID: 11,
                travelers: 4,
                date: '2024/01/20',
                duration: 8,
                status: 'approved',
                suggestedActivities: []
            },
            {
                id: 8,
                userID: 2,
                destinationID: 16,
                travelers: 2,
                date: '2023/11/29',
                duration: 3,
                status: 'approved',
                suggestedActivities: [],
            }
        ])
    });
    it('should get trips for a different traveler', function() {
        const user1 = getTravelerTrips(allTrips, 1)
        expect(user1.length).to.equal(1)
        expect(user1).to.deep.equal([
            {
                id: 2,
                userID: 1,
                destinationID: 12,
                travelers: 3,
                date: '2024/01/21',
                duration: 5,
                status: 'pending',
                suggestedActivities: []
            }
        ])
    });
    it('should return a string if user id does not exist', function() {
        const noID = getTravelerTrips(allTrips)
        expect(noID).to.equal('This User ID does not exist.')
    });
    it('should calculate total cost of approved trips', function() {
        const user2Trips = getTravelerTrips(allTrips, 2)
        console.log('here', user2Trips)
        const total = getTotalCost(user2Trips, vacation)
        expect(total).to.equal(5225)
    });
    it('should calculate total cost for a different user', function() {
        const user1Trips = getTravelerTrips(allTrips, 1)
        const total = getTotalCost(user1Trips, vacation)
        expect(total).to.equal(0)
    });
    it('should take in a status to find cost for pending', function() {
        const user1Trips = getTravelerTrips(allTrips, 1)
        const total = getTotalCost(user1Trips, vacation, 'pending')
        expect(total).to.equal(2805)
    })
});