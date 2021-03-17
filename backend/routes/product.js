import express from 'express';
 const router = express.Router();

 router.get('/products', (req, res)=>{
     console.log('Product list');
     res.json({
         message: "Thanh cong"
     })
 });

 module.exports = router;