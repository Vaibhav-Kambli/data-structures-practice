/** Implementation of Object keys and values */

var obj = { 1: "a", 2: "b", 3: "c" };

const index = [];

const hashValue = Object.values(obj);

const indexValue = Object.keys(obj)

index.push(indexValue);

console.log("Hash Value:", hashValue);

console.log("Index value:", index);
