import Posts from '../models/posts.js';


class PostsController {
    static getAll =  ( req, res ) => {
        try{
             Posts.find((err, posts)=>{
                if(!err){
                    res.status(200).json(posts);
                }else{
                    res.status(404).json({message: error.message});
                }
            })
        }catch(err){
            res.status(400).json({message: `${err.message} -- Ocorreu um erro!`})
        }
       
    }
    static buscarOne = (req, res) => {
        const {id} = req.params;
        try{
            Posts.findOne({id: id}, (err, post)=>{
                if(!err){
                    res.status(200).json(post);
                }else{
                    res.status(400).json({message: `--O post não foi localizado!`})
                }
            })
        }catch(err){
            res.status(404).json({message: `${err.message} -- Ocorreu um erro!`})
        }
    }
    static creatPost = (req, res) =>{
        const value = req.body;
        try{
            const post = new Posts(value);
            post.save((err)=>{
                if(!err){
                    res.status(200).send({message: `Post foi criado com Sucesso!! `})
                }else{
                    res.status(400).send({message: `${err.message} - Ocorreu um error ao tentar criar O Post`})
                }
    
            });
        }catch(err){
            res.status(404).json({message: `${err.message} -- Ocorreu um erro!`})
        }
    }
    static editar = (req, res) => {
        const {id} = req.params;
        const valore = req.body;
        try{
            Posts.findByIdAndUpdate(id, {$set: valore}, (err) =>{
                if(!err){
                    res.status(200).send({message: `O post foi alterado com sucesso!! `})
                }else{
                    res.status(400).send({message: `${err.message} - Ocorreu um erro ao alterar o Post`})
                }
            })
        }catch(err){
            res.status(404).json({message: `${err.message} -- Ocorreu um erro!`})
        }
    }
    static deletar = (req, res) => {
        const { id } = req.params;
        try{
            Posts.findByIdAndDelete(id, (err) => {
                if(!err){
                    res.status(200).json({message: `O Posts foi deletado com sucesso`})
                }
                else{
                    res.status(404).json({message: `Posts não foi localizado`})
                }
            });
            
        }catch(err){
            res.status(404).json({message: "Error ao tentar deletar Posts!"})
        }
    }
}

export default PostsController;