
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(array) {
  return [...array.slice(0, 2)]
  };

const returnLastTwoDrivers = function(array) { return [...array.slice(2)]};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(fare) {
   return function() {
     return fare * 5
  }
};

const fareMultiplier = createFareMultiplier(2);
const fareQuintupler = createFareMultiplier(5);

const fareDoubler = function(int) {
  return (int * 2);
}

fareDoubler(10);

function fareTripler(fare) {
  return (fare * 3)
   }

fareTripler(12);


const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
  return returnFirstTwoDrivers(arrayOfDrivers)
  }
