const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/products", ProductController.addAProduct);
    app.get("/api/products/:id", ProductController.findOneProduct);
    app.put("/api/products/:id", ProductController.editOneProduct);
    app.delete("/api/products/:id", ProductController.deleteOneProduct); 
}