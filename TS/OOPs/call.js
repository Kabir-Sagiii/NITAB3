var obj1 = {
  x: 100,
};

var obj2 = {
  x: 300,
};

function fnAdd(a1, a2) {
  //   var n1 = 20;
  //   var n2 = 30;

  var n1 = a1;
  var n2 = a2;

  var results = n1 + n2 + this.x; /// logic to perform addition
  console.log(results);
}

// fnAdd();
// fnAdd();    // this is refering to window object

// fnAdd.call(obj1);
fnAdd.call(obj1, 100, 100);

fnAdd.call(obj2, 20, 70);

fnAdd.apply(obj1, [2, 3]);
fnAdd.apply(obj2, [10, 10]);
