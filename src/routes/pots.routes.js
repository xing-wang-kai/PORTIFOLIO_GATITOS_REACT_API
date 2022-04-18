import postsController from '../controller/posts.controller.js'
import Router from 'express';

const router = Router();

router.get('/', postsController.getAll);
router.post('/', postsController.creatPost);
router.get('/:id', postsController.buscarOne);
router.put('/:id', postsController.editar);
router.delete('/:id', postsController.deletar);

export default router;