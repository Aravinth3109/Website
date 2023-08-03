let json1 = '{"name": "Person 1", "age":5}';
let json2 = '{"age":5, "name": "Person "}';

let obj1 = JSON.parse(json1);
let obj2 = JSON.parse(json2);

let sortedObj1 = {};
Object.keys(obj1).sort().forEach(key => {
  sortedObj1[key] = obj1[key];
});

let sortedObj2 = {};
Object.keys(obj2).sort().forEach(key => {
  sortedObj2[key] = obj2[key];
});

let sortedJson1 = JSON.stringify(sortedObj1);
let sortedJson2 = JSON.stringify(sortedObj2);

console.log(sortedJson1 === sortedJson2);