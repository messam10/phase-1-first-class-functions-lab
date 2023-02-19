const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};
function createFareMultiplier(fareMultiplier) {
    return function (fareQuintupler) { return fareQuintupler * fareMultiplier; };
}
function selectDifferentDrivers(arrayOfDrivers, functionDrivers) {
    return functionDrivers(arrayOfDrivers);
}

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const fareDoubler = (x) => 2 * x;
const fareTripler = (x) => 3 * x;

console.log(returnFirstTwoDrivers(drivers));
console.log(returnLastTwoDrivers(drivers));
console.log(selectingDrivers);
console.log(createFareMultiplier(5)(2));
console.log(fareDoubler(10));
console.log(fareTripler(12));
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));