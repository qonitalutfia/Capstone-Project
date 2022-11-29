import express from 'express'
import { getPlace, getPlaceById } from '../controllers/PlaceController.js';

const router = express.Router();

router.get('/places', getPlace)
router.get('/place/:id', getPlaceById)

export default router;