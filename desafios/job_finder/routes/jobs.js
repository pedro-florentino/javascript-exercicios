const express = require("express");
const router = express.Router();
const Job = require("../models/Job.js");
const { where } = require("sequelize");

// Test route to check if the job route is working
// This route is used for testing purposes and can be removed later
router.get("/test", (req, res) => {
  res.send("Job route is working!");
});

// Details of a specific job
router.get("/view/:id", async (req, res) => {
  const id = req.params.id;

  // Find the job by ID
  try {
    const job = await Job.findByPk(id);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.render("view", { job });
    console.log(id);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route rendering the add job form
router.get("/add", (req, res) => {
  res.render("add");
});

// Add a new job
router.post("/add", async (req, res) => {
  const { title, description, salary, company, email, new_job } = req.body;

  // Validate the input data
  if (!title || !description || !salary || !company || !email || !new_job) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

  // Insert the new job into the database
  try {
    await Job.create({
      title,
      description,
      salary,
      company,
      email,
      new_job,
    });
    // res.status(201).json({ message: "Job added successfully" });
    console.log("Job added successfully");
    // Redirect to the home page after adding the job
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
