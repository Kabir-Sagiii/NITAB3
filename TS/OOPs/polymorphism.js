var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Products = /** @class */ (function () {
    function Products() {
        this.pname = "Macbook";
        this.price = 9889;
        // print(bname:number):void{
        //     this.bname = bname
        //    console.log(this.pname,this.price)
        // }
    }
    Products.prototype.print = function (bname) {
        this.bname = bname;
        console.log(this.pname, this.price);
    };
    return Products;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Apple.prototype.print = function (bname) {
        this.bname = bname;
        console.log("This is from child class Implementation");
        console.log(this.bname);
    };
    Apple.prototype.details = function () {
        // this.print("iphone")
        this.print("Oppo");
        _super.prototype.print.call(this, "Vivo");
    };
    return Apple;
}(Products));
var apple1 = new Apple();
//    apple1.print("iphone")
apple1.details();
