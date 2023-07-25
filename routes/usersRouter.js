const express = require('express');
const router = express.Router();
/* const pool = require('../src/db'); */

router.get('/', (req, res) => {
  res.render('users');
});

module.exports = router;