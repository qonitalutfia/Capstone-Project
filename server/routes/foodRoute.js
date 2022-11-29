import express from 'express'
import { getFood, getFoodById } from '../controllers/foodController.js';

const router = express.Router();

router.get('/foods', getFood)
router.get('/food/:id', getFoodById)

export default router;