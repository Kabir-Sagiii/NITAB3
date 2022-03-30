var product = {
  //node js
  pname: "Macbook Air",
  price: 75000,
  qty: 5,

  totalAmount: function () {
    return this.price * this.qty; //product.price  product.qty
  },
};

var results = product.totalAmount();
console.log(results);
