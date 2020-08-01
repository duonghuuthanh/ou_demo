var Product = /** @class */ (function () {
    function Product(n, p) {
        this.name = n;
        this.price = p;
    }
    Product.prototype.compareByPrice = function (p) {
        // this and p
        var p1 = this.price;
        var p2 = p.price;
        return p1 > p2 ? 1 : (p1 < p2 ? -1 : 0);
    };
    Product.prototype.show = function () {
        console.info("Name: " + this.name + "; Price: " + this.price);
    };
    return Product;
}());
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.products = [];
    }
    ProductManager.prototype.addProduct = function (p) {
        this.products.push(p);
    };
    ProductManager.prototype.show = function () {
        this.products.forEach(function (p) { return p.show(); });
    };
    ProductManager.prototype.searchByName = function (kw) {
        return this.products.filter(function (p) { return p.name.toLowerCase().indexOf(kw.toLowerCase()) >= 0; });
    };
    ProductManager.prototype.searchByPrice = function (fromPrice, toPrice) {
        if (fromPrice === void 0) { fromPrice = 0; }
        if (toPrice === void 0) { toPrice = 10; }
        return this.products.filter(function (p) { return p.price >= fromPrice && p.price <= toPrice; });
    };
    ProductManager.prototype.sortByPrice = function () {
        this.products.sort(function (p1, p2) { return -p1.compareByPrice(p2); });
    };
    return ProductManager;
}());
var p1 = new Product("BANG", 20);
var p2 = new Product("PHAN VIET BANG", 12);
var p3 = new Product("Ban phim", 44);
var p4 = new Product("Chuot", 12);
var ls = new ProductManager();
ls.addProduct(p1);
ls.addProduct(p2);
ls.addProduct(p3);
ls.addProduct(p4);
console.info("=====ALL=====");
ls.show();
console.info("=====SEARCH BY NAME=====");
ls.searchByName("ban").forEach(function (p) { return p.show(); });
console.info("=====SEARCH BY PRICE=====");
ls.searchByPrice(18, 25).forEach(function (p) { return p.show(); });
console.info("=====SORT BY PRICE=====");
ls.sortByPrice();
ls.show();
