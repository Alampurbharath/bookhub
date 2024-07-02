import express from 'express';
import { getBook } from '../controller/book.controller.js';

const router = express.Router();

// Define routes
router.get('/', getBook);

export default router;
