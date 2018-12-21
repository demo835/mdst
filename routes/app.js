const express = require('express');
const router = express.Router();

// const applicationController = require('../controllers/applicationCont')
// const adminController = require('../controllers/adminController')

// router.get('/', applicationController.index);
// router.get('/admin', adminController.dashboard)
// router.get('/admin/getGames', adminController.getGames)
// router.post('/admin/getGames', adminController.getGames)

router.get('/', function (req, res) {
    res.render('profile', { title: 'Hey', message: 'Hi Christine!' })
  })

module.exports = router;

// Tyler number = 7026064834