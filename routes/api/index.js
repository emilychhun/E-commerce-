let router = require('express').Router();
let categoryRoutes = require('./category-routes');
let productRoutes = require('./product-routes');
let tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
