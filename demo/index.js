// mô tả 1 user

var user1 = {
  // key:value,
  name: "alice",
  age: 5,
};
console.log("😀 - user1", user1);

// lấy ra value của 1 key

console.log(user1.name);

var sp1 = {
  name: "sữa th true milk",
  soLuong: 1,
};
// update value của key
sp1.soLuong = 5;
console.log("😀 - sp1", sp1);

var cat1 = {
  name: "miu",
  //property~ thuộc tính
  age: 1,
  talk: function () {
    //method~ phương thức
    console.log("meo meo", this.name);
  },
};

console.log(cat1.name);
cat1.talk();
