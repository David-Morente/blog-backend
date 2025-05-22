import { Schema, model } from 'mongoose';

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    courseCategory: {
        type: String,
        required: true,
        enum: ['Taller', 'Tecnología', 'Práctica supervisada'],
    },
    postImage: [{
        type: String,
    }],
    date: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: Boolean,
        default: true
    }
},
{
    timestamps: true,
    versionKey: false,
});

export default model("Post", postSchema);