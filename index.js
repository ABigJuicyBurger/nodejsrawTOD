const http = require("http");
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "index.html");

  // Now we can send the file
  res.sendFile(filePath);
});

app.get("/about", (req, res) =>
  res.sendFile(path.join(__dirname, "about.html"))
);

app.get("/contact-me", (req, res) =>
  res.sendFile(path.join(__dirname, "contact-me.html"))
);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Rewrite info site using express now, listening to port", PORT);
});
