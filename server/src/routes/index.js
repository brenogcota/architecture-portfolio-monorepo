const { Router } = require('express');
const mail = require('../helpers/mail');

const router = Router();

router.get('/', (req, res) => {
    res.json({ message: 'Hello' });
});

router.post('/subscribe', mail);
    

module.exports = router;