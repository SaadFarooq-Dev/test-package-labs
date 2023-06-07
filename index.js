module.exports = async function getContests() {
  const axios = require("axios"); // Importing the Axios module to make API requests
  const { data } = await axios
    .get(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
    )
  return data
};
