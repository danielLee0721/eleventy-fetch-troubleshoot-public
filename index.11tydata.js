const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  const datoToken = "58fbba1e7fd591b79da32c2c12858d";
  const url = "https://graphql.datocms.com";

  try {
    let fetchedData = await EleventyFetch(url, {
      fetchOptions: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${datoToken}`,
        },
        body: JSON.stringify({
          query: `{
            test {
              title
            }
          }`,
        }),
      },
      duration: "30s",
      type: "json",
    });

    console.log(" >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ");
    console.log(fetchedData.data.test);
    console.log(" >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ");
    return fetchedData.data.test;
  } catch (e) {
    console.log("fetching data failed");
    process.exit(1);
  }
};
