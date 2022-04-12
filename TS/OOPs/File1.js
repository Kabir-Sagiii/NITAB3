"use strict";
exports.__esModule = true;
exports.Products = exports.A = void 0;
var A = /** @class */ (function () {
    function A() {
        this.sname = "Rajesh";
        this.scity = "Delhi";
        this.sphn = 9898987654;
    }
    A.prototype.print = function () {
        console.log(this.sname, this.scity, this.sphn);
    };
    return A;
}());
exports.A = A;
var Products = /** @class */ (function () {
    function Products() {
        this.pname = "Nike Shoe";
        this.price = 5000;
        this.qty = 5;
    }
    Products.prototype.totalAmount = function () {
        console.log(this.price * this.qty);
    };
    return Products;
}());
exports.Products = Products;
