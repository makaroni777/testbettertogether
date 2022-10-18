const { Router } = require('express');
const contractController = require('../controllers/contractController');

const router = Router();


router.post('/form', contractController.form_post);
router.get('/sign_document', contractController.form_get);

module.exports = router;