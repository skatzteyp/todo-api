const express = require('express');
const router = express.Router();

const { Todo } = require('../models/index');

router.get('/', async function(_, res, __) {
  const data = await Todo.findAll();

  res.send(data);
});

router.get('/:id', async function(req, res, __) {
  const { id } = req.params;
  const data = await Todo.findByPk(id);

  res.send(data);
});

router.post('/', async function(req, res, __) {
  const { title, description } = req.body;

  const todo = await Todo.create({
    title,
    description
  });

  res.send(todo);
});

router.put('/', async function(req, res, __) {
  const todo = await Todo.upsert(req.body);

  res.send(todo);
});

router.delete('/:id', async function(req, res, __) {
  const { id } = req.params;

  const result = await Todo.destroy({
    where: {
      id
    }
  });

  if (result) {
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});

module.exports = router;
