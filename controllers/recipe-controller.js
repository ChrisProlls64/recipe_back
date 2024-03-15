import { dbQuery } from '../db.js';

export class RecipeController {
  async listAll(req, res) {
    console.log('recipeController should list them all');
    const [results, fields] = await dbQuery('SELECT * FROM recipes');
    res.send(results);
  }

  async create(req, res) {
    const newRecipe = {
      text: req.body.text
    };
    console.log('recipeController create with text : ', newRecipe.text);
    const [results, fields] = await dbQuery('INSERT INTO recipes (text) VALUE (?)', [newRecipe.text]);
    res.json({message: "recipe added", results: results});
  }

  async update(req, res) {
    const [results] = await dbQuery('UPDATE recipes SET text = ? WHERE id= ?', [req.body.text, req.params.id]);
    res.json({ message: "note updated", results: results});
  }

  async destroy(req, res) {
    const [results, fields] = await dbQuery('DELETE FROM recipes WHERE id = ?', [req.params.id]);
    res.json({message: "recipe deleted",  results: results});
  }
}