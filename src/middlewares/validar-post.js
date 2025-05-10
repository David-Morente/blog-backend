import { body } from 'express-validator';
import { validarCampos } from './validar-campos.js';

export const validarCreatePost = [
    body('title').notEmpty().withMessage('El título es obligatorio'),
    body('content').notEmpty().withMessage('El contenido es obligatorio'),
    body('courseCategory').notEmpty().withMessage('El curso al que pertenece es obligatorio'),
    validarCampos
]