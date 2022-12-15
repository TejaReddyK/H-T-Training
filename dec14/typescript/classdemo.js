var categories;
(function (categories) {
    categories["cloth"] = "cloth";
    categories["accessories"] = "accessories";
    categories["mobiles"] = "mobiles";
})(categories || (categories = {}));
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
class ShoppingCart {
    constructor(map) {
        this.products = map;
    }
    totalPrice() {
        let price = 0;
        this.products.forEach(product => {
            console.log(product);
        });
    }
}
let mymap = new Map();
let p1 = new Product(1, 'jeans', 900, categories.cloth);
mymap.set(p1, 1);
let cart = new ShoppingCart(mymap);
cart.totalPrice();
