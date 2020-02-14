const express = require("express");
const teachers = require("../teacherdetail");

const teachersRouter = express.Router();

teachersRouter
  .get("/", (req, res) => {
    res.status(200).json({ teachers });
  })
  .post("/", (req, res) => {
    if (req.body.id && req.body.firstName) {
      teachers.push(req.body);
      res.status(200).json({ message: "Student created successfully" });
    } else {
      res.status(400).send("Bad Request");
    }
  });

module.exports = teachersRouter;
