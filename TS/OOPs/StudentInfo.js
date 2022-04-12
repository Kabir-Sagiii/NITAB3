var studentInfo = {
  sname: "S1",
  email: "S1@gmail.com",
  address: {
    city: {
      area1: "A1",
      area2: [{ name: "area2-1" }, { name: "area2-2" }, { name: "area2-3" }],
      area3: "A3", //                studentInfo.address.city.area3
    },
    state: "State1", //   studentInfo.address.city.area2[1].name
  },
};

console.log(studentInfo.sname);
//  studentInfo.address.state

console.log(studentInfo.address.state);
console.log(studentInfo.address.city.area3);
console.log(studentInfo.address.city.area2[1].name);
