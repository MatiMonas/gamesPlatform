const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
  try {
    throw new Error('f');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
