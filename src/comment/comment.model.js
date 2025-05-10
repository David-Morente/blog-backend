import { Schema, model } from 'mongoose';

const postSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
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

export default model("Comment", postSchema);