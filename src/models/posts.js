import mongoose from 'mongoose';

const postsSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    title: {type: String, required: true},
    metadescription: {type: String, required: true},
    body: {type: String, required: true},
    categoria: {type: String, required: true},
    subcategoria: {type: String, required: true}
})


const Posts = mongoose.model('post', postsSchema);

export default Posts;