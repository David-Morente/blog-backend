import { body } from 'express-validator';
import { validarCampos } from './validar-campos.js';

export const validarCreateComment = [
    body('username').notEmpty().withMessage('El nombre de usuario es obligatorio'),
    body('content').notEmpty().withMessage('El contenido es obligatorio'),
    body('post').notEmpty().withMessage('El id del post es obligatorio'),
    validarCampos
]