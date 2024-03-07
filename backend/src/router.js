import express from 'express';
import * as tasksControllers from './controllers/tasksControllers.js';

export const router = express.Router();

router.get('/tasks', tasksControllers.getAll);

export default router;
