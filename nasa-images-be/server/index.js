const express = require("express");
const https = require("https");

const app = express();
const PORT = 4000;

app.get("/image-list", async (req, res) => {
  try {
    const imageList = await getData();
    res.status(200).send(imageList);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred");
  }
});

function getData() {
  return new Promise((resolve, reject) => {
    const url = "https://images-api.nasa.gov/search?q=moon";
    https
      .get(url, (resp) => {
        let data = "";

        // A chunk of data has been received.
        resp.on("data", (chunk) => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          try {
            const newLinksArray = JSON.parse(data)
              .collection.items.map((item) => item.links)
              .flat();
            const imagesList = newLinksArray.map((image) => image?.href);
            resolve(imagesList);
          } catch (error) {
            reject(error);
          }
          /* 
          let items = JSON.parse(data).collection.items;
          let linksArray = [];
          for (const item of items) {
            linksArray.push(item.links);
          }
          const newLinksArray = linksArray.flat();
          console.log(newLinksArray) 
    
          const imagesList = []
          for (const image of newLinksArray) {
            imagesList.push(image?.href); // ? to handle null objects
          }
          resolve(imagesList);
          */
        });
      })
      .on("error", (err) => {
        console.log("Error: " + err.message);
        reject(err);
      });
  });
}

app.use((err, req, res, next) => {
  console.error(`Error occurred for request: ${req} :`, err);
  res.status(500).send("An unexpected error occurred");
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
