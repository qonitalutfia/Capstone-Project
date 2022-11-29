import express from 'express'
import { getTrainers, getTrainersById } from '../controllers/TrainersController.js';

const router = express.Router();

router.get('/trainers', getTrainers)
router.get('/trainer/:id', getTrainersById)

export default router;