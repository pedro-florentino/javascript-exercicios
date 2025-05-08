const express = require("express");
const app = express();
const db = require("./db/connection.js");
const bodyParser = require("body-parser");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// Db connection
db.authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Routes
app.get("/", (req, res) => {
  res.send("Esta funcionando!");
});

// Jobs routes
app.use("/jobs", require("./routes/jobs.js"));
