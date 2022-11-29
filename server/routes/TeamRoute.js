import express from 'express'
import { getTeam, getTeamById } from '../controllers/TeamController.js';

const router = express.Router();

router.get('/teams', getTeam)
router.get('/team/:id', getTeamById)

export default router;