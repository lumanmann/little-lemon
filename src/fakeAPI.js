// This function accepts a date as a parameter and returns an array of available reservation times for the provided date
const fetchAPI = (date) => {
  if (date < new Date()) {
    return [];
  }
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  let result = [];
  let random;
  for (let i = 11; i <= 20; i++) {
    random = randomIntFromInterval(0, 3);

    if (random == 0) result.push(i + ':00');
    if (random == 1) result.push(i + ':30');
  }

  return result;
};

// This function accepts the booking form data as a parameter and will return true if the data was successfully submitted.
const submitAPI = (formData) => {
  for (let i in formData) {
    if (i == '' || i == undefined) {
      return false;
    }
  }

  return true;
};

export { fetchAPI, submitAPI };
