import { Router } from 'express';
import { createComment, getComments, getLatestComment } from './comment.controller.js';
import { validarCreateComment } from '../middlewares/validar-comment.js';

const router = Router();

router.post('/createComment', validarCreateComment, createComment);

router.get('/getComments', getComments);

router.get('/getLatestComment/:idPost', getLatestComment);

export default router;