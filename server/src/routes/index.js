const { Router, json } = require('express');
const mail = require('../helpers/mail');

const router = Router();

router.get('/', (req, res) => {
    res.json({ message: 'Hello' });
});

router.post('/newsletter', async (req, res)=> {
    const { email, username } = req.body;
    const response = await mail(email, username, 'Newsletter', 'welcome.html')
    res.json({ response })
    
});
    

module.exports = router;