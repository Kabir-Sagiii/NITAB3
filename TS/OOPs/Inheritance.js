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
var Brands = /** @class */ (function () {
    function Brands(brandName) {
        this.brandName = brandName;
    }
    Brands.prototype.printBrand = function () {
        console.log(this.brandName);
    };
    return Brands;
}());
var MobileBrand = /** @class */ (function (_super) {
    __extends(MobileBrand, _super);
    function MobileBrand(modelName) {
        var _this = _super.call(this, "Apple") || this;
        _this.modelName = modelName;
        return _this;
    }
    MobileBrand.prototype.details = function () {
        this.printBrand();
        console.log(this.modelName);
    };
    return MobileBrand;
}(Brands));
var mb1 = new MobileBrand("Iphone 13");
mb1.details();
mb1.brandName = "Oppo";
mb1.modelName = "Oppo 13";
mb1.details();
var LaptopBrand = /** @class */ (function (_super) {
    __extends(LaptopBrand, _super);
    function LaptopBrand() {
        var _this = _super.call(this, "Apple") || this;
        _this.modelName = "Macbook Pro M1 Chip";
        return _this;
    }
    LaptopBrand.prototype.getData = function () {
        this.printBrand();
        console.log(this.modelName);
    };
    return LaptopBrand;
}(Brands));
var lb1 = new LaptopBrand();
lb1.getData();
