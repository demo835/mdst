const express = require('express');
const router = express.Router();

// const applicationController = require('../controllers/applicationCont')
// const adminController = require('../controllers/adminController')

// router.get('/', applicationController.index);
// router.get('/admin', adminController.dashboard)
// router.get('/admin/getGames', adminController.getGames)
// router.post('/admin/getGames', adminController.getGames)

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })

module.exports = router;