import { Router } from 'express';
import { createPost, getPosts, getPostById, getPostByFilter } from './post.controller.js';
import { validarCreatePost } from '../middlewares/validar-post.js';
import { uploadPostImage } from '../middlewares/multer-uploads.js';

export const router = Router();

router.post('/createPost', uploadPostImage.single("postImage"), validarCreatePost, createPost);

router.get('/getPosts', getPosts);

router.get('/getPostById/:uid', getPostById);

router.get('/postByFilter', getPostByFilter);

export default router;