const productController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', productController.index);
    app.post('/api/product', productController.createproduct);
    app.get('/api/product', productController.getAllProduct);
    app.get('/api/product/:id', productController.getProduct);
    app.put('/api/product/:id', productController.updateProduct);
    app.delete('/api/product/:id', productController.deleteProduct);
}