/** Program to find Unique words and count of unique words in a string */

const str = "Vaibhav is registered as vaibhav Kambli";

const words = str.toLowerCase().split(" ");

let set = new Set(words);

console.log(set);

console.log("Unique words in strings: ", set.size);
