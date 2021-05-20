// Code your solution in this file!
const returnFirstTwoDrivers = function(arrayOfDrivers) {
    const firstTwoDrivers = [];
    firstTwoDrivers.unshift(arrayOfDrivers[0], arrayOfDrivers[1]);
    
    return firstTwoDrivers;
}

const returnLastTwoDrivers = function(drivers) {
   
    const lastTwoDriversArray = [];
    lastTwoDriversArray.unshift(drivers[drivers.length - 1]); 
    lastTwoDriversArray.unshift(drivers[drivers.length - 2]);

    return lastTwoDriversArray;
}

const selectingDrivers = [];
selectingDrivers.unshift(returnFirstTwoDrivers);
selectingDrivers.push(returnLastTwoDrivers);

function createFareMultiplier(fare) {
    function multiplier(num) {return num * fare;};

    return multiplier;
}

function fareDoubler(fare) {

    return fare * 2;
}

function fareTripler(fare) {

    return fare * 3;
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    
   //return the first two drivers
return returnFirstTwoDrivers(drivers);
   
}