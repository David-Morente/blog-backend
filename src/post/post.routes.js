import { Router } from 'express';
import { createPost, getPosts, getPostById, getPostByFilter } from './post.controller.js';
import { validarCreatePost } from '../middlewares/validar-post.js';

export const router = Router();

router.post('/createPost', validarCreatePost, createPost);

router.get('/getPosts', getPosts);

router.get('/getPostById/:uid', getPostById);

router.get('/postByFilter', getPostByFilter);

export default router;