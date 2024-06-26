# Travel Tracking App

A site for tracking your past and pending travels. When logged in, the user will also be able to make a new trip request.

## Background/About

Being able to see past and pending trips, with the estimated cost for each trip is key to staying organized. Using data fetched from an API, this application simulates a travel app, where the user that logs in can view past/pending trips and make a new trip request.

## APIs Used

- [Travel Tracker API](https://github.com/corysanders3/travel-tracker-api)

## Primary Technologies Used

<div align="center">
    <img src="https://img.shields.io/badge/JavaScript-E8D44D?style=for-the-badge&logo=javascript&logoColor=fff" alt="javascript badge">
    <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=for-the-badge" alt="html badge">
    <img src="https://img.shields.io/badge/SCSS-C56494?style=for-the-badge&logo=sass&logoColor=fff" alt="scss badge">
    <img src="https://img.shields.io/badge/Webpack-8ACEF1?style=for-the-badge&logo=webpack&logoColor=fff" alt="webpack badge">
    <img src="https://img.shields.io/badge/Mocha-886446?style=for-the-badge&logo=mocha&logoColor=fff" alt="mocha badge">
    <img src="https://img.shields.io/badge/Chai-980B05?style=for-the-badge&logo=chai&logoColor=fff" alt="chai badge">
</div>

## Next Steps

Additional enhancements could include:
- Add an upcoming trips section, when trips are 'approved' and have a future date
- Allow users to filter based on different fields

## Preview of App

![Travel App](https://github.com/corysanders3/travel-app/assets/41808895/f0e1f2a2-e1da-41cf-914d-bd43435da523)

## Set Up

1. Fork this repository
2. Clone your own local version of the repository
3. CD into that directory and run `npm install` to install project dependencies
4. Run `npm start` to start the server
5. Navigate to the address provided within the terminal ex: http://localhost:8080/
6. Once at the login page, you can login with the following credentials:
    - Username: traveler10 (the number at the end can be any number between 1-50 to get a different user)
    - Password: travel

## Test Driven Development

This application uses a combination of Mocha Testing Framework and Chai Assertion Library
- Run `npm test` from the associated root directory

## Deployed Page

[Travel Tracking](https://travel-app-six-livid.vercel.app/)
