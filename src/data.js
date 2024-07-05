const axios = require("axios");
const cheerio = require("cheerio");

// URL of the web page to scrape
const url =
  "https://console.liara.ir/databases/66431369611ef537f1d4f9c1/connect";

// Send a GET request to fetch the HTML content
axios
  .get(url)
  .then((response) => {
    const html = response.data;

    // Parse the HTML content using Cheerio
    const $ = cheerio.load(html);

    // Extract specific data (e.g., all the text within <h1> tags)
    $("body").each((index, element) => {
      console.log($(element).text().trim());
    });
  })
  .catch((error) => {
    console.error("Error fetching the web page:", error);
  });
