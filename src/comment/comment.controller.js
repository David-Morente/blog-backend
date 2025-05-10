import Comment from './comment.model.js';

export const createComment = async (req, res) => {
    try {
        const data = req.body;

        const comment = await Comment.create(data);
        return res.status(201).json({
            success: true,
            message: 'Comentario agregado correctamente',
            comment,
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Error al agregar el comentario',
            error: err.message,
        })
    }
}

export const getComments = async (req, res) => {
    try {
        const comments = await Comment.find()
            .sort({ date: -1 })
            .populate({
                path: 'post',
                select: 'title content courseCategory'
            });

        return res.status(200).json({
            success: true,
            message: 'Comentarios obtenidos correctamente',
            comments,
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Error al obtener los comentarios',
            error: err.message,
        })
    }
}

export const getLatestComment = async (req, res) => {
    try {
        const latestComment = await Comment.findOne().sort({ date: -1 });

        if (!latestComment) {
            return res.status(404).json({
                success: false,
                message: 'No se encontró ningún comentario',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Último comentario obtenido correctamente',
            comment: latestComment,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Error al obtener el último comentario',
            error: err.message,
        });
    }
};