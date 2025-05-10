import Post from './post.model.js';

export const createPost = async (req, res) => {
    try {
        const data = req.body;

        const post = await Post.create(data);
        return res.status(201).json({
            success: true,
            message: 'Post agregado correctamente',
            post,
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Error al agregar el post',
            error: err.message,
        })
    }
}

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 });
        return res.status(200).json({
            success: true,
            message: 'Posts obtenidos correctamente',
            posts,
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Error al obtener los posts',
            error: err.message,
        })
    }
}

export const getPostByFilter = async (req, res) => {
    try {
        const { category, order } = req.query;

        // Construir el filtro si se especifica una categoría
        const filter = {};
        if (category) {
            filter.courseCategory = category;
        }

        // Definir ordenamiento por fecha
        // 'desc' => más reciente primero, 'asc' => más antiguo primero
        const sortOrder = order === 'asc' ? 1 : -1;

        const posts = await Post.find(filter).sort({ date: sortOrder });

        return res.status(200).json({
            success: true,
            message: 'Posts obtenidos correctamente',
            posts,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Error al obtener los posts',
            error: err.message,
        });
    }
};

export const getPostById = async (req, res) => {
    try {
        const { uid } = req.params;
        const post = await Post.findById(uid);
        if (!post) {
            return res.status(404).json({
                success: false,
                message: 'Post no encontrado',
            })
        }
        return res.status(200).json({
            success: true,
            message: 'Post obtenido correctamente',
            post,
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Error al obtener el post',
            error: err.message,
        })
    }
}
