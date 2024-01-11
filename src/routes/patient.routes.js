const express = require("express");
const {
  getPatients,
  createPatient,
  getPatient,
  updatePatient,
  deletePatient,
} = require("../controller/patient.controller");

const patientRoutes = express.Router();

patientRoutes.route("/").get(getPatients).post(createPatient);
patientRoutes
  .route("/:id")
  .get(getPatient)
  .put(updatePatient)
  .delete(deletePatient);

module.exports = patientRoutes;
