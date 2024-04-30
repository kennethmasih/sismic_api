import express from 'express';
import { getSesmicData} from '../controllers/sesmicController.js';
import { validateCityName } from '../middleware/validators.js';

// We will create a router object
const router = express.Router();

// We will create a route for the weather data based on the city name

router.get('/:city', validateCityName, getSesmicData);

// We will export the router
export default router;
[10:38 PM]
