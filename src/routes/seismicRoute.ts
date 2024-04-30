import express from "express";
import { getseismicData } from "../controllers/seismicController.js";
import { validateCityName } from "../middleware/validators.js";

// We will create a router object
const router = express.Router();

// We will create a route for the seismic data based on the city name
router.get("/:city", validateCityName, getseismicData);

// We will export the router
export default router;