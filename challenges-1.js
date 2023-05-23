// ================================================================

// Titanic Dataset challenges!

// Your goal is to write some functions that will extract
// relevant data from the dataset.

// Write your code here in this file.

// *************************************
// Test your code by running: `npm test`
// *************************************

// Each of the functions below expects to receive the Titanic data
// as the parameter data. Your goal is to extract the relevant
// piece of information from the data and return it.

// =================================================================

// 1 ---------------------------------------------------------------
// Return the total number of passengers.
// Returns a number.

const getTotalPassengers = (data) => {
  return data.length;
};

// 2 ---------------------------------------------------------------
// Return the number of surviving passengers. A passenger survived
// if their survived property is "Yes".
// Return a number.

const getSurvivorCount = (data) => {
  return data.filter((passenger) => passenger.fields.survived === "Yes").length;
};

// 3 ---------------------------------------------------------------
// Return the number of passengers who did not survive. A passenger
// did not survive if their survived property is "No".
// Return a number.

const getCasualityCount = (data) => {
  return data.filter((passenger) => passenger.fields.survived === "No").length;
};

// 4 ---------------------------------------------------------------
// Return the number of passengers in any class. This function
// takes the data and the passenger class a string. Find all of the
// passengers whose pclass matches and return the count.
// Return a number

const countPassengersInClass = (data, pclass) => {
  return 0;
};

// 5 ---------------------------------------------------------------
// Return the number of survivors in a class. This function takes
// the data and passenger class.
// Return the count of survivors in that pclass.

const getSurvivorCountForClass = (data, pclass) => {
  return 0;
};

// 6 ---------------------------------------------------------------
// Return the number of passengers who did not survive in a class.
// This function takes the data and the passenger class and returns
// the number of passengers who did not survive for that class.

const getCasualityCountForClass = (data, pclass) => {
  return 0;
};

// 7 ---------------------------------------------------------------
// Return the age of the youngest passenger. You need to filter
// passenger data where the age is missing.

const getMinAge = (data) => {
  return 0;
};

// 8 ---------------------------------------------------------------
// Return the age of the oldest passenger. Filter passengers where
// age is missing.

const getMaxAge = (data) => {
  return 0;
};

// 9 ---------------------------------------------------------------
// Return the number of passengers that embarked at a given stop.
// Each passenger has a embarked property with a value of: S, C,
// or Q. This function takes in the passenger data and the
// embarkation code. Return the count of passenegers with that code.

const getEmbarkedCount = (data, embarked) => {
  return 0;
};

// 10 ---------------------------------------------------------------
// Return the lowest fair paid by any passenger. The fare is missing
// for some passengers you'll need to filter this out!

const getMinFare = (data) => {
  return -1;
};

// 11 ---------------------------------------------------------------
// Return the highest fare paid by any passenger. Some of the
// passengers are missing data for fare. Be sure to filter these!

const getMaxFare = (data) => {
  return 0;
};

// 12 ---------------------------------------------------------------
// Return the count of passengers by gender. Each passenger object has
// "sex" property that is either "male" or "female"

const getPassengersByGender = (data, gender) => {
  return 0;
};

// 13 ---------------------------------------------------------------
// Return the number of passengers who survived by gender. This
// function receives parameters of data and gender. Match the gender
// to the "sex" property and check the "survived" property.

const getSurvivorsByGender = (data, gender) => {
  return 0;
};

// 14 ---------------------------------------------------------------
// Return the number of passengers who did not survived by gender.

const getCasualitiesByGender = (data, gender) => {
  return 0;
};

// 15 --------------------------------------------------------------
// Return the total of all fares paid. Add up all of the fares and
// return that number. Be sure to filter the passengers records
// where the fare is missing!

const getTotalFare = (data) => {
  return 0;
};

// 16 --------------------------------------------------------------
// Return the average fare paid. Add up all of the fares and divide
// by the number of passengers. Be sure to filter passengers who are
// missing a fare!

const getAverageFare = (data) => {
  return 0;
};

// 17 --------------------------------------------------------------
// Return the median fare. The median is the value equal distance
// from the minimum and maximum values. Filter passengers who are
// missing fares. Sort the passengers on the fare pick the one in
// the middle: [11,33,77] <- 33 is the median. If number of items
// is even average the two middle values. For example: [2,4,5,16]
// 4 + 5 = 9 / 2 median is 4.5!

const getMedianFare = (data) => {
  return 0;
};

// 18 --------------------------------------------------------------
// Return the average age of all passengers. Add all ages and divide
// by the number of passenegers. Be sure to filter where ages are not
// available.

const getAverageAge = (data) => {
  return 0;
};

// 19 --------------------------------------------------------------
// Return the median age from passengers.

const getMedianAge = (data) => {
  return 0;
};

// 20 --------------------------------------------------------------
// Add up all of the ages for the gender provided and divide by the
// the total number.

const getAverageAgeByGender = (data, gender) => {
  return 0;
};

// --------------------------------------------------------------
// --------------------------------------------------------------
module.exports = {
  getTotalPassengers,
  getSurvivorCount,
  getCasualityCount,
  countPassengersInClass,
  getSurvivorCountForClass,
  getCasualityCountForClass,
  getMinAge,
  getMaxAge,
  getEmbarkedCount,
  getMaxFare,
  getMinFare,
  getPassengersByGender,
  getSurvivorsByGender,
  getCasualitiesByGender,
  getTotalFare,
  getAverageFare,
  getMedianFare,
  getAverageAge,
  getMedianAge,
  getAverageAgeByGender,
};
