const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");
const db = require("./db/connection.js");
const bodyParser = require("body-parser");
const Job = require("./models/Job.js");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// handlebars
app.set("views", path.join(__dirname, "views"));
app.engine(
  "handlebars",
  exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views", "layouts"),
  })
);
app.set("view engine", "handlebars");

// static files
app.use(express.static(path.join(__dirname, "public")));

// Db connection
db.authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Route to get all jobs
app.get("/", async (req, res) => {
  let search = req.query.job;
  let query = '%'+search+'%';

  if (!search) {
    try {
      const jobs = await Job.findAll({ order: [["createdAt", "DESC"]] });
      // Render the index view with the jobs data
      res.render("index", { jobs });
    } catch (error) {
      console.error("Error fetching jobs:", error);
      res.status(500).send("Internal server error");
    }
  } else {
    try {
      const jobs = await Job.findAll({
        where: { title: { [Op.like]: query } },
        order: [["createdAt", "DESC"]],
      });
      // Render the index view with the jobs data
      res.render("index", { jobs, search });
    } catch (error) {
      console.error("Error fetching jobs:", error);
      res.status(500).send("Internal server error");
    }
  }
});

// Jobs routes
app.use("/jobs", require("./routes/jobs.js"));
