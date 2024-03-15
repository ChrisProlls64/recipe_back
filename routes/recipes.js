import mysql from 'mysql2/promise';
import { RecipeController } from '../controllers/recipe-controller.js';
import { Router } from 'express';

// middleware d'authentification
import verifyToken from '../middleware/auth-middleware.js';

const router = Router();
const recipeController = new RecipeController();

/* GET recipes listing. */
router.get('/', verifyToken, function(req, res, next) {
  recipeController.listAll(req, res);
});

//  create a new recipe
router.post('/', function(req, res) {
  recipeController.create(req, res);
});

// update a recipe
router.put('/:id', (req, res) => recipeController.update(req, res));

// delete a recipe
router.delete('/:id', function(req, res) {
  console.log('access to delete action with id: ', req.params.id );
  recipeController.destroy(req, res);
});

export default router;