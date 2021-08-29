const { Router } = require('express');
const { v4: uuidv4 } = require('uuid');
const { GameGenre } = require('../db.js');
const router = Router();

router.get('/', (req, res, next) => {
  return GameGenre.findAll()
    .then((gameGenres) => res.send(gameGenres))
    .catch((err) => next(err));
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  console.log('entre');
  return GameGenre.findByPk(id)
    .then((gameGenre) => res.send(gameGenre))
    .catch((err) => next(err));
});

router.post('/', (req, res) => {
  const gameGenre = req.body;
  return GameGenre.create({
    ...character,
    id: uuidv4(),
  });
});

router.put('/', (req, res) => {
  res.send('ruta gamegenre');
});

router.delete('/', (req, res) => {
  res.send('ruta gamegenre');
});

module.exports = router;
